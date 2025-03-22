import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const CONCURRENCY_LIMIT = 5;

async function fetchWithLimit(urls) {
  const results = [];
  let index = 0;

  async function fetchNext() {
    if (index >= urls.length) return;

    const url = urls[index++];
    try {
      const res = await fetch(url);
      const data = await res.json();
      results.push(data);
    } catch (error) {
      console.error(`Failed to fetch ${url}`, error);
      results.push(null);
    }

    await fetchNext();
  }

  const workers = Array(CONCURRENCY_LIMIT).fill(null).map(fetchNext);
  await Promise.all(workers);

  return results;
}

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async (url, setState, cacheKey) => {
    const cachedData = JSON.parse(sessionStorage.getItem(cacheKey));
    if (cachedData) {
      setState(cachedData);
      return;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`API lỗi: ${res.status}`);

      const data = await res.json();

      // Chuyển đổi dữ liệu thành object { id: item }
      if (data && Array.isArray(data)) {
        const dataMap = Object.fromEntries(data.map((item) => [item.id, item]));
        sessionStorage.setItem(cacheKey, JSON.stringify(dataMap));
        setState(dataMap);
      }
    } catch (error) {
      console.error(`Lỗi khi lấy dữ liệu từ ${url}`, error);
      setState([]); // Gán mảng rỗng nếu có lỗi
    }
  };

  useEffect(() => {
    const loadAllData = async () => {
      setLoading(true);
      await Promise.all([
        loadData(
          "https://67d23e3290e0670699bcc2c3.mockapi.io/da/dongHo",
          setProducts,
          "products"
        ),
        loadData(
          "https://67d23e3290e0670699bcc2c3.mockapi.io/da/laptop",
          setLaptops,
          "laptops"
        ),
        loadData(
          "https://67dbd0561fd9e43fe476065f.mockapi.io/tablet",
          setTablets,
          "tablets"
        ),
        loadData(
          "https://67dbd0561fd9e43fe476065f.mockapi.io/audio",
          setAudios,
          "audios"
        ),
      ]);
      setLoading(false);
    };

    loadAllData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, laptops, tablets, audios, loading }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

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
    const [products, setProducts] = useState({});
    const [laptops, setLaptops] = useState({});
    const [tablets, setTablets] = useState({});
    const [audios, setAudios] = useState({});
    const [loading, setLoading] = useState(true);

    const loadData = async (type, urlTemplate, setState, cacheKey) => {
        const cachedData = JSON.parse(sessionStorage.getItem(cacheKey));
        if (cachedData) {
            setState(cachedData);
            return;
        }

        const urls = Array.from({ length: 40 }, (_, i) => urlTemplate(i + 1));
        const responses = await fetchWithLimit(urls);

        const dataMap = {};
        responses.forEach((item) => {
            if (item && item.id) {
                dataMap[item.id] = item;
            }
        });

        if (Object.keys(dataMap).length > 0) {
            sessionStorage.setItem(cacheKey, JSON.stringify(dataMap));
            setState(dataMap);
        }
    };

    useEffect(() => {
        const loadAllData = async () => {
            setLoading(true);
            await Promise.all([
                loadData(
                    "products",
                    (id) =>
                        `https://67d23e3290e0670699bcc2c3.mockapi.io/da/wearables/${id}`,
                    setProducts,
                    "products"
                ),
                loadData(
                    "laptops",
                    (id) =>
                        `https://67d23e3290e0670699bcc2c3.mockapi.io/da/laptop/${id}`,
                    setLaptops,
                    "laptops"
                ),
                loadData(
                    "tablets",
                    (id) =>
                        `https://67dbd0561fd9e43fe476065f.mockapi.io/tablet/${id}`,
                    setTablets,
                    "tablets"
                ),
                loadData(
                    "audios",
                    (id) =>
                        `https://67dbd0561fd9e43fe476065f.mockapi.io/audio/${id}`,
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
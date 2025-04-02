import { useEffect, useState } from "react";
import SubCategory from "./SubCategory";
import axios from "axios";
import { motion } from "framer-motion";

const Category = () => {
  const [selected, setSelected] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh mục:", error);
      });
  }, []);

  const selectedCategory = categories[selected];
  const subCategories = selectedCategory ? selectedCategory.subCategory : [];

  if (categories.length === 0) {
    return <p className="text-center text-gray-500">Đang tải dữ liệu...</p>;
  }

  return (
    <>
      <div className="bg-gray-200 w-full mb-5">
        <div className="flex flex-wrap justify-center gap-16 text-center w-3/4 lg:w-full mx-auto mt-14 pt-10 pb-8">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              className={`cursor-pointer flex flex-col items-center font-semibold hover:scale-105 transition-transform duration-300 ${
                selected === index ? "opacity-100 scale-105" : "opacity-50"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(index)}
            >
              <img src={item.iconImage} alt={item.name} className="w-20" />
              <p className="mt-2">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="bg-white-200 mt-10 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <SubCategory
            subCategories={subCategories}
            selectedCategory={selectedCategory}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Category;

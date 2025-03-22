import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Product from "./Product";
import { motion, AnimatePresence } from "framer-motion";

const SubCategory = ({ subCategories, selectedCategory }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    subCategories[0] || null
  );

  useEffect(() => {
    setSelectedSubCategory(subCategories[0] || null);
  }, [selectedCategory, subCategories]);

  if (!selectedSubCategory) {
    return (
      <p className="text-center text-gray-500">Không có sub-category nào.</p>
    );
  }

  const products =
    selectedSubCategory.models || selectedSubCategory.model || [];

  return (
    <>
      <div className="flex justify-center gap-12 border-b mb-20">
        {subCategories.map((sub, index) => (
          <motion.span
            key={index}
            className={`cursor-pointer px-4 py-2 ${
              selectedSubCategory === sub
                ? "font-semibold border-b-2 border-black"
                : "opacity-50 hover:opacity-90 transition duration-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSubCategory(sub)}
          >
            {sub.series}
          </motion.span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSubCategory.series}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Product products={products} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

SubCategory.propTypes = {
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      series: PropTypes.string.isRequired,
      models: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          image: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  selectedCategory: PropTypes.object,
};

export default SubCategory;

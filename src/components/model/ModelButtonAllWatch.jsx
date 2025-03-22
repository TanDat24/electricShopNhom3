import CartComputer from "../ui/CartUI/CartComputer";
import ListCart from "../ui/CartUI/ListCart";
import { useProducts } from "../../../api/WearablesAPI";

// eslint-disable-next-line react/prop-types
const ModelButtonAllWatch = ({ onClose }) => {
  const { products } = useProducts();

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start bg-black bg-opacity-50 "
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-bgModel rounded-lg shadow-lg my-6 mx-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-bgModel rounded-lg flex items-center justify-end p-4 ">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto scrollbar-hide h-[calc(90vh)]">
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <h1 className="text-colorText text-4xl flex align-center justify-center font-semibold mb-6 mt-10">
              WATCH Ultimate Series
            </h1>
            <div className="border-2 border-solid ">
              {products[19] && (
                <CartComputer
                  image={products[19].images.anh1}
                  name={products[19].name}
                />
              )}
            </div>
          </div>
          <div>
            <h1 className="text-colorText text-4xl flex align-center justify-center font-semibold mb-6 mt-10">
              WATCH Series
            </h1>
            <div className="grid grid-cols-2 gap-2 p-6">
              <div className="bg-white rounded-lg p-4">
                {products[21] && (
                  <ListCart
                    images={products[21].images.anh1}
                    name={products[21].name}
                  />
                )}
              </div>
              <div className="bg-white rounded-lg p-4">
                {products[22] && (
                  <ListCart
                    images={products[22].images.anh1}
                    name={products[22].name}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-colorText text-4xl flex align-center justify-center font-semibold mb-6 mt-10">
              WATCH GT Series
            </h1>
            <div className="p-6 ">
              <div className="mb-2">
                {products[23] && (
                  <CartComputer
                    image={products[23].images.anh1}
                    name={products[23].name}
                  />
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {products[24] && (
                  <ListCart
                    images={products[24].images.anh1}
                    name={products[24].name}
                  />
                )}
                {products[25] && (
                  <ListCart
                    images={products[25].images.anh1}
                    name={products[25].name}
                  />
                )}
                {products[26] && (
                  <ListCart
                    images={products[26].images.anh1}
                    name={products[26].name}
                  />
                )}
                {products[27] && (
                  <ListCart
                    images={products[27].images.anh1}
                    name={products[27].name}
                  />
                )}
                {products[28] && (
                  <ListCart
                    images={products[28].images.anh1}
                    name={products[28].name}
                  />
                )}
                {products[29] && (
                  <ListCart
                    images={products[29].images.anh1}
                    name={products[29].name}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-colorText text-4xl flex align-center justify-center font-semibold mb-6 mt-10">
              WATCH GT Series
            </h1>
            <div className="p-6 ">
              <div className="grid grid-cols-2 gap-2">
                {products[30] && (
                  <ListCart
                    images={products[30].images.anh1}
                    name={products[30].name}
                  />
                )}
                {products[31] && (
                  <ListCart
                    images={products[31].images.anh1}
                    name={products[31].name}
                  />
                )}
                {products[32] && (
                  <ListCart
                    images={products[32].images.anh1}
                    name={products[32].name}
                  />
                )}
                {products[14] && (
                  <ListCart
                    images={products[14].images.anh1}
                    name={products[14].name}
                  />
                )}
                {products[33] && (
                  <ListCart
                    images={products[33].images.anh1}
                    name={products[33].name}
                  />
                )}
                {products[34] && (
                  <ListCart
                    images={products[34].images.anh1}
                    name={products[34].name}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-colorText text-4xl flex align-center justify-center font-semibold mb-6 mt-10">
              Health and Kids Watch
            </h1>
            <div className="p-6 ">
              <div className="grid grid-cols-2 gap-2">
                {products[18] && (
                  <ListCart
                    images={products[18].images.anh1}
                    name={products[18].name}
                  />
                )}
                {products[14] && (
                  <ListCart
                    images={products[14].images.anh1}
                    name={products[14].name}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelButtonAllWatch;

import CartComputer from "../ui/CartUI/CartComputer";
import ListCart from "../ui/CartUI/ListCart";
import { useProducts } from "../../../api/WearablesAPI";

// eslint-disable-next-line react/prop-types
const ModelButtonAllAudio = ({ onClose }) => {
  const { audios } = useProducts();

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start bg-black bg-opacity-50 "
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-bgModel rounded-lg shadow-lg my-6 mx-auto "
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
            <div>
              {audios[3] && (
                <CartComputer
                  image={audios[3].images.anh1}
                  des={audios[3].des}
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
                {audios[1] && (
                  <ListCart
                    images={audios[1].images.anh1}
                    name={audios[1].name}
                  />
                )}
              </div>
              <div className="bg-white rounded-lg p-4">
                {audios[4] && (
                  <ListCart
                    images={audios[4].images.anh1}
                    name={audios[4].name}
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
                {audios[6] && (
                  <CartComputer
                    image={audios[6].images.anh1}
                    des={audios[6].des}
                  />
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {audios[9] && (
                  <ListCart
                    images={audios[9].images.anh1}
                    name={audios[9].name}
                  />
                )}
                {audios[12] && (
                  <ListCart
                    images={audios[12].images.anh1}
                    name={audios[12].name}
                  />
                )}
                {audios[17] && (
                  <ListCart
                    images={audios[17].images.anh1}
                    name={audios[17].name}
                  />
                )}
                {audios[14] && (
                  <ListCart
                    images={audios[14].images.anh1}
                    name={audios[14].name}
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
                {audios[11] && (
                  <CartComputer
                    image={audios[11].images.anh1}
                    des={audios[11].des}
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

export default ModelButtonAllAudio;

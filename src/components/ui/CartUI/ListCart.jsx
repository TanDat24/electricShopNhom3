import ButtonUI from "../ButtonUI/ButtonUI";
// eslint-disable-next-line react/prop-types
<<<<<<< HEAD
const ListCart = ({ images, name, des1, des2 }) => (
  <div className="w-full bg-white rounded-md flex flex-col">
    <div className="flex items-center justify-center flex- py-4">
      <img
        src={images}
        alt="watchGt5Pro"
        className="w-[80%] h-[200px] rounded-md object-contain"
      />
=======
const ListCart = ({ images, name, des1, des2, productId, category }) => (
    <div className="w-full bg-white rounded-md flex flex-col">
        <div className="flex items-center justify-center flex-1">
            <img
                src={images}
                alt="watchGt5Pro"
                className="w-[80%] h-[200px] rounded-md object-contain"
            />
        </div>
        <div className="p-4">
            <p className="text-center text-[20px] font-medium">{name}</p>
            <ul className="text-center text-[13px] text-textGray">
                <li>{des1}</li>
                <li>{des2}</li>
            </ul>
            <div className="flex items-center justify-center mt-2">
                {/* <ButtonUI title="Khám Phá" type="khampham" /> */}
                <ButtonUI
                    title="Khám Phá"
                    type="khampham"
                    category={category}
                    // productId="456"
                    productId={productId}
                />
                <ButtonUI title="Mau ngay" type="khampham" />
            </div>
        </div>
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
    </div>
    <div className="p-4 mt-4">
      <p className="text-center text-[20px] font-medium">{name}</p>
      <ul className="text-center text-[13px] text-textGray">
        <li>{des1}</li>
        <li>{des2}</li>
      </ul>
      <div className="flex items-center justify-center mt-2">
        {/* <ButtonUI title="Khám Phá" type="khampham" /> */}
        <ButtonUI
          title="Khám Phá"
          type="khampham"
          category="wearables"
          productId="456"
        />
        <ButtonUI title="Mua ngay" type="khampham" />
      </div>
    </div>
  </div>
);

export default ListCart;

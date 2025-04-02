import CartTabListsm from "./CartTabListsm";

// eslint-disable-next-line react/prop-types
const CartTabDoubleList = ({
    // eslint-disable-next-line react/prop-types
    titleStyle, // eslint-disable-next-line react/prop-types
    desStyle, // eslint-disable-next-line react/prop-types
    title1, // eslint-disable-next-line react/prop-types
    des1, // eslint-disable-next-line react/prop-types
    image1, // eslint-disable-next-line react/prop-types
    imageIcon1, // eslint-disable-next-line react/prop-types
    title2, // eslint-disable-next-line react/prop-types
    des2, // eslint-disable-next-line react/prop-types
    image2, // eslint-disable-next-line react/prop-types
    imageIcon2,
}) => {
    return (
        <div className="flex flex-col gap-4 bg-background w-full h-[680px] ">
            <CartTabListsm
                image={image1}
                title={title1}
                des={des1}
                imageIcon={imageIcon1}
            />
            <CartTabListsm
                image={image2}
                title={title2}
                des={des2}
                imageIcon={imageIcon2}
                desStyle={desStyle}
                titleStyle={titleStyle}
            />
        </div>
    );
};

export default CartTabDoubleList;

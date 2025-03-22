import BannerItem from "./layout/BannerItem";
import ButtonKPBasic from "../ui/ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ui/ButtonUI/ButtonMNBasic";
import { images } from "../../assets/image";
import CartItem from "./layout/CartItem";
import ContentCart from "./layout/ContentCart";
import CartComputer from "../ui/CartUI/CartComputer";
import ListCart from "../ui/CartUI/ListCart";
import ButtonKPInter from "../ui/ButtonUI/ButoonKPInter";
import CartItemWatch from "../ui/CartUI/CartItemWatch";
import Note from "./layout/Note";
import { useProducts } from "../../../api/WearablesAPI";

// eslint-disable-next-line react/prop-types
function Wearables({ headerHeight }) {
    const { products } = useProducts();

    return (
        <div
            className="bg-background pt-[3rem]"
            style={{
                minHeight: `calc(100vh - ${headerHeight}px)`,
                marginTop: `${headerHeight}px`,
            }}
        >
            {products[8] && (
                <BannerItem
                    title={products[8].title}
                    describe={products[8].des}
                    buttonkp={
                        <ButtonKPBasic
                            title="Khám phá"
                            productId={products[8].id} // Truyền `id` thay vì `name`
                            category="wearables"
                        />
                    }
                    buttonmn={<ButtonMNBasic />}
                    image={products[8].images.anh1} // Lấy ảnh đầu tiên
                />
            )}
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold">
                    Chọn Thiết Bị Đeo Phù Hợp
                </h1>
                <div className="grid grid-cols-5 gap-4">
                    <CartItem
                        id="watch-ultimate"
                        title="WATCH Ultimate Series"
                        des="Kiệt Tác Đỉnh Cao"
                        images={images.watchUltimate}
                    />
                    <CartItem
                        id="watch-series"
                        title="WATCH Series"
                        des="Công Nghệ Tiên Tiến"
                        images={images.watchSeriesNew}
                    />
                    <CartItem
                        id="watch-gt-series"
                        title="WATCH GT Series"
                        des="Cổ Điển Năng Động"
                        images={images.watchWt5ProNav}
                    />
                    <CartItem
                        id="watch-fit-series"
                        title="WATCH FIT Series"
                        des="Thời Trang Xu Hướng"
                        images={images.watchFit3Nav}
                    />
                    <CartItem
                        id="healthKids-watch"
                        title="Health & Kids Watch"
                        des="Sức Khỏe Và Gia Đình"
                        images={images.watchD2Nav}
                    />
                </div>
            </div>
            <div>
                {products[2] && (
                    <ContentCart
                        id="watch-ultimate"
                        title={products[2].title}
                        des={products[2].des}
                        name={products[2].name}
                        image={Object.values(products[2].images)}
                        category="wearable"
                        productId={products[2].id}
                    />
                )}
            </div>
            <div>
                {products[3] && (
                    <ContentCart
                        id="watch-series"
                        title={products[3].title}
                        des={products[3].des}
                        name={products[3].name}
                        image={Object.values(products[3].images)}
                        category="wearable"
                        productId={products[3].id}
                    />
                )}
                <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
                    {products[8] && (
                        <CartComputer
                            des={products[8].des}
                            image={products[8].images.anh1}
                            category="wearable"
                            productId={products[8].id}
                        />
                    )}
                </div>
            </div>
            <div>
                {products[5] && (
                    <ContentCart
                        id="watch-gt-series"
                        title={products[5].title}
                        des={products[5].des}
                        name={products[5].name}
                        image={Object.values(products[5].images)}
                        category="wearable"
                        productId={products[5].id}
                    />
                )}
                <div className="container mx-auto rounded-xl mt-4 pb-12">
                    <div className="grid grid-cols-12 gap-4 h-[340px]">
                        <div className="col-span-6 bg-white p-2 rounded-lg h-full">
                            {products[5] && (
                                <CartComputer
                                    des={products[5].des}
                                    image={products[5].images.anh1}
                                    category="wearable"
                                    productId={products[5].id}
                                />
                            )}
                        </div>
                        <div className="col-span-3 bg-white p-2 rounded-lg">
                            {products[9] && (
                                <ListCart
                                    images={products[9].images.anh1}
                                    name={products[9].name}
                                    des1={products[9].des}
                                    category="wearable"
                                    productId={products[9].id}
                                />
                            )}
                        </div>
                        <div className="col-span-3 bg-white p-2 rounded-lg">
                            {products[8] && (
                                <ListCart
                                    images={products[8].images.anh1}
                                    name={products[8].name}
                                    des1={products[8].des}
                                    category="wearable"
                                    productId={products[8].id}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {products[9] && (
                    <ContentCart
                        id="watch-fit-series"
                        title={products[6].title}
                        des={products[6].des}
                        name={products[6].name}
                        image={Object.values(products[6].images)}
                        category="wearable"
                        productId={products[6].id}
                    />
                )}
                <div className="container mx-auto pb-12 pt-4">
                    <div className="grid grid-cols-2 gap-4 h-[340px]">
                        <div className="bg-white p-4 rounded-lg">
                            {products[10] && (
                                <CartComputer
                                    des={products[10].des}
                                    image={products[10].images.anh1}
                                    category="wearable"
                                    productId={products[10].id}
                                />
                            )}
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            {products[11] && (
                                <CartComputer
                                    des={products[11].des}
                                    image={products[11].images.anh1}
                                    category="wearable"
                                    productId={products[11].id}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {products[13] && (
                    <ContentCart
                        id="healthKids-watch"
                        title={products[13].title}
                        des={products[13].des}
                        name={products[13].name}
                        image={Object.values(products[13].images)}
                        category="wearable"
                        productId={products[13].id}
                    />
                )}
                <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
                    {products[14] && (
                        <CartComputer
                            des={products[14].des}
                            image={products[14].images.anh1}
                            category="wearable"
                            productId={products[14].id}
                        />
                    )}
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
                    Tất Cả Thiết Bị Đeo Và Phụ Kiện
                </h1>
                <div className="grid grid-cols-4 gap-4 pb-6 h-[460px] pb-12">
                    <div className="bg-white p-4 rounded-lg">
                        {products[15] && (
                            <ListCart
                                images={products[15].images.anh1}
                                name={products[15].name}
                                category="wearable"
                                productId={products[15].id}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {products[16] && (
                            <ListCart
                                images={products[16].images.anh1}
                                name={products[16].name}
                                category="wearable"
                                productId={products[16].id}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {products[17] && (
                            <ListCart
                                images={products[17].images.anh1}
                                name={products[17].name}
                                category="wearable"
                                productId={products[17].id}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {products[18] && (
                            <ListCart
                                images={products[18].images.anh1}
                                name={products[18].name}
                                category="wearable"
                                productId={products[18].id}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full flex align-center justify-center">
                    <div className="flex align-center justify-center w-1/5 ">
                        <ButtonKPInter
                            title="Xem Tất Cả"
                            icon={true}
                            watch={true}
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-12">
                <div className="grid grid-cols-2 gap-6">
                    <CartItemWatch
                        title="Thế Giới Phụ Kiện"
                        des="Đa Dạng Lựa Chọn, Phù Hợp Mọi Phong Cách"
                        images={images.DayDH}
                        bgColor="white"
                    />
                    <CartItemWatch
                        title="Ghép Nối Điện Thoại TalDat"
                        des="Hiệu Suất Tối Ưu, Cuộc Sống Tiện Nghi"
                        images={images.dayDH2}
                        bgColor="white"
                    />
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
                    Tại Sao Lại Chọn Thiết Bị Đeo TalDat?
                </h1>
                <div className="grid grid-cols-2 gap-6">
                    <CartItemWatch
                        title="Thế Giới Phụ Kiện"
                        des="Đa Dạng Lựa Chọn, Phù Hợp Mọi Phong Cách"
                        images={images.coGaiDH}
                        bgColor="#cad3d6"
                    />
                    <CartItemWatch
                        title="Ghép Nối Điện Thoại TalDat"
                        des="Hiệu Suất Tối Ưu, Cuộc Sống Tiện Nghi"
                        images={images.dayDH2}
                        bgColor="white"
                    />
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
                    Ứng Dụng TalDat Health
                </h1>
            </div>
            <div>
                <Note page="Thiết Bị Đeo" />
            </div>
        </div>
    );
}

export default Wearables;

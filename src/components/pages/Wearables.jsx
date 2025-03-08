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

// eslint-disable-next-line react/prop-types
function Wearables({ headerHeight }) {
    return (
        <div
            className="bg-background"
            style={{
                minHeight: `calc(100vh - ${headerHeight}px)`,
                marginTop: `${headerHeight}px`,
            }}
        >
            <BannerItem
                title={"TalDat WATCH GT 5 Pro"}
                describe={"Fashion Edge"}
                buttonkp={<ButtonKPBasic title="Khám Phá" />}
                buttonmn={<ButtonMNBasic />}
                image={images.watchGt5Pro}
            />
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
                <ContentCart
                    id="watch-ultimate"
                    title="WATCH Ultimate Series"
                    des="Kiệt Tác Đỉnh Cao"
                    name="TalDat WATCH Ultimate"
                />
            </div>
            <div>
                <ContentCart
                    id="watch-series"
                    title="WATCH Series"
                    des="Công Nghệ Tiên Tiến"
                    name="TalDat WATCH 4"
                />
                <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
                    <CartComputer des="Tai nghe và đồng hồ - Hai trong Một Chống ồn cuộc gọi AI" />
                </div>
            </div>
            <div>
                <ContentCart
                    id="watch-gt-series"
                    title="WATCH GT Series"
                    des="Cổ Điển Năng Động"
                    name="TalDat WATCH GT 5 Pro"
                />
                <div className="container mx-auto rounded-xl mt-4 pb-12">
                    <div className="grid grid-cols-12 gap-4 h-[340px]">
                        <div className="col-span-6 bg-white p-2 rounded-lg h-full">
                            <CartComputer des="Tính Năng Chạy Bộ Và Đạp Xe Mới Thiết Kế Góc Cạnh" />
                        </div>
                        <div className="col-span-3 bg-white p-2 rounded-lg">
                            <ListCart
                                images={images.watchGt5Pro}
                                name="TalDat WATCH GT 4"
                                des1="Thiết Kế Thẩm Mỹ"
                                des2="Theo Dõi Sức Khỏe Chuyên Nghiệp"
                            />
                        </div>
                        <div className="col-span-3 bg-white p-2 rounded-lg">
                            <ListCart
                                images={images.watchGt5Pro}
                                name="TalDat WATCH GT 3 Pro Ceramic"
                                des1="Gốm Tinh Thể Nano"
                                des2="Phân Tích ECG"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ContentCart
                    id="watch-fit-series"
                    title="WATCH FIT Series"
                    des="Thời Trang Xu Hướng"
                    name="TalDat WATCH FIT 3"
                />
                <div className="container mx-auto pb-12 pt-4">
                    <div className="grid grid-cols-2 gap-4 h-[340px]">
                        <div className="bg-white p-4 rounded-lg">
                            <CartComputer des="Thiết Kế Thời Trang Và Chăm Sóc Sức Khỏe" />
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <CartComputer des="Thiết Kế Thời Trang Và Chăm Sóc Sức Khỏe" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ContentCart
                    id="healthKids-watch"
                    title="Health & Kids Watch"
                    des="Sức Khỏe Và Gia Đình"
                    name="TalDat WATCH D2"
                />
                <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
                    <CartComputer des="Tai nghe và đồng hồ - Hai trong Một Chống ồn cuộc gọi AI" />
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
                    Tất Cả Thiết Bị Đeo Và Phụ Kiện
                </h1>
                <div className="grid grid-cols-4 gap-4 pb-6 h-[460px] pb-12">
                    <div className="bg-white p-4 rounded-lg">
                        <ListCart
                            images={images.watchGt5Pro}
                            name="TalDat WATCH Ultimate"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <ListCart
                            images={images.watchGt5Pro}
                            name="TalDat WATCH GT 5 Pro"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <ListCart
                            images={images.watchGt5Pro}
                            name="TalDat WATCH FIT 3"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <ListCart
                            images={images.watchGt5Pro}
                            name="TalDat WATCH D2"
                        />
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
        </div>
    );
}

export default Wearables;

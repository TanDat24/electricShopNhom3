import { useState } from "react";
import BannerItem from "./layout/BannerItem";
import ButtonKPBasic from "../ui/ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ui/ButtonUI/ButtonMNBasic";
import ButtonUI from "../ui/ButtonUI/ButtonUI";
import ButtonTab from "../ui/ButtonUI/ButtonTab";
import { images } from "../../assets/image";
import TabWear from "./../ui/TabWear";
import TabComputer from "./../ui/TabComputer";
import Note from "./layout/Note";
// eslint-disable-next-line react/prop-types
const Home = ({ headerHeight }) => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div
            className="bg-background"
            style={{
                minHeight: `calc(100vh - ${headerHeight}px)`,
                marginTop: `${headerHeight}px`,
            }}
        >
            <div className="container mx-auto grid grid-cols-1 gap-2 pb-4">
                <BannerItem
                    title={"HUAWEI WATCH GT 5 Pro"}
                    describe={"Fashion Edge"}
                    buttonkp={<ButtonKPBasic title="Khám Phá" />}
                    buttonmn={<ButtonMNBasic />}
                    image={images.watchGt5Pro}
                />
                <BannerItem
                    title={"HUAWEI WATCH D2"}
                    describe={"Health Forward"}
                    buttonkp={<ButtonKPBasic title="Khám Phá" />}
                    buttonmn={<ButtonMNBasic />}
                    image={images.watchD2Pc}
                />
                <BannerItem
                    title={"HUAWEI MatePad Pro"}
                    describe={"Creation of Beauty"}
                    buttonkp={<ButtonKPBasic title="Khám Phá" />}
                    buttonmn={<ButtonMNBasic />}
                    image={images.huaweiMatepad}
                />
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-2 ">
                <div className="w-full">
                    <BannerItem
                        title={"HUAWEI WATCH GT 5 Pro"}
                        describe={"Fashion Edge"}
                        buttonkp={<ButtonUI title="Khám phá" type="khampham" />}
                        buttonmn={<ButtonUI title="Mua ngay" type="muangay" />}
                        image={images.watchGt5Pc}
                    />
                </div>
                <div className="w-full">
                    <BannerItem
                        title={"HUAWEI WATCH GT 5"}
                        describe={"Fashion Edge"}
                        buttonkp={<ButtonUI title="Khám phá" type="khampham" />}
                        buttonmn={<ButtonUI title="Mua ngay" type="muangay" />}
                        image={images.watchFit3Pc}
                    />
                </div>
                <div className="w-full">
                    <BannerItem
                        title={"HUAWEI MatePad 11.5"}
                        describe={"Handy All-Rounder"}
                        buttonkp={<ButtonUI title="Khám phá" type="khampham" />}
                        buttonmn={<ButtonUI title="Mua ngay" type="muangay" />}
                        image={images.huaweiMatepadGrey}
                    />
                </div>
                <div className="w-full">
                    <BannerItem
                        title={"HUAWEI FreeBuds Pro 4"}
                        describe={"Catch the Sound"}
                        buttonkp={<ButtonUI title="Khám phá" type="khampham" />}
                        buttonmn={<ButtonUI title="Mua ngay" type="muangay" />}
                        image={images.freebudsPropc}
                    />
                </div>
            </div>
            <div className="container mx-auto ">
                <div className="container mx-auto">
                    <h1 className="p-10 pb-2 text-[40px] font-medium flex items-center justify-center">
                        Xem Thêm Trong Cửa Hàng
                    </h1>
                    <div>
                        <div className="flex space-x-4 w-full justify-center">
                            <ButtonTab
                                title="Thiết Bị Đeo"
                                index={1}
                                activeTab={activeTab}
                                onClick={setActiveTab}
                            />
                            <ButtonTab
                                title="Máy Tính Bảng"
                                index={2}
                                activeTab={activeTab}
                                onClick={setActiveTab}
                            />
                            <ButtonTab
                                title="Tai Nghe Và Loa"
                                index={3}
                                activeTab={activeTab}
                                onClick={setActiveTab}
                            />
                        </div>
                        <div className="w-full py-8 overflow-hidden">
                            <div
                                className="flex transition-all duration-300 ease-in-out transform"
                                style={{
                                    transform: `translateX(${
                                        (activeTab - 1) * -100
                                    }%)`,
                                }}
                            >
                                <div className="min-w-full">
                                    <TabWear
                                        activeTab={activeTab}
                                        index={1}
                                        title="Thiết Bị Đeo"
                                        describe="Toàn Diện Tính Năng Chăm Sóc Sức Khỏe Và Tập Luyện Chuyên Nghiệp"
                                    />
                                </div>
                                <div className="min-w-full">
                                    <TabComputer
                                        activeTab={activeTab}
                                        index={2}
                                    />
                                </div>
                                <div className="min-w-full">
                                    <TabWear
                                        activeTab={activeTab}
                                        index={3}
                                        title="Tai Nghe Và Loa"
                                        describe="Âm Thanh Ấn Tượng Và Điều Khiển Trực Quan"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Note /></div>
        </div>
    );
};

export default Home;

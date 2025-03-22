import BannerItem from "../../pages/layout/BannerItem";
import ButtonKPBasic from "../ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ButtonUI/ButtonMNBasic";
import ContentCart from "../../pages/layout/ContentCart";
import CartComputer from "../CartUI/CartComputer";
import CartItemWatch from "../CartUI/CartItemWatch";
import { images } from "../../../assets/image";
import { useProducts } from "../../../../api/WearablesAPI";

const TabMonitor = () => {
    const { laptops } = useProducts();
    return (
        <div>
            <div>
                {laptops[4] && (
                    <BannerItem
                        title={laptops[4].title}
                        buttonkp={
                            <ButtonKPBasic
                                title="Khám Phá"
                                category="laptops"
                                productId={laptops[4].id}
                            />
                        }
                        buttonmn={<ButtonMNBasic />}
                        image={laptops[4].images.anh1} // Lấy ảnh đầu tiên
                    />
                )}
            </div>
            <div>
                {laptops[5] && (
                    <ContentCart
                        title={laptops[5].title}
                        name={laptops[5].name}
                        image={Object.values(laptops[5].images)}
                        category="laptops"
                        productId={laptops[5].id}
                    />
                )}
                {laptops[6] && (
                    <ContentCart
                        title={laptops[6].title}
                        name={laptops[6].name}
                        image={Object.values(laptops[6].images)}
                        category="laptops"
                        productId={laptops[6].id}
                    />
                )}
            </div>
            <div className="container mx-auto pb-12 pt-4">
                <div className="grid grid-cols-2 gap-4 h-[340px]">
                    <div className="bg-white p-4 rounded-lg">
                        {laptops[7] && (
                            <CartComputer
                                des={laptops[7].des}
                                image={laptops[7].images.anh1}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {laptops[8] && (
                            <CartComputer
                                des={laptops[8].des}
                                image={laptops[8].images.anh1}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 container mx-auto">
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
    );
};
export default TabMonitor;

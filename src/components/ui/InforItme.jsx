import ButtonKPBasic from "./ButtonUI/ButtonKPBasic";
import ButtonUI from "./ButtonUI/ButtonUI";
// eslint-disable-next-line react/prop-types
const InforItme = ({ image }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-full w-full">
                <div className="text-center">
                    <img src={image} className="w-1/2 mx-auto" />

                    <h1 className="text-2xl font-medium mt-4">
                        HUAWEI MatePad 11.5S
                    </h1>

                    <div className="mt-4">
                        <ButtonKPBasic title="Khám Phá" />
                    </div>
                    <div className="flex justify-center mt-4">
                        <ButtonUI title="Mua ngay" type="muangay" />
                    </div>

                    <div className="w-[240px] mt-6 mx-auto space-y-4">
                        <div className="pt-4 pb-4">
                            <div className="font-bold">12.2 inches</div>
                            <div>
                                Khoảng 508 g (bao gồm pin) Màn hình Tandem OLED
                                PaperMatte 2800 × 1840, 274 ppi
                            </div>
                        </div>

                        <div className="w-[240px] mt-6 mx-auto space-y-4">
                            <svg
                                className="w-10 h-10 w-[240px] mt-6 mx-auto space-y-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z" />
                                <path d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z" />
                            </svg>
                            <div>1.07 tỷ màu gam màu rộng P3</div>
                        </div>

                        <div className="w-[240px] mt-6 mx-auto space-y-4">
                            <svg
                                className="w-10 h-10 w-[240px] mt-6 mx-auto space-y-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                                />
                            </svg>
                            <div>Tốc độ làm mới</div>
                        </div>

                        <div className="w-[240px] mt-6 mx-auto space-y-4">
                            <svg
                                className="w-10 h-10 w-[240px] mt-6 mx-auto space-y-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13.484 9.166 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0-3 3m3-3-3-3"
                                />
                            </svg>
                            <div>HarmonyOS 4.2</div>
                        </div>
                        <div className="w-[240px] mt-6 mx-auto space-y-4">
                            <svg
                                className="w-10 h-10 w-[240px] mt-6 mx-auto space-y-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
                                />
                            </svg>
                            <div>
                                Camera cảm biến thông minh (Khẩu độ f/2.0, FF)
                            </div>
                        </div>
                        <div className="w-[240px] mt-6 mx-auto space-y-4">
                            <svg
                                className="w-10 h-10 w-[240px] mt-6 mx-auto space-y-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 15.5V5s3 1 3 4m-7-3H4m9 4H4m4 4H4m13 2.4c0 1.326-1.343 2.4-3 2.4s-3-1.075-3-2.4 1.343-2.4 3-2.4 3 1.075 3 2.4Z"
                                />
                            </svg>

                            <div>4 loa</div>
                        </div>
                        <div className="w-[240px] mt-6 mx-auto space-y-4">
                            <svg
                                className="w-10 h-10 w-[240px] mt-6 mx-auto space-y-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                                />
                            </svg>

                            <div>Hỗ trợ HUAWEI M-Pencil (Thế hệ thứ 3)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InforItme;

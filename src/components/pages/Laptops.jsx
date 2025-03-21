import { useState } from "react";
import Note from "./layout/Note";
import ParentLaptops from "./parentPages/ParentTabLaptop";
import ParentMonitor from "./parentPages/ParentTabMonitor";

const Laptops = () => {
    const [activeTab, setActiveTab] = useState("laptop");

    return (
        <>
            <div className="flex justify-center pt-[3rem] bg-header ">
                <button
                    className={`py-2 px-4 text-xl focus:outline-none ${
                        activeTab === "laptop"
                            ? "text-colorText border-b-2 border-colorText"
                            : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("laptop")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop size-12 w-full flex justify-center"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 19l18 0" />
                        <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                    </svg>
                    Máy tính xách tay
                </button>
                <button
                    className={`py-2 px-4 text-xl focus:outline-none ${
                        activeTab === "monitor"
                            ? "text-colorText border-b-2 border-colorText "
                            : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("monitor")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop w-full flex justity-center size-12 "
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                        <path d="M7 20h10" />
                        <path d="M9 16v4" />
                        <path d="M15 16v4" />
                    </svg>
                    Màn hình
                </button>
            </div>
            <div className="bg-background pb-12">
                <div className="">
                    <div className="w-full">
                        <div className="rounded-lg">
                            {activeTab === "laptop" && <ParentLaptops />}
                            {activeTab === "monitor" && <ParentMonitor />}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Note page="Máy Tính Xách Tay" />
            </div>
        </>
    );
};

export default Laptops;

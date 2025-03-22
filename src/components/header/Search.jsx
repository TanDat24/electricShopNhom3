// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import OutstandProd from "../ui/outstandProd";
import QuickView from "../ui/QuickView";
import { images } from "../../assets/image";
// eslint-disable-next-line react/prop-types
const Search = ({ headerHeight }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (showSearchInput) {
      setTimeout(() => {
        setOpacity(1);
      }, 10);
    } else {
      setOpacity(0);
    }
  }, [showSearchInput]);

  const handleSearchClick = () => {
    setShowSearchInput(true);
  };

  const handleCloseClick = () => {
    setOpacity(0);
    setTimeout(() => {
      setShowSearchInput(false);
    }, 300);
  };

  const handleIconClick = () => {
    if (!showSearchInput) {
      handleSearchClick();
    } else {
      handleCloseClick();
    }
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const data = [
    {
      name: "MacBook Pro M3 Max",
      purchases: 1250,
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      purchases: 2100,
    },
    {
      name: "Apple iPhone 15 Pro Max",
      purchases: 3500,
    },
    {
      name: "Sony WH-1000XM5",
      purchases: 850,
    },
    {
      name: "iPad Pro M2 12.9",
      purchases: 1800,
    },
    {
      name: "ASUS ROG Zephyrus G14",
      purchases: 750,
    },
    {
      name: "Dell XPS 15 OLED",
      purchases: 920,
    },
    {
      name: "Nintendo Switch OLED",
      purchases: 2800,
    },
    {
      name: "Sony PlayStation 5",
      purchases: 4200,
    },
    {
      name: "Apple Watch Series 9",
      purchases: 1600,
    },
  ];

  // Update handleSearchChange to use the new data structure
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const getPopularProducts = () => {
    const sortedData = data.sort((a, b) => b.purchases - a.purchases);
    return sortedData.slice(0, 5);
  };

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="text-colorText">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="mr-4 ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 mr-2 ml-2"
        onClick={handleIconClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      {showSearchInput && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-white z-20"
          style={{
            marginTop: headerHeight,
            opacity: opacity,
            transition: "opacity 300ms ease-in-out",
          }}
        >
          <div className="max-h-[90%] w-[44%]">
            <div>
              <input
                type="text"
                className="w-full p-[18px] pl-[38px] rounded-[52px] border border-solid border-borderColor border-x-2 focus:outline-[#626262] text-[23px]"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            {isInputFocused ? (
              <div className=" w-full h-[600px] p-8">
                {!searchTerm ? (
                  <div>
                    <h4 className="text-[17px]">Kết quả phổ biến</h4>
                    <div>
                      <ul>
                        {getPopularProducts().map((item, index) => (
                          <li
                            key={index}
                            className="text-[30px] text-textGray font-light hover:text-darkBlue cursor-pointer py-2 flex justify-between items-center"
                          >
                            <span>{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-[17px]">Kết quả đề xuất</h4>
                    <div>
                      <ul>
                        {searchTerm &&
                          filteredData.map((item, index) => (
                            <li
                              key={index}
                              className="text-[30px] text-textGray font-light hover:text-darkBlue cursor-pointer py-2"
                            >
                              {highlightText(item.name, searchTerm)}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="pt-[80px] h-[600px]">
                <div className="text-[#878787] text-[14px]">
                  Sản phẩm nổi bật
                </div>
                <div className="pt-4 grid grid-cols-3 grid-rows-21 gap-4">
                  <OutstandProd
                    image={images.tapletImg}
                    title="HUAWEI MatePad 11.5"
                  />
                  <OutstandProd
                    image={images.dongHoDenImg}
                    title="HUAWEI WATCH GT 5 Pro"
                  />
                  <OutstandProd
                    image={images.dongHoXanhImg}
                    title="HUAWEI WATCH Ultimate"
                  />
                </div>
                <div className="text-[#878787] text-[14px] pt-[80px] pb-[10px]">
                  Xem Nhanh
                </div>
                <div className="pt-4 grid grid-cols-3 grid-rows-1 gap-4">
                  <QuickView titles={["AppGallery", "Phụ Kiện"]} />
                  <QuickView titles={["Chọn Ngôn Ngữ", "Tìm Dịch Vụ"]} />
                  <QuickView titles={["Linh Kiện"]} />
                </div>
              </div>
            )}
          </div>
          <div className="absolute top-[36px] right-[106px] p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 text-colorText transition-transform duration-300 ease-in-out transform hover:scale-125 hover:text-textGray"
              onClick={handleCloseClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

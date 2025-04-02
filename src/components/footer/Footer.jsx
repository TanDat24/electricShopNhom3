import FooterLinkBlock from "./FooterLinkBlock";
const Footer = () => {
  const footerData = [
    {
      title: "Về Chúng Tôi",
      links: ["Giới Thiệu", "Tuyển Dụng", "Tin Tức", "Liên Hệ"],
    },
    {
      title: "Hỗ Trợ Khách Hàng",
      links: [
        "Hướng Dẫn Mua Hàng",
        "Thanh Toán",
        "Vận Chuyển",
        "Bảo Hành",
        "Hướng Dẫn Mua Hàng",
        "Thanh Toán",
        "Vận Chuyển",
        "Bảo Hành",
      ],
    },
    {
      title: "Chính Sách",
      links: ["Đổi Trả", "Bảo Mật", "Điều Khoản", "FAQs"],
    },
  ];
  return (
    <footer className="container mx-auto border-t border-borderColor mt-4">
      <div className="border-b border-borderColor pb-12 pt-8">
        <div className="grid grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <FooterLinkBlock
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>

      <div className="border-b border-borderColor pb-2 pt-4">
        <h3 className="font-semibold text-base pt-12 pb-4">Theo Dõi</h3>
        <div className="grid grid-cols-4 gap-2 w-[18%] items-center">
          <div className="space-y-4">
            <h3 className="font-semibold text-base pt-2 pb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="100"
                height="100"
                viewBox="0 0 256 256"
                className="size-8 fill-[#818181] hover:fill-[#4267B2] transition-colors duration-300"
              >
                <g>
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z" />
                  </g>
                </g>
              </svg>
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-base pt-2 pb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 256 256"
                className="size-10 fill-[#818181] hover:fill-[#FF0000] transition-colors duration-300"
              >
                <g transform="scale(3.55556,3.55556)">
                  <path d="M61.115,18.856c2.551,2.647 2.885,6.853 2.885,17.144c0,10.291 -0.334,14.497 -2.885,17.144c-2.552,2.647 -5.209,2.856 -25.115,2.856c-19.906,0 -22.563,-0.209 -25.115,-2.856c-2.551,-2.647 -2.885,-6.853 -2.885,-17.144c0,-10.291 0.334,-14.497 2.885,-17.144c2.551,-2.647 5.209,-2.856 25.115,-2.856c19.906,0 22.563,0.209 25.115,2.856zM31.464,44.476l13.603,-8.044l-13.603,-7.918z" />
                </g>
              </svg>
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-base pt-2 pb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 256 256"
                className="size-8 fill-[#818181] hover:fill-[#E4405F] transition-colors duration-300"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z" />
                </g>
              </svg>
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-base pt-2 pb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 256 256"
                className="size-8 fill-[#818181] hover:fill-[#000000] transition-colors duration-300"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M41,4h-32c-2.757,0 -5,2.243 -5,5v32c0,2.757 2.243,5 5,5h32c2.757,0 5,-2.243 5,-5v-32c0,-2.757 -2.243,-5 -5,-5zM37.006,22.323c-0.227,0.021 -0.457,0.035 -0.69,0.035c-2.623,0 -4.928,-1.349 -6.269,-3.388c0,5.349 0,11.435 0,11.537c0,4.709 -3.818,8.527 -8.527,8.527c-4.709,0 -8.527,-3.818 -8.527,-8.527c0,-4.709 3.818,-8.527 8.527,-8.527c0.178,0 0.352,0.016 0.527,0.027v4.202c-0.175,-0.021 -0.347,-0.053 -0.527,-0.053c-2.404,0 -4.352,1.948 -4.352,4.352c0,2.404 1.948,4.352 4.352,4.352c2.404,0 4.527,-1.894 4.527,-4.298c0,-0.095 0.042,-19.594 0.042,-19.594h4.016c0.378,3.591 3.277,6.425 6.901,6.685z" />
                </g>
              </svg>
            </h3>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-10 gap-2 w-full pt-12">
          <div className="col-span-3 text-sm font-medium text-textGray leading-6 ">
            Copyright © 2024-2025 TalDat Device Co., Ltd. All rights reserved.
          </div>
          <div className="cursor-pointer col-span-5 ml-12 grid grid-cols-4 gap-1 text-sm font-medium text-textGray leading-6">
            <div>Bản Đồ Điểm Truy Cập</div>
            <div>Điều Khoản Sử Dụng</div>
            <div>Thông Báo Quyền Riêng Tư</div>
            <div>Cookie</div>
          </div>
          <div className="flex col-span-2 text-sm font-medium text-textGray leading-6">
            <div className="pr-4">Vietnam - Tiếng Việt</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

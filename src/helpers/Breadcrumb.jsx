import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  // Ánh xạ URL -> Tên hiển thị
  const breadcrumbMap = {
    wearables: "Thiết Bị Đeo",
    phone: "Điện Thoại",
    tablets: "Máy Tính Bảng",
    laptops: "Laptop",
    audio: "Phụ Kiện",
    category: "Danh Mục",
    vn: "Trang chủ",
    profile: "Hồ Sơ",
    "product-detail": "Chi Tiết Sản Phẩm",
    checkout: "Thanh Toán",
    login: "Đăng Nhập",
    signup: "Đăng Ký",
  };

  return (
    <nav className="text-gray-600 text-sm ml-48 mt-8 ">
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;
        const displayName = breadcrumbMap[path] || path; // Lấy tên hiển thị

        return (
          <span key={url}>
            {(index = !isLast ? " " : " / ")}
            {isLast ? (
              <span className="text-gray-600 font-normal text-lg">
                {displayName}
              </span>
            ) : (
              <Link
                to={url}
                className="text-gray-600 font-normal text-lg hover:underline"
              >
                {displayName}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

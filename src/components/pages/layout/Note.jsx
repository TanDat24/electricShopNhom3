import { Link } from "react-router-dom";

const Note = ({ page }) => {
  return (
    <div>
      <div className="container mx-auto pt-12 text-textGray pb-6">
        <p>
          *Một số tính năng sẽ không khả dụng ở vài khu vực. Hình ản h, video và
          nội dung sản phẩm trong các trang chỉ mang tính tham khảo. Các tính
          năng và thông số thực tế (bao gồm nhưng không giới hạn về hình dạng,
          màu sắc và kích thước) cũng như nội dung (bao gồm nhưng không giới hạn
          về hình nền, giao diện, icon và video) sẽ có thể có sự khác biệt.{" "}
        </p>
        <br />

        <p>
          **Tất cả dữ liệu trong các trang nêu trên là giá trị lý thuyết do các
          phòng nghiên cứu nội bộ của HUAWEI thu thập qua các thử nghiệm được
          thực hiện trong điều kiện cụ thể. Để biết thêm thông tin, hãy tham
          khảo chi tiết sản phẩm nêu trên. Dữ liệu thực tế có thể thay đổi do
          khác biệt về từng sản phẩm, phiên bản phần mềm, tình trạng ứng dụng và
          yếu tố môi trường. Mọi dữ liệu đều dựa trên sử dụng thực tế.
        </p>
        <br />

        <p>
          ***Do các thay đổi trong thời gian thực liên quan đến các lô sản phẩm,
          yếu tố sản xuất và cung ứng nên để cung cấp thông tin, thông số kỹ
          thuật và tính năng sản phẩm chính xác, HUAWEI có thể điều chỉnh mô tả
          văn bản và hình ảnh trong các trang thông tin nêu trên theo thời gian
          thực sao cho tương ứng với hiệu suất sản phẩm, thông số kỹ thuật, chỉ
          số và cấu phần của sản phẩm thực tế. Thông tin sản phẩm có thể được
          thay đổi và điều chỉnh như trên mà không thông báo.
        </p>
        <br />

        <p>
          ****Kích thước, cân nặng và thông số kỹ thuật của sản phẩm chi mang
          tính tương đối. Thông số kích thước của từng sản phẩm có thể khác
          nhau. Tất cả thông số kỹ thuật đều được dựa trên sản phẩm thực tế.
          Kích thước, trọng lượng và thông số kỹ thuật chỉ có tính chất tham
          khảo. Các thông số kỹ thuật và sản phẩm thực tế có thể khác biệt.
        </p>
        <br />

        <p>
          *****Dung lượng pin của sản phẩm là giá trị điển hình. Dung lượng pin
          thực tế cho từng sản phẩm riêng biệt có thể cao hoặc thấp hơn đôi chút
          so với dung lượng pin danh nghĩa.
        </p>
      </div>
    </div>
  );
};
export default Note;

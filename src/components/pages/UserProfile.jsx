import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
    const navigate = useNavigate();

    if (!user) {
        navigate("/vn/login");
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Thông Tin Cá Nhân</h2>
                <div className="mb-4">
                    <strong>Họ và Tên:</strong> {user.name}
                </div>
                <div className="mb-4">
                    <strong>Email:</strong> {user.email}
                </div>
                <div className="mb-4">
                    <strong>Số điện thoại:</strong> {user.phone}
                </div>
                <div className="mb-4">
                    <strong>Địa chỉ:</strong> {user.address}
                </div>
                <div className="mb-4">
                    <strong>Vai trò:</strong> {user.role}
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Quay lại
                </button>
            </div>
        </div>
    );
};

export default UserProfile;

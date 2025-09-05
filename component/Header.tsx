// @ts-ignore
import React, { Component } from 'react';
import { AiOutlineBook } from "react-icons/ai";

class Header extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#212529", color: "white", padding: "20px", textAlign: "center" }}>
                <h1><AiOutlineBook /> Quản lý sách</h1>
                <p>Quản lý, chỉnh sửa và cập nhật danh sách sách trong hệ thống.</p>
            </div>
        );
    }
}

export default Header;
import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css"
const NotFound = () => {
        return (
            <div className="container_status">
                <h2>Không tìm thấy trang</h2>
                <h1>404</h1>
                <p>Rất tiếc, bạn không thể truy cập</p>
                <Link to="/admin">Quay lại Trang Chủ</Link>
            </div>
        )
}

export default NotFound

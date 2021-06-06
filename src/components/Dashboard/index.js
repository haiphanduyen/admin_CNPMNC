import {
    BarChartOutlined,
    FormOutlined,
    HddOutlined,
    LaptopOutlined,
    UserOutlined
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
import { Link } from "react-router-dom"
const { Sider } = Layout

const Dashboard = props => {
    const { toggle } = props
    const MENU = [
        {
            id: 0,
            icon: <LaptopOutlined />,
            name: "Product",
            link: "/admin/products"
        },
        {
            id: 1,
            icon: <HddOutlined />,
            name: "Category",
            link: "/admin/categories"
        },
        {
            id: 2,
            icon: <FormOutlined />,
            name: "Thêm mới",
            link: "/admin/add"
        },
        {
            id: 3,
            icon: <BarChartOutlined />,
            name: "Statistic",
            link: "/admin/statistic"
        },
        {
            id: 4,
            icon: <UserOutlined />,
            name: "User",
            link: "/admin/user"
        }
    ]
    return (
        <Sider collapsed={toggle}>
            <div
                className="logo"
                style={{
                    backgroundColor: "#33c9dc",
                    width: "100%",
                    height: "64px",
                    color: "white",
                    textAlign: "center",
                    fontSize: "20px"
                }}
            >
                <Link to="/etech" style={{ color: "white" }}>
                    ETech
                </Link>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                // defaultSelectedKeys={["0"]}
                // selectedKeys={[selectedKey]}
                style={{ height: "690px" }}
            >
                {MENU.map((item, index) => {
                    return (
                        <Menu.Item key={index} icon={item.icon}>
                            <Link to={item.link}>{item.name}</Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Sider>
    )
}

export default Dashboard

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout } from "antd"
import AddEdit from "pages/AddEdit"
import Dossier from "pages/Dossier"
import Home from "pages/Home"
import React, { useState } from "react"
import { useHistory, useParams, useRouteMatch } from "react-router"
import Dashboard from "../../components/Dashboard"
import "./FrameAdmin.css"

const { Header, Content } = Layout

const FrameAdmin = () => {
    const { productId, productType } = useParams()
    const match = useRouteMatch()
    console.log("🚀 ~ file: index.js ~ line 16 ~ FrameAdmin ~ match", match)
    console.log(
        "🚀 ~ file: index.js ~ line 14 ~  productId, productType ",
        productId,
        productType
    )
    const isAddMode = !productId
    console.log(
        "🚀 ~ file: index.js ~ line 20 ~ FrameAdmin ~ isAddMode",
        isAddMode
    )
    const [toggle, setToggle] = useState(false)

    const renderContentComponent = () => {
        if (match.url === "/admin/add") {
            return <AddEdit />
        }
        if (!productId && !productType) {
            return <Home />
        } else {
            return <Dossier />
        }
    }

    return (
        <Layout>
            <Dashboard toggle={toggle} />
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        toggle ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setToggle(!toggle)
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 10
                    }}
                >
                    {renderContentComponent()}
                </Content>
            </Layout>
        </Layout>
    )
}

export default FrameAdmin

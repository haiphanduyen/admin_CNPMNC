import {
    DeleteOutlined,
    FileSearchOutlined,
    FormOutlined,
    ReloadOutlined
} from "@ant-design/icons"
import {
    Button,
    Form,
    Layout,
    notification,
    Space,
    Table,
    Tag,
    Tooltip
} from "antd"
import Search from "antd/lib/input/Search"
import Product from "Apis/Product.Api"
import Category from "Apis/Category.Api"
import { useEffect, useState } from "react"
import { Link, useParams, useRouteMatch } from "react-router-dom"

const { Content } = Layout

const Dossier = () => {
    const { productType } = useParams()
    const match = useRouteMatch()
    const [dataProduct, setDataProduct] = useState([])
    console.log(
        "🚀 ~ file: index.js ~ line 30 ~ Dossier ~ dataProduct",
        dataProduct
    )
    const [dataCategory, setDataCategory] = useState([])
    console.log(
        "🚀 ~ file: index.js ~ line 32 ~ Dossier ~ dataCategory",
        dataCategory
    )

    // const dataCategories = [
    //     {
    //         _id: "60a0bca683d4831570267ba3",
    //         name: "Bàn Ăn",
    //         FK_Room: {
    //             _id: "6095465553a0fb4b2c0e6a0e",
    //             name: "Dining room",
    //             createdAt: "2021-05-07T13:53:25.039Z"
    //         },
    //         createdAt: "2021-05-16T06:33:10.907Z"
    //     },
    //     {
    //         _id: "60a0bd8183d4831570267ba4",
    //         name: "Ghế Ăn",
    //         FK_Room: {
    //             _id: "6095465553a0fb4b2c0e6a0e",
    //             name: "Dining room",
    //             createdAt: "2021-05-07T13:53:25.039Z"
    //         },
    //         createdAt: "2021-05-16T06:36:49.810Z"
    //     }
    // ]

    useEffect(() => {
        switch (productType) {
            case "products":
                Product.getAll().then(res => setDataProduct(res.products))
                break
            case "categories":
                Category.getAll().then(res => setDataCategory(res))
                break
            default:
                break
        }
    }, [productType])

    const columnsCategory = [
        {
            id: 1,
            title: "Name",
            dataIndex: "name"
        },
        {
            id: 2,
            title: "CreatedAt",
            dataIndex: "createdAt",
            render: createdAt => new Date(createdAt).toLocaleString()
            //    filters: filters.Brand,
            //onFilter: (value, record) => record.brand.includes(value),
        },
        {
            id: 3,
            title: "Room Name",
            dataIndex: "FK_Room",
            render: FK_Room => FK_Room.name
            //    filters: filters.Brand,
            //onFilter: (value, record) => record.brand.includes(value),
        },
        {
            id: 4,
            title: "Room CreateAt",
            dataIndex: "FK_Room",
            render: FK_Room => new Date(FK_Room.createdAt).toLocaleString()
            //    filters: filters.Brand,
            //onFilter: (value, record) => record.brand.includes(value),
        },
        {
            id: 5,
            title: "Chức năng",
            dataIndex: "action",
            width: 120,
            render: (value, record) => (
                <Space size={"small"}>
                    <Link
                        to={`${match.url.slice(0, -1)}/${record.id}`}
                        key={record.id}
                    >
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            // onClick={any => handleDelete}
                        />
                    </Link>
                </Space>
            )
        }
    ]

    const columnsProduct = [
        {
            id: 1,
            title: "Name",
            dataIndex: "Name",
            width: 150,
            fixed: "left"
        },
        {
            id: 2,
            title: "Code",
            dataIndex: "Code",
            width: 100,
            fixed: "left"
            //    filters: filters.Brand,
            //onFilter: (value, record) => record.brand.includes(value),
        },
        {
            id: 5,
            title: "Image",
            dataIndex: "Image",
            render: image => <img alt="IMG" src={image[0]} width="100%"></img>
        },
        {
            id: 3,
            title: "Material",
            dataIndex: "Material",
            width: 200
            //  filters: filters.Cpu,
            //onFilter: (value, record) => record.cpu.includes(value),
        },
        {
            id: 4,
            title: "Price",
            dataIndex: "Price",
            width: 100
            //filters: filters.Ram,
            //onFilter: (id, record) => record.ram.includes(id),
        },
        {
            id: 5,
            title: "Size",
            dataIndex: "Size"
            //filters: filters.Rom,
        },
        {
            id: 6,
            title: "Total",
            dataIndex: "Total",
            width: 70
        },
        {
            id: 9,
            title: "Heart",
            dataIndex: "Heart",
            width: 70
        },
        {
            id: 10,
            title: "Guarantee",
            dataIndex: "Guarantee"
        },
        {
            id: 12,
            title: "isStatus",
            dataIndex: "isStatus",
            width: 90,
            render: isStatus => (
                <Tag
                    color={isStatus === "ACTIVE" ? "green" : "blue"}
                    key={isStatus}
                >
                    {isStatus}
                </Tag>
            )
        },

        {
            id: 13,
            title: "tags",
            dataIndex: "tags",
            width: 150,
            // fixed: "right",
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? "geekblue" : "red"
                        if (tag.length >= 10) {
                            color = "volcano"
                        }
                        if (tag.length >= 20) {
                            color = "green"
                        }
                        return (
                            <Tooltip
                                title={tag.toUpperCase()}
                                color={color}
                                key={tag}
                            >
                                <Tag color={color} key={tag}>
                                    {tag.length > 15
                                        ? tag.slice(0, 15).toUpperCase() + "..."
                                        : tag.toUpperCase()}
                                </Tag>
                            </Tooltip>
                        )
                    })}
                </>
            )
        },
        {
            id: 11,
            title: "Quantity",
            dataIndex: "Quantity",
            width: 90
        },
        // {
        //     id: 14,
        //     title: "Description",
        //     dataIndex: "Description",
        //     with: "100%"
        // }
        {
            id: 7,
            title: "Chức năng",
            dataIndex: "action",
            fixed: "right",
            render: (value, record) => (
                <Space size={"small"}>
                    <Link
                        to={`${match.url.slice(0, -1)}/${record.id}`}
                        key={record.id}
                    >
                        <Button type="primary" icon={<FormOutlined />}></Button>
                    </Link>
                    <Link to={`/${record.id}`} key={record.id}>
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            // onClick={any => handleDelete}
                        />
                    </Link>
                </Space>
            )
        }
    ]

    useEffect(() => {}, [productType])
    const [form] = Form.useForm()
    const onChange = (pagination, filters, sorter, extra) => {
        //console.log("params", pagination, filters, sorter, extra)
    }

    const openNotification = (title, message) => {
        notification.open({
            message: title,
            description: message,
            title
        })
    }

    return (
        <Layout className="site-layout">
            {/* <BreadcrumbField list={["ADMIN", "LAPTOP"]} /> */}
            <Content
                style={{
                    overflow: "initial"
                }}
            >
                <Button
                    type="primary"
                    style={{ marginBottom: 5, width: 80 }}
                    icon={<ReloadOutlined />}
                    onClick={() => openNotification()}
                />
                <Search
                    placeholder="Tìm kiếm tên sản phẩm"
                    style={{ width: 200, marginLeft: 5 }}
                    // onChange={e => {
                    //     const currValue = e.target.value
                    //     setValue(currValue)
                    //     const filteredData = data.filter(item =>
                    //         item.name
                    //             .toLowerCase()
                    //             .includes(currValue.toLowerCase())
                    //     )
                    //     setDataFilter(filteredData)
                    // }}
                />

                <Form form={form} component={false}>
                    <Table
                        bordered
                        dataSource={
                            productType === "products"
                                ? dataProduct
                                : dataCategory
                        }
                        columns={
                            productType === "products"
                                ? columnsProduct
                                : columnsCategory
                        }
                        onChange={onChange}
                        pagination={{
                            defaultPageSize: 10,
                            showSizeChanger: true,
                            pageSizeOptions: ["10", "20", "30"]
                        }}
                        scroll={
                            productType === "products"
                                ? { x: 1500, y: 500 }
                                : { y: 500 }
                        }
                        // footer={() => "Footer"}
                    />
                </Form>
            </Content>
        </Layout>
    )
}
export default Dossier

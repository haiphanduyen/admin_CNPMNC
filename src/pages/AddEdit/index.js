import { CloseOutlined, LinkOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Col, Row, Space, Form } from "antd"
import Product from "Apis/Product.Api"
import BreadcrumbField from "components/Common/Breadcrumb"
import InputField from "components/Common/InputField"
import SelectField from "components/Common/SelectField"
import { TYPE_CUSTOM_FIELD } from "Constants/index"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./AddEdit.css"
import Room from "Apis/Room.Api"
import Category from "Apis/Category.Api"
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 }
}
const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!"
    },
    number: {
        range: "${label} must be between ${min} and ${max}"
    }
}
const imageDefault = [
    { id: 1, img: "" },
    { id: 2, img: "" },
    { id: 3, img: "" }
]
const AddEdit = () => {
    const { productId, productType } = useParams()
    const isAddMode = !productId
    const [state, setstate] = useState([])
    const [images, setImages] = useState(imageDefault)
    const [roms, setRoms] = useState([])
    console.log("🚀 ~ file: index.js ~ line 38 ~ AddEdit ~ roms", roms)
    const [categories, setCategories] = useState([])
    console.log(
        "🚀 ~ file: index.js ~ line 40 ~ AddEdit ~ categories",
        categories
    )
    const onFinish = values => {
        console.log(values)
        const productBody = {
            Name: values.Name,
            Code: values.Code,
            Size: values.Size,
            Material: values.Material,
            Quantity: values.Quantity,
            Guarantee: values.Guarantee,
            Price: Number(values.Price),
            Description: values.Description,
            Image: [values.linkImg1, values.linkImg2, values.linkImg3],
            Total: values.Total,
            FK_Room: values.FK_Room,
            FK_Category: values.FK_Category,
            tags: [
                "ban an mo rong freya van da",
                "71304044",
                "mat ban mat gom van da"
            ]
        }
        console.log(
            "🚀 ~ file: index.js ~ line 60 ~ AddEdit ~ productBody",
            productBody
        )
        Product.create(productBody).then(res => console.log(res))
    }
    useEffect(() => {
        Room.getForSelect().then(res => setRoms(res))
        Category.getForSelect().then(res => setCategories(res))
        // Product.getById("60a4e9af3e3689468ef32c39").then(res =>
        //     console.log(res)
        // )
    }, [])
    // useEffect(() => {
    //     switch (productType) {
    //         case "products":
    //             Product.ge.then(res => setDataProduct(res.products))
    //             break
    //         case "categories":
    //             // Category.getAll().then(res => setDataCategory(res))
    //             break
    //         default:
    //             break
    //     }
    // }, [productType])
    return (
        <div>
            <BreadcrumbField list={["ADMIN", "POST"]} />
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                {!isAddMode ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm"}
            </h3>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                // onFieldsChange={(_, allFields) => {
                //     handleInputChange(allFields)
                // }}
            >
                <Row>
                    <Col span={12}>
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"Name"}
                            label={"Name"}
                            // initialValue={info.price || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"Code"}
                            label={"Code"}
                            // initialValue={info.price || ""}
                            rules={[
                                {
                                    min: 8,
                                    max: 8,
                                    pattern: new RegExp(/^\d{8}$/)
                                }
                            ]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"Size"}
                            label={"Size"}
                            // initialValue={info.price || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"Price"}
                            label={"Price"}
                            suffix={"$"}
                            // initialValue={info.price || ""}
                            rules={[{ required: true }]}
                        />
                        {images.map(item => (
                            <InputField
                                typeInput={TYPE_CUSTOM_FIELD.INPUT}
                                name={`linkImg${item.id}`}
                                label={`Link Ảnh${item.id}`}
                                // initialValue={item.img || ""}
                                prefix={<LinkOutlined />}
                                rules={
                                    item.id === 1 ? [{ required: true }] : []
                                }
                            />
                        ))}
                    </Col>
                    <Col span={12}>
                        <SelectField
                            name={"FK_Room"}
                            label={"Room"}
                            // disabled={!isAddMode ? true : false}
                            // initialValue={info.type_id || ""}
                            options={roms || []}
                            rules={[{ required: true }]}
                        />
                        <SelectField
                            name={"FK_Category"}
                            label={"Caterogy"}
                            // disabled={!isAddMode ? true : false}
                            // initialValue={info.type_id || ""}
                            options={categories || []}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"Quantity"}
                            label={"Quantity"}
                            // initialValue={info.price || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT_NUMBER}
                            name={"Total"}
                            label={"Total"}
                            // initialValue={info.price || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"Material"}
                            label={"Material"}
                            // initialValue={info.price || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.INPUT}
                            name={"Guarantee"}
                            label={"Guarantee"}
                            // initialValue={info.price || ""}
                            rules={[{ required: true }]}
                        />
                        <InputField
                            typeInput={TYPE_CUSTOM_FIELD.TEXTAREA}
                            name={"Description"}
                            label={"Description"}
                            // initialValue={info.description || ""}
                            rules={[{ required: true }]}
                        />
                    </Col>
                    {/* render col right */}
                    {/* {handleRenderSpec()} */}
                    <Row
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Space size={"small"}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                icon={<SaveOutlined />}
                            >
                                Lưu
                            </Button>
                            <Button
                                text="Hủy"
                                htmlType="cancel"
                                icon={<CloseOutlined />}
                                // onClick={history.goBack}
                            >
                                Hủy
                            </Button>
                        </Space>
                    </Row>
                </Row>
            </Form>
        </div>
    )
}

export default AddEdit

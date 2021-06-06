import { Breadcrumb } from "antd"

const BreadcrumbField = props => {
    const { list } = props
    return (
        <Breadcrumb>
            {list.map(item => (
                <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default BreadcrumbField

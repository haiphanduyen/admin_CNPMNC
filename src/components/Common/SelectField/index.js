import { Form, Select } from "antd"

const SelectField = props => {
    const {
        name,
        label,
        initialValue,
        rules,
        options,
        disabled = false
    } = props
    console.log("🚀 ~ file: index.js ~ line 12 ~ options", options)

    return (
        <Form.Item
            name={name}
            label={label}
            rules={rules}
            initialValue={initialValue}
        >
            <Select
                disabled={disabled}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                }
                value={["1"]}
            >
                {options.map(item => (
                    <Select.Option key={item._id} value={item._id}>
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}

export default SelectField

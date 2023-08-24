import React from "react";
import { Select, Form } from "antd";
import "./Filter.sass";

const Filiter = ({ search, query, setFilterValue }) => {
  const [form] = Form.useForm();
  const handeSelectChange = (value, i) => {
    const orientation = form.getFieldValue("orientation");
    const size = form.getFieldValue("size");
    const color = form.getFieldValue("color");
    let filterList = [orientation, size, color];
    setFilterValue(filterList);
    search(query, filterList);
  };
  return (
    <div className="filter">
      <Form form={form} layout="inline">
        <Form.Item name="orientation">
          <Select
            className="select"
            placeholder="選擇方向"
            onChange={handeSelectChange}
            options={[
              { value: "landscape", label: "橫向" },
              { value: "portrait", label: "縱向" },
              { value: "square", label: "正方形" },
            ]}
            allowClear
          />
        </Form.Item>
        <Form.Item name="size">
          <Select
            className="select"
            placeholder="選擇尺寸"
            onChange={handeSelectChange}
            options={[
              { value: "large", label: "大" },
              { value: "medium", label: "中" },
              { value: "small", label: "小" },
            ]}
            allowClear
          />
        </Form.Item>
        <Form.Item name="color">
          <Select
            className="select"
            placeholder="選擇顏色"
            onChange={handeSelectChange}
            allowClear
          >
            <Select.Option
              value="F44336"
              style={{
                backgroundColor: "#F44336",
                color: "#FFFFFF",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              紅色
            </Select.Option>
            <Select.Option
              value="FF9800"
              style={{
                backgroundColor: "#FF9800",
                color: "#FFFFFF",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              橙色
            </Select.Option>
            <Select.Option
              value="FFEB3B"
              style={{
                backgroundColor: "#FFEB3B",
                color: "#FFFFFF",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              黃色
            </Select.Option>
            <Select.Option
              value="8BC34A"
              style={{
                backgroundColor: "#8BC34A",
                color: "#FFFFFF",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              綠色
            </Select.Option>
            <Select.Option
              value="2196F3"
              style={{
                backgroundColor: "#2196F3",
                color: "#FFFFFF",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              藍色
            </Select.Option>
            <Select.Option
              value="9C27B0"
              style={{
                backgroundColor: "#9C27B0",
                color: "#ffff",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              紫色
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filiter;

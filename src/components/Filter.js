import React from "react";
import { Select, Space, Form } from "antd";

import "./Filter.sass";
const { Option } = Select;

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
            <Option value="china" label="China">
              <Space>
                <div
                  style={{
                    backgroundColor: "#F44336",
                    width: "10px",
                  }}
                ></div>
                <span role="label" aria-label="China">
                  <label
                    style={{
                      backgroundColor: "#F44336",
                      width: "10px",
                    }}
                  />
                </span>
                China (中国)
              </Space>
            </Option>
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
            <Select.Option
              value="3F51B5"
              style={{
                backgroundColor: "#3F51B5",
                color: "#FFFFFF",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              藍色
            </Select.Option>
            <Select.Option
              value="CDDC39"
              style={{
                backgroundColor: "#CDDC39",
                color: "#4F4F4F",
                margin: "3px",
                paddingLeft: "40%",
              }}
            >
              淺綠
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filiter;

import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import dayjs from "dayjs";
import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";

export default function TenantManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    console.log("Cancel called, resetting form...");
    setIsModalOpen(false);
    setIsEdit(false);
    form.resetFields();
  };

  const openEdit = (record) => {
    setIsEdit(true);
    form.setFieldsValue({
      ...record,
      startDate: dayjs(record.startDate),
      endDate: dayjs(record.endDate),
    });
    showModal();
  };
  const columns = [
    {
      title: "Mã định danh",
      dataIndex: "tenantId",
      key: "tenantId",
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Tiến độ hoàn thành (%)",
      key: "progressStatus",
      dataIndex: "progressStatus",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<Eye size={16} />}></Button>
          <Button
            icon={<Pencil size={16} onClick={() => openEdit(record)} />}
          ></Button>
          <Button icon={<Trash2 size={16} />}></Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      tenantId: "ten01",
      startDate: "2025-05-11",
      endDate: "2025-05-12",
      status: "Đang giao",
      progress: 70,
      progressStatus: "Behind",
    },
    {
      tenantId: "ten02",
      startDate: "2025-05-13",
      endDate: "2025-05-15",
      status: "Ngừng giao",
      progress: 40,
      progressStatus: "Behind",
    },
    {
      tenantId: "ten03",
      startDate: "2025-05-10",
      endDate: "2025-05-20",
      status: "Đang giao",
      progress: 90,
      progressStatus: "On track",
    },
    {
      tenantId: "ten04",
      startDate: "2025-05-08",
      endDate: "2025-05-09",
      status: "Đã hủy",
      progress: 0,
      progressStatus: "Behind",
    },
    {
      tenantId: "ten05",
      startDate: "2025-05-05",
      endDate: "2025-05-18",
      status: "Đang giao",
      progress: 100,
      progressStatus: "On track",
    },
  ];
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
    handleCancel();
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">Quản lý Tenant</h1>
        <Button color="cyan" variant="solid" onClick={showModal}>
          Tạo Tenant
        </Button>
      </div>{" "}
      <div className="mt-4">
        <Table columns={columns} dataSource={data} />
      </div>
      <Modal
        title={isEdit ? "Sửa Tenant" : "Tạo Tenant"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Ngày bắt đầu"
            name="startDate"
            rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu" }]}
          >
            <DatePicker placeholder="Chọn ngày bắt đầu" />
          </Form.Item>
          <Form.Item
            label="Ngày kết thúc"
            name="endDate"
            rules={[{ required: true, message: "Vui lòng chọn ngày kết thúc" }]}
          >
            <DatePicker placeholder="Chọn ngày kết thúc" />
          </Form.Item>
          <Form.Item
            label="Trạng thái"
            name="status"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}
          >
            <Select placeholder="Chọn trạng thái">
              <Select.Option value="Ngừng giao">Ngừng giao</Select.Option>
              <Select.Option value="Đang giao">Đang giao</Select.Option>
              <Select.Option value="Đã huỷ">Đã huỷ</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Tiến độ hoàn thành"
            name="progress"
            rules={[
              { required: true, message: "Vui lòng nhập Tiến độ hoàn thành" },
            ]}
          >
            <InputNumber
              placeholder="Nhập tiến độ hoàn thành"
              addonAfter="%"
              className="!w-full"
              min={0}
              max={100}
              type="number"
            />
          </Form.Item>
          <Form.Item
            label="Trạng thái tiến độ"
            name="progressStatus"
            rules={[
              { required: true, message: "Vui lòng chọn trạng thái tiến độ" },
            ]}
          >
            <Select placeholder="Chọn trạng thái">
              <Select.Option value="On Track">On Track</Select.Option>
              <Select.Option value="Behind">Behind</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

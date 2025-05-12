import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Rate,
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
      title: "Mã tài xế",
      dataIndex: "driverId",
      key: "driverId",
    },
    {
      title: "Tên tài xế",
      dataIndex: "driverName",
      key: "driverName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Biển số xe",
      key: "vehicleNumber",
      dataIndex: "vehicleNumber",
    },
    {
      title: "Trạng thái của tài xế",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Số đơn hàng đã giao",
      key: "totalDeliveries",
      dataIndex: "totalDeliveries",
    },
    {
      title: "Đánh giá trung bình",
      key: "rating",
      dataIndex: "rating",
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
      driverId: "ten01",
      driverName: "Nguyễn Văn A",
      phoneNumber: "12345678",
      vehicleNumber: "1234",
      status: "đang giao",
      totalDeliveries: 1,
      rating: "5 ",
    },
    {
      driverId: "ten02",
      driverName: "Trần Thị B",
      phoneNumber: "09876543",
      vehicleNumber: "5678",
      status: "Đang nghỉ",
      totalDeliveries: 15,
      rating: 4.2,
    },
    {
      driverId: "ten03",
      driverName: "Lê Văn C",
      phoneNumber: "09112233",
      vehicleNumber: "8888",
      status: "Đang hoạt động",
      totalDeliveries: 30,
      rating: 4.8,
    },
    {
      driverId: "ten04",
      driverName: "Phạm Thị D",
      phoneNumber: "09334455",
      vehicleNumber: "1122",
      status: "Bận",
      totalDeliveries: 22,
      rating: 3.9,
    },
    {
      driverId: "ten05",
      driverName: "Ngô Văn E",
      phoneNumber: "09775566",
      vehicleNumber: "3344",
      status: "Đang nghỉ",
      totalDeliveries: 10,
      rating: 3.5,
    },
    {
      driverId: "ten06",
      driverName: "Hoàng Thị F",
      phoneNumber: "09091234",
      vehicleNumber: "7788",
      status: "Đang hoạt động",
      totalDeliveries: 45,
      rating: 4.7,
    },
  ];
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
    handleCancel();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-semibold">Quản lý Tài xế</h1>
        <Button color="cyan" variant="solid" onClick={showModal}>
          Thêm tài xế
        </Button>
      </div>{" "}
      <div className="mt-4">
        <Table columns={columns} dataSource={data} />
      </div>
      <Modal
        title={isEdit ? "Chỉnh sửa thông tin tài xế" : "Thêm tài xế"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name={["driverId"]}
            label="Mã số của tài xế"
            rules={[{ required: true, message: "Hãy nhập Mã số của tài xế" }]}
          >
            <Input placeholder="Nhập mã số của tài xế" />
          </Form.Item>
          <Form.Item
            name={["driverName"]}
            label="Tên tài xế"
            rules={[{ required: true, message: "Hãy nhập tên tài xế" }]}
          >
            <Input placeholder="Nhập tên tài xế" />
          </Form.Item>

          <Form.Item
            name={["phoneNumber"]}
            label="Số điện thoại của tài xế"
            rules={[
              { required: true, message: "Hãy nhập số điện thoại tài xế!" },
              { pattern: /^[0-9]+$/, message: "Chỉ được nhập số!" },
            ]}
          >
            <Input
              placeholder="Nhập số điện thoại của tài xế"
              addonBefore="+84"
              type="number"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            name={["vehicleNumber"]}
            label="Biển số xe của tài xế"
            rules={[
              { required: true, message: "Hãy nhập biển số xe của tài xế!" },
            ]}
          >
            <Input placeholder="Nhập biển số" />
          </Form.Item>
          <Form.Item
            label="Trạng thái của tài xế"
            name="status"
            rules={[
              { required: true, message: "Hãy chọn trạng thái của tài xế!" },
            ]}
          >
            <Select placeholder="Chọn trạng thái">
              <Select.Option value="Đang hoạt động ">
                Đang hoạt động
              </Select.Option>
              <Select.Option value="Đang nghĩ">Đang nghĩ</Select.Option>
              <Select.Option value="Bận">Bận</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="rating" label="Rate">
            <Rate />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

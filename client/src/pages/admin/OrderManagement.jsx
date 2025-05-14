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

export default function OderManagement() {
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
    console.log(record);

    form.setFieldsValue({
      ...record,
      createdDate: dayjs(record.createdDate),
      deliveryDate: dayjs(record.deliveryDate),
    });
    showModal();
  };
  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Ngày tạo đơn hàng",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Ngày giao hàng dự kiến",
      key: "deliveryDate",
      dataIndex: "deliveryDate",
    },
    {
      title: "Trạng thái của tài xế",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Tổng giá trị đơn hàng",
      key: "totalAmount",
      dataIndex: "totalAmount",
    },
    {
      title: "Trạng thái thanh toán",
      key: "paymentStatus",
      dataIndex: "paymentStatus",
    },
    {
      title: "Tên tài xế phụ trách",
      key: "driverAssigned",
      dataIndex: "driverAssigned",
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
      orderId: "ten02",
      customerName: "Trần Thị B",
      createdDate: "2025-05-10",
      deliveryDate: "2025-05-12",
      status: "Chờ xử lý",
      totalAmount: "250000",
      paymentStatus: "Chưa thanh toán",
      driverAssigned: "Lê Văn C",
    },
    {
      orderId: "ten03",
      customerName: "Lê Văn C",
      createdDate: "2025-05-11",
      deliveryDate: "2025-05-13",
      status: "Đang giao",
      totalAmount: "175000",
      paymentStatus: "Đã thanh toán",
      driverAssigned: "Nguyễn Văn D",
    },
    {
      orderId: "ten04",
      customerName: "Phạm Thị D",
      createdDate: "2025-05-09",
      deliveryDate: "2025-05-11",
      status: "Đã giao",
      totalAmount: "320000",
      paymentStatus: "Đã thanh toán",
      driverAssigned: "Trần Văn E",
    },
    {
      orderId: "ten05",
      customerName: "Ngô Văn E",
      createdDate: "2025-05-08",
      deliveryDate: "2025-05-10",
      status: "Đã hủy",
      totalAmount: "98000",
      paymentStatus: "Chưa thanh toán",
      driverAssigned: "Phạm Thị F",
    },
    {
      orderId: "ten06",
      customerName: "Hoàng Thị F",
      createdDate: "2025-05-07",
      deliveryDate: "2025-05-09",
      status: "Đang giao",
      totalAmount: "210000",
      paymentStatus: "Đã thanh toán",
      driverAssigned: "Nguyễn Văn G",
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
        <h1 className="text-xl font-semibold">Quản lý đơn hàng</h1>
        <Button color="cyan" variant="solid" onClick={showModal}>
          Thêm đơn hàng
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
            name={["orderId"]}
            label="Mã số của đơn hàng"
            rules={[{ required: true, message: "Hãy nhập Mã số của đơn hàng" }]}
          >
            <Input placeholder="Nhập mã số của đơn hàng" />
          </Form.Item>
          <Form.Item
            name={["customerName"]}
            label="Tên khách hàng"
            rules={[
              { required: true, message: "Hãy nhập tên của khách hàng !" },
            ]}
          >
            <Input placeholder="Nhập tên khách hàng" />
          </Form.Item>
          <Form.Item
            label="Ngày tạo đơn hàng"
            name="createdDate"
            rules={[
              { required: true, message: "Vui lòng chọn ngày tạo đơn hàng" },
            ]}
          >
            <DatePicker placeholder="Chọn ngày tạo đơn hàng" />
          </Form.Item>
          <Form.Item
            label="Ngày giao dự kiến"
            name="deliveryDate"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn ngày giao hàng dự kiến!",
              },
            ]}
          >
            <DatePicker placeholder="Chọn ngày giao hàng dự kiến" />
          </Form.Item>
          <Form.Item
            label="Trạng thái của đơn hàng"
            name="status"
            rules={[
              { required: true, message: "Hãy chọn trạng thái của đơn hàng!" },
            ]}
          >
            <Select placeholder="Chọn trạng thái của đơn hàng">
              <Select.Option value="Chờ xử lý ">Chờ xử lý</Select.Option>
              <Select.Option value="Đang giao">Đang giao</Select.Option>
              <Select.Option value="Đã giao">Đã giao</Select.Option>
              <Select.Option value="Đã huỷ">Đã hủy</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["totalAmount"]}
            label="Tổng giá tiền của đơn hàng"
            rules={[
              {
                required: true,
                message: "Hãy nhập tổng giá tiền của đơn hàng!",
              },
            ]}
          >
            <Input placeholder="Nhập tổng giá tiền của đơn hàng" />
          </Form.Item>
          <Form.Item
            label="Trạng thái thanh toán"
            name="paymentStatus"
            rules={[
              { required: true, message: "Hãy chọn Trạng thái thanh toán!" },
            ]}
          >
            <Select placeholder="Chọn Trạng thái thanh toán">
              <Select.Option value="Đã thanh toán ">
                Đã thanh toán
              </Select.Option>
              <Select.Option value="Đang nghĩ">Chưa thanh toán</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Tên tài xế phụ trách"
            name="driverAssigned"
            rules={[
              { required: true, message: "Hãy chọn Tên tài xế phụ trách!" },
            ]}
          >
            <Select placeholder="Chọn Tên tài xế phụ trách">
              <Select.Option value="Trần Thị B ">Trần Thị B</Select.Option>
              <Select.Option value="Lê Văn C">Lê Văn C</Select.Option>
              <Select.Option value="Phạm Thị D">Phạm Thị D</Select.Option>
              <Select.Option value="Ngô Văn E">Ngô Văn E</Select.Option>
              <Select.Option value="Hoàng Thị F">Hoàng Thị F</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

import { Check, CalendarDays, Bike } from "lucide-react";
import React from "react";
import { Button, Form, Input } from "antd";

export default function LookUpOrders() {
  return (
    <div className="w-full px-4 md:px-10 py-8">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        Tra cứu đơn hàng
      </h1>

      {/* Form */}
      <Form layout="vertical" className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <Form.Item
            label={<span className="text-base font-medium">Mã đơn hàng</span>}
            name="order_code"
            colon={false}
            className="w-full md:max-w-md"
          >
            <Input
              size="large"
              placeholder="Nhập mã đơn hàng"
              className="rounded-md border-red-500 focus:border-red-500 focus:ring-red-500"
            />
          </Form.Item>
          <Form.Item className="w-full md:w-auto">
            <Button
              htmlType="submit"
              size="large"
              className="!bg-red-500 !hover:bg-red-600 !text-white w-full md:w-auto mt-1 md:mt-[30px]"
            >
              Tra cứu
            </Button>
          </Form.Item>
        </div>
      </Form>

      {/* Step Indicator */}
      <div className="mt-10 w-full">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between relative">
          {/* Đường kẻ ngang */}
          <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[4px] bg-red-500 z-0" />

          {/* Các bước */}
          {[
            { label: "Đã tiếp nhận", icon: <Check size={20} /> },
            { label: "Đang xử lý", icon: <CalendarDays size={20} /> },
            { label: "Đang giao", icon: <Bike size={20} /> },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center z-10 md:w-1/3 text-center"
            >
              <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                {step.icon}
              </div>
              <span className="mt-2 text-lg font-medium">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Map */}
      <div className="mt-10 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4734811371477!2d106.63185107586864!3d10.775001859218305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea144839ef1%3A0x798819bdcd0522b0!2zQ2FvIMSQ4bqzbmcgQ8O0bmcgTmdo4buHIFRow7RuZyBUaW4gVFAuSENN!5e0!3m2!1svi!2s!4v1747932042241!5m2!1svi!2s"
          className="w-full h-[300px] md:h-[450px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

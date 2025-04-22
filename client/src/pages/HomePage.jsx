import React from "react";
import Header from "./Header";
import Carousel from "../component/Carousel";
import ServiceIntro from "../component/ServiceIntro";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <ServiceIntro />
    </div>
  );
}

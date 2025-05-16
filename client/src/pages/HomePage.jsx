import React from "react";
import Header from "./Header";
import Carousel from "../component/Carousel";
import ServiceIntro from "../component/ServiceIntro";
import { Check } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <ServiceIntro />
    </div>
  );
}

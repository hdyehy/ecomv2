import React from "react";
import Announcment from "../components/Announcment";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

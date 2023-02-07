import Footer from "@/components/Footer";
import BuyNow from "@/components/main/BuyPremium";
import FAQ from "@/components/main/FAQ";
import Features from "@/components/main/Features";
import MainHeader from "@/components/main/Header";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Topbar />
        <Navbar />
        <MainHeader />
        <Features />
        <BuyNow />
        <FAQ />
        <Footer />
      </>
    )
  }
}

import Footer from "@/components/Footer";
import BuyNow from "@/components/main/BuyPremium";
import FAQ from "@/components/main/FAQ";
import Features from "@/components/main/Features";
import MainHeader from "@/components/main/Header";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";
import CookiesModal from "@/components/cookies/CookiesModal";
import { useDetectAdBlock } from "adblock-detect-react";
import AddBlockerModal from "@/components/addblocker/AddBlockerModal";

const MainPage = () => {
  const [showCookiesModal, setShowCookiesModal] = React.useState(false);
  const [showAddBlocker, setShowAddBlocker] = React.useState(false);

  const adBlockDetected = useDetectAdBlock();

  React.useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (!hasVisitedBefore) {
      setShowCookiesModal(true);
      localStorage.setItem('hasVisitedBefore', true);
    }

    if (adBlockDetected) {
      setShowModal(true);
    }
  }, []);
  return (
    <div className="main">
      <CookiesModal
        open={showCookiesModal}
        onClose={() => setShowCookiesModal(false)}
      />
      {showAddBlocker ? <AddBlockerModal open={setShowAddBlocker} /> : <></>}
      <Topbar />
      <Navbar />
      <MainHeader />
      <Features />
      <BuyNow />
      <FAQ />
      <Footer />
    </div>
  )
}
export default MainPage;
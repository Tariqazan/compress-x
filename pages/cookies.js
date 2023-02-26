import Cookies from "@/components/cookies/Cookies";
import Footer from "@/components/Footer";
import GradientTitle from "@/components/GradientTitle";
import Navigation from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";


const CookiesPage = () => {
    return (
        <div className="cookies">
            <Topbar />
            <Navigation />
            <GradientTitle title={"Cookie"} />
            <div className="bg-gradient-to-br from-lightPink via-anakiwa to-lightPink py-10">
                <div className="container mx-auto">
                    <Cookies />
                    <div className="bg-white p-5">
                        <p className="my-5 font-mulish text-x20 normal font-bold text-christalle">Cookie change history</p>
                        <div className="flex flex-col md:flex-row justify-between my-2">
                            <p className="font-mulish normal font-thin text-x16 lg:text-x18 text-butterflyBush"><span className="text-minsk font-black">You</span> switch on category <span className="text-minsk font-black">Analytical and Performance Cookies</span></p>
                            <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBush">23.01.2022</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between my-2">
                            <p className="font-mulish normal font-thin text-x16 lg:text-x18 text-butterflyBush"><span className="text-minsk font-black">You</span> switch on category <span className="text-minsk font-black">Analytical and Performance Cookies</span></p>
                            <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBush">20.01.2022</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between my-2">
                            <p className="font-mulish normal font-thin text-x16 lg:text-x18 text-butterflyBush"><span className="text-minsk font-black">You</span> switch on category <span className="text-minsk font-black">Personalisation Cookies</span></p>
                            <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBush">20.01.2022</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between my-2">
                            <p className="font-mulish normal font-thin text-x16 lg:text-x18 text-butterflyBush"><span className="text-minsk font-black">You</span> switch on category <span className="text-minsk font-black">Advertising and Social Media cookies</span></p>
                            <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBush">05.01.2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CookiesPage;
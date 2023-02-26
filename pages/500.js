import React from "react";
import Navigation from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import Image500 from "@/public/assets/images/500.png";
import Image500bg from "@/public/assets/images/500-bg.png"

const Page500 = () => {
    return (
        <div className="error-bg">
            <Topbar />
            <Navigation />
            <div className="bg-gradient-to-br from-lightPink via-anakiwa to-lightPink h-screen align-center">
                <div className="container mx-auto">
                    <div className="h-screen flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full flex flex-col items-center lg:items-start">
                            <Image src={Image500} alt={"404"} />
                            <p className="text-christalle font-mulish font-normal text-x55">
                                Oops... <br />
                                Internal server error...
                            </p>
                        </div>
                        <div className="w-full">
                            <Image src={Image500bg} alt="Image404bg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page500;
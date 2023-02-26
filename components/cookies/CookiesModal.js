import React from "react";
import CookiesImage from "@/public/assets/images/cookies.png";
import Image from "next/image";
import GradientButton from "../button/GradientButton";
import { Exclude } from "../svg/Exclude";
import Cookies from "./Cookies";


const CookiesModal = (props) => {
    const [configure, setConfigure] = React.useState(false)
    return (
        <>
            {props.open ?
                <>
                    <input type="checkbox" checked={props.open} className="modal-toggle" />
                    <div className="modal">
                        <div className="relative">
                            <div className="modal-box shadow-none bg-transparent w-11/12 max-w-5xl p-10">
                                <div className="absolute top-1 right-2">
                                    <button onClick={props.onClose}><Exclude /></button>
                                </div>
                                <div className="p-5 bg-white">
                                    {configure ? <Cookies /> : <>
                                        <div className="flex justify-center">
                                            <Image src={CookiesImage} alt="cookies"></Image>
                                        </div>
                                        <p className="font-mulish normal font-semibold text-x24 text-christalle text-center py-4">This website uses cookies</p>
                                        <p className="font-mulish normal font-normal text-x20 text-center text-butterflyBush">We use cookies to personalize and enhance your experience on our site and improve the delivery of ads to you. Visit our Cookie Policy to learn more. By clicking "accept", you agree to our use of cookies.</p>
                                        <div className="flex justify-center my-10">
                                            <button className="bg-transparent w-48 px-5 py-2 font-mulish font-black normal text-martinique uppercase text-base mr-3 border-2 border-martinique"
                                                onClick={() => { setConfigure(true) }}>configure</button>
                                            <GradientButton text={"Accept"} />
                                        </div></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <></>}
        </>
    )
}

export default CookiesModal;
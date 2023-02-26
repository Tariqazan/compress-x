import React from "react";
import AddBlockerImage from "@/public/assets/images/addblocker.png";
import Image from "next/image";
import GradientButton from "../button/GradientButton";
import { Exclude } from "../svg/Exclude";


const AddBlockerModal = (props) => {
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
                                    <div className="flex justify-center">
                                        <Image src={AddBlockerImage} alt="cookies"></Image>
                                    </div>
                                    <p className="font-mulish normal font-semibold text-x24 text-christalle text-center py-4">Please disable AdBlock</p>
                                    <p className="font-mulish normal font-normal text-x20 text-center text-butterflyBush">Through AdBlock, the ad part of the site may not be displayed correctly.
                                        Please disable the blocker or add the current page or site completely to the exclusion.
                                        Or just turn off AdBlock.
                                        Thank you!</p>
                                    <div className="flex justify-center my-10">
                                        <GradientButton text={"Accept"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <></>
            }
        </>
    )
}

export default AddBlockerModal;
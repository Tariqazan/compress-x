import React from "react";
import { LeftArrow } from "./svg/LeftArrow";

const GradientTitle = (props) => {
    return (
        <div className="bg-gradient-to-r from-anakiwa via-pink to-anakiwa">
            <div className="container mx-auto">
                <div className="py-20">
                    <p className="font-mulish normal font-semibold text-x18 text-white flex items-center"><LeftArrow /><span className='ml-3'>Back</span></p>
                    <p className='text-center font-mulish normal font-black text-x64 lg:text-x48 md:text-x36 uppercase text-white'>{props.title}</p>
                </div>
            </div>
        </div>
    )
}


export default GradientTitle;
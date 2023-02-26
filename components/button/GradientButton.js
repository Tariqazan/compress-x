import React from "react";

const GradientButton = (props) => {
    return (
        <>
            <button className="bg-gradient-to-r to-minsk from-lavender w-48 px-5 py-2 font-mulish font-black normal rounded text-white uppercase text-x18 lg:text-x16 ml-0 md:ml-3 mt-3 md:mt-0">{props.text}</button>
        </>
    )
}

export default GradientButton;
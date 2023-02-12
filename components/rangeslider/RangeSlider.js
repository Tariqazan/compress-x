import React from "react";


const RangeSlider = ({ value }) => {
    return (
        <>
            <div className="relative my-5">
                <input type="range" min="0" max="100" defaultValue={value} className="w-full h-2 accent-butterflyBush relative z-10" step="20" />
                <div className="w-full flex justify-between text-xs absolute top-2 left-0 right-0">
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                    <div className="rounded-full h-3 w-3 bg-butterflyBush"></div>
                </div>
                <div className="w-full flex justify-between text-xs px-2">
                    <span className="p-1"></span>
                    <span className="text-sm text-butterflyBush font-normal normal">20</span>
                    <span className="px-1"></span>
                    <span className="text-sm text-butterflyBush font-normal normal">40</span>
                    <span className="px-1"></span>
                    <span className="text-sm text-butterflyBush font-normal normal">60</span>
                    <span className="px-1"></span>
                    <span className="text-sm text-butterflyBush font-normal normal">80</span>
                    <span className="px-1"></span>
                    <span className="text-sm text-butterflyBush font-normal normal">max</span>
                </div>
            </div>
        </>
    )
}

export default RangeSlider;
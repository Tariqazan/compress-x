import React from "react";
import Link from "next/link";
import GradientButton from "@/components/button/GradientButton";


const Cookies = () => {
    return (
        <div className="my-6 lg:my-12 md:my-8">
            <div className="my-10">
                <p className="font-mulish normal font-bold text-x18 lg:text-x20 text-christalle my-2">Information We Collect About You</p>
                <p className="text-butterflyBush font-mulish font-normal text-x14 lg:text-x16 my-2">We want to be transparent about the data we and our partners collect and how we use it, so you can best exercise control over your personal data. For more information, please see our <Link href={"#"} className="underline font-black text-x16">Cookie Policy.</Link></p>
            </div>
            <div className="my-10">
                <p className="font-mulish normal font-bold text-x18 lg:text-x20 text-christalle my-2">Information Our Partners Collect</p>
                <p className="text-butterflyBush font-mulish font-normal text-x14 lg:text-x16 my-2">We use a number partners to better improve your overall web browsing experience. They use cookies and other mechanisms to connect you with your social networks and tailor advertising to better match your interests. We have grouped these vendors into 3 categories based on their functional area. Click on learn more to view the list of vendors in each category.</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="font-mulish normal font-black text-x16 lg:text-x18 uppercase text-minsk">Categories</p>
                <div className="flex flex-row">
                    <p className="font-mulish normal font-black text-x16 lg:text-x18 uppercase text-minsk">0 of 3 allowed</p>
                    <div class="flex justify-center">
                        <div>
                            <input
                                class="mt-2 ml-2 h-3.5 w-8 appearance-none rounded-lg bg-gray outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-minsk checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <div className="flex flex-row justify-between">
                    <p className="my-2 font-mulish normal font-black text-x14 lg:text-x16 text-lavender">Analytical and Performance Cookies</p>
                    <div class="flex justify-center">
                        <div>
                            <input
                                class="mt-2 ml-2 h-3.5 w-8 appearance-none rounded-lg bg-gray outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-minsk checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
                <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBuss">These cookies are used to measure and analyze our website audience (e.g. visitor volume, pages viewed, average browsing time). By accepting these cookies, you are helping us improve our website performance.</p>
            </div>
            <div className="my-5">
                <div className="flex flex-row justify-between">
                    <p className="my-2 font-mulish normal font-black text-x14 lg:text-x16 text-lavender">Personalisation Cookies</p>
                    <div class="flex justify-center">
                        <div>
                            <input
                                class="mt-2 ml-2 h-3.5 w-8 appearance-none rounded-lg bg-gray outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-minsk checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
                <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBuss">These cookies allow us to provide you with online (or in-store) recommendations of products, services and content that match your expectations and preferences. By accepting these cookies, you are opting for an enriched and personalised experience.</p>
            </div>
            <div className="my-5">
                <div className="flex flex-row justify-between">
                    <p className="my-2 font-mulish normal font-black text-x14 lg:text-x16 text-lavender">Advertising and Social Media cookies</p>
                    <div class="flex justify-center">
                        <div>
                            <input
                                class="mt-2 ml-2 h-3.5 w-8 appearance-none rounded-lg bg-gray outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-minsk checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-white checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
                <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBuss">These cookies are used for advertisements displayed on third-party websites, including social media, are tailored to your preferences, and help us measure the effectiveness of our advertising campaigns. If you deactivate these cookies, advertising (including ours) will continue to be displayed as you browse the Internet, although it will not be specific to your personal interests or as relevant.</p>
            </div>
            <div className="my-5">
                <div className="flex flex-row justify-between">
                    <p className="my-2 font-mulish normal font-black text-x14 lg:text-x16 text-lavender">Functional Cookies</p>
                    <p className="my-2 font-mulish normal font-black text-x14 lg:text-x16 text-lavender">Required</p>
                </div>
                <p className="font-mulish normal font-normal text-x14 lg:text-x16 text-butterflyBuss">These cookies are required for optimal operation of our website, and cannot be configured. They allow us to offer you the key functions of the website (language used, display resolution, account access etc.), provide you with online advice and secure our website against any attempted fraud. (These are shell_name_change, ApplicationGatewayAffinity, ApplicationGatewayAffinityCORS and _evidon_*)</p>
            </div>
            <div className="mt-12 flex md:flex-row justify-center items-center flex-col">
                <button className="bg-transparent w-48 px-5 py-2 font-mulish font-black normal text-martinique uppercase text-base mr-3 border-2 border-martinique">Decline all</button>
                <GradientButton text={"Accept all"} />
            </div>
        </div>
    )
}

export default Cookies;
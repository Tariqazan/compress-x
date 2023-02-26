import React from "react";
import GradientButton from "../button/GradientButton";
import GradientTitle from "../GradientTitle";


const ContactForm = () => {
    return (
        <div className="contact">
            <GradientTitle title={"Contact"} />
            <div className="bg-gradient-to-br from-lightPink via-anakiwa to-lightPink py-10">
                <div className="container mx-auto">
                    <p className="text-center font-mulish normal font-bold text-x40 lg:text-x30 md:text-x20 text-martinique">
                        How can we help you?
                    </p>
                    <form action="" className="py-5">
                        <div className="block lg:flex w-100 space-x-0 md:space-x-4">
                            <div className="my-5 w-full">
                                <p className="font-mulish normal font-normal text-x18 md:text-x16 text-butterflyBush mb-5">
                                    Please select your question
                                </p>
                                <select className="select bg-white opacity-30 border-2 border-martinique w-full">
                                    <option defaultValue={"Please select your question"}>Please select your question</option>
                                </select>
                            </div>
                            <div className="my-5 w-full">
                                <p className="font-mulish normal font-normal text-x18 md:text-x16 text-butterflyBush mb-5">
                                    Please enter your email
                                </p>
                                <input type={'text'} className="bg-white opacity-30 border-2 border-martinique rounded-md w-full h-12 px-5" placeholder="Please enter your email"></input>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className="font-mulish normal font-normal text-x18 md:text-x16 text-butterflyBush mb-5">
                                Please enter your message
                            </p>
                            <textarea className="textarea textarea-bordered bg-white opacity-30 border-2 border-martinique rounded-md w-full h-12 px-5 pt-1" rows="5" placeholder="Please enter your message"></textarea>
                        </div>
                        <div className="flex my-5">
                            <input type={'checkbox'} className="bg-white border-2 border-martinique rounded-md"></input>
                            <p className="font-mulish normal font-normal text-x18 text-butterflyBush my-5 ml-5">
                                I agree to <span className="font-black text-x18 md:text-x16 underline">Privacy policy</span>
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <GradientButton text={"send"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
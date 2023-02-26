import Image from 'next/image';
import React from 'react';
import Logo from '@/public/assets/navbar/logo.svg'
import Link from 'next/link';
import { Hamburguer } from './svg/Hamburguer';
import { CloseMenu } from './svg/CloseMenu';
import SocialIconLanguage from './SocialIconLanguage';

const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className='relative'>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <Link href={"#"}>
                            <Image src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href={"#"} className="font-mulish normal font-normal text-x16 text-martinique">Home</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-x16 text-martinique">FAQ</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-x16 text-martinique">Blog</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-x16 text-martinique">Pricing</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-x16 text-martinique">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='hidden lg:block'>
                            <Link href={"#"} className="bg-transparent underline underline-offset-1 text-minsk font-mulish font-bold uppercase text-x14 mr-8 font-normal normal">Log in</Link>
                            <Link href={"#"} className="bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish font-normal normal font-black text-white text-x14 uppercase">Sign up</Link>
                        </div>
                        <div className="block lg:hidden">
                            {isOpen ? <button className="btn btn-ghost" onClick={() => {
                                setIsOpen(!isOpen)
                            }}>
                                <CloseMenu />
                            </button> : <button className="btn btn-ghost" onClick={() => {
                                setIsOpen(!isOpen)
                            }}>
                                <Hamburguer />
                            </button>}
                            {isOpen ? <div className="bg-white fixed w-screen h-screen z-10 top-20 md:top-28 left-0">
                                <ul className="bg-gradient-to-r from-lightPink to-anakiwa">
                                    <li className='py-4 pl-6'><Link href={"#"} className="font-mulish normal font-normal text-x18 text-martinique">Home</Link></li>
                                    <li className='py-4 pl-6'><Link href={"#"} className="font-mulish normal font-normal text-x18 text-martinique">FAQ</Link></li>
                                    <li className='py-4 pl-6'><Link href={"#"} className="font-mulish normal font-normal text-x18 text-martinique">Blog</Link></li>
                                    <li className='py-4 pl-6'><Link href={"#"} className="font-mulish normal font-normal text-x18 text-martinique">Pricing</Link></li>
                                    <li className='py-4 pl-6'><Link href={"#"} className="font-mulish normal font-normal text-x18 text-martinique">Contact</Link></li>
                                    <li className='py-4 text-center'><Link href={"#"} className="bg-transparent underline underline-offset-1 text-minsk font-mulish font-bold uppercase text-xs mr-8 font-normal normal">Log in</Link></li>
                                    <li className='py-4 pb-8 text-center'><Link href={"#"} className="bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish font-normal normal font-black text-white uppercase">Sign up</Link></li>
                                    <li className='py-4 px-6'><SocialIconLanguage className={"dropdown-top"} /></li>
                                </ul>
                            </div> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
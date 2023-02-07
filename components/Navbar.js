import Image from 'next/image';
import React from 'react';
import Logo from '@/public/assets/navbar/logo.svg'
import Link from 'next/link';
import { Hamburguer } from './svg/Hamburguer';


const Navigation = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <Link href={"#"}>
                        <Image src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Home</Link></li>
                        <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">FAQ</Link></li>
                        <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Blog</Link></li>
                        <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Pricing</Link></li>
                        <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='hidden lg:block'>
                        <Link href={"#"} className="bg-transparent underline underline-offset-1 text-minsk font-mulish font-bold uppercase text-xs mr-8 font-normal normal">Log in</Link>
                        <Link href={"#"} className="bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish font-normal normal font-black text-white uppercase">Sign up</Link>
                    </div>
                    <div className="dropdown dropdown-left">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <Hamburguer />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Home</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">FAQ</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Blog</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Pricing</Link></li>
                            <li><Link href={"#"} className="font-mulish normal font-normal text-md text-martinique">Contact</Link></li>
                            <li><Link href={"#"} className="bg-transparent underline underline-offset-1 text-minsk font-mulish font-bold uppercase text-xs mr-8 font-normal normal">Log in</Link></li>
                            <li><Link href={"#"} className="bg-gradient-to-r from-lavender to-minsk rounded py-3 px-10 font-mulish font-normal normal font-black text-white uppercase">Sign up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
import React from 'react';
import Image from 'next/image';
import Facebook from '@/public/assets/topbar/facebook.svg';
import Linkedin from '@/public/assets/topbar/Linkedin.svg';
import Twitter from '@/public/assets/topbar/Twitter.svg';
import Line from '@/public/assets/topbar/line.svg';
import { Col, Container, Row, Spacer } from '@nextui-org/react';
import Logo from "@/public/assets/navbar/logo.svg"
import Link from 'next/link';

export default class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="footer">
                    <Container>
                        <Row>
                            <Col span={4}>
                                <div className="logo">
                                    <Image src={Logo} />
                                </div>
                                <p className='footer-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. </p>
                                <div className="social">
                                    <Image src={Linkedin} className='linkedin-svg' alt='linkedin' />
                                    <Image src={Line} className='line-svg' alt='Line' />
                                    <Image src={Facebook} className='facebook-svg' alt='facebook' />
                                    <Image src={Line} className='line-svg' alt='Line' />
                                    <Image src={Twitter} className='twitter-svg' alt='twitter' />
                                </div>
                            </Col>
                            <Spacer x={6} />
                            <Col span={4}>
                                <p className='footer-title'>Quick Links</p>
                                <p className="footer-link">Home</p>
                                <p className="footer-link">FAQs</p>
                                <p className="footer-link">Blog</p>
                                <p className="footer-link">Pricing</p>
                                <p className="footer-link">Contact</p>
                            </Col>
                            <Col span={6}>
                                <p className='footer-title'>Newsletter</p>
                                <p className="footer-link">Please enter your email</p>
                                <div className="input-box">
                                    <input type="text" className='footer-input' placeholder='Email' />
                                    <button className='send-btn'>Send</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-end">
                    <Container display='flex' justify='space-between'>
                        <p className="footer-copyright">© 2022 CompressorX. All rights reserved</p>
                        <div className="footer-end-links">
                            <Link className='footer-end-link' href={"#"}>Cookies</Link>
                            <Link className='footer-end-link' href={"#"}>Privacy Policy</Link>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
}
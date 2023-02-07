import { Button, Container, Grid, Navbar, Text } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import Logo from '@/public/assets/navbar/logo.svg'
import Link from 'next/link';
import { Hamburguer } from './svg/Hamburguer';


const Navigation = () => {
    const collapseItems = [
        "Home",
        "FAQ",
        "Blog",
        "Pricing",
        "Contact"
    ];
    return (
        <Grid css={{
            '@mdMin': {
                bg: 'linear-gradient(217deg, var(--blue), var(--pink) 80.71%)'
            }
        }}>
            <Container responsive={true}>
                <Navbar variant="sticky" disableShadow={true} maxWidth={'xl'} css={{ 'background': 'transparent' }}>
                    <Navbar.Brand>
                        <div className='logo'>
                            <Image src={Logo} alt="logo" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Content hideIn="md">
                        <Navbar.Link href="#" className='nav-link'>Home</Navbar.Link>
                        <Navbar.Link href="#" className='nav-link'>
                            FAQ
                        </Navbar.Link>
                        <Navbar.Link href="#" className='nav-link'>Blog</Navbar.Link>
                        <Navbar.Link href="#" className='nav-link'>Pricing</Navbar.Link>
                        <Navbar.Link href="#" className='nav-link'>Contact</Navbar.Link>
                    </Navbar.Content>
                    <Navbar.Toggle aria-label="toggle navigation" children={<Hamburguer />} showIn={'md'} />
                    <Navbar.Content hideIn="md">
                        <Navbar.Link className='login-btn' href="#">
                            LOG IN
                        </Navbar.Link>
                        <Navbar.Link className='signup-btn' href="#">
                            SIGN UP
                        </Navbar.Link>
                        <Navbar.Toggle aria-label="toggle navigation" showIn={'md'} />
                    </Navbar.Content>
                    <Navbar.Collapse css={{ background: 'linear-gradient(230deg, var(--blue), var(--pink) 40.71%);' }}>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem key={item}>
                                <Link
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href="#"
                                >
                                    {item}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                        <Navbar.CollapseItem key={'login'} css={{ display: 'flex', justifyContent: 'center' }}>
                            <Link className='login-btn' href="#">
                                LOG IN
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem key={'signup'} css={{ display: 'flex', justifyContent: 'center' }}>
                            <Link className='signup-btn' href="#">
                                SIGN UP
                            </Link>
                        </Navbar.CollapseItem>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Grid>
    )
}

export default Navigation;
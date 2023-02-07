import React from 'react';
import Image from 'next/image';
import Facebook from '@/public/assets/topbar/facebook.svg';
import Linkedin from '@/public/assets/topbar/Linkedin.svg';
import Twitter from '@/public/assets/topbar/Twitter.svg';
import Line from '@/public/assets/topbar/line.svg';
import { BritishFlag } from './svg/BritishFlag';
import { Dropdown, Container, Grid, useTheme } from '@nextui-org/react';


const Topbar = () => {
    const theme = useTheme();
    return (
        <Grid css={{ '@mdMax': { display: 'none' } }}>
            <Grid css={{
                border: '1px solid $black',
                background: '$pink',
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <Container display='flex' justify='space-between' responsive={true}>
                    <Grid css={{ display: 'flex' }}>
                        <Image src={Linkedin} className='linkedin-svg' alt='linkedin' />
                        <Image src={Line} className='line-svg' alt='Line' />
                        <Image src={Facebook} className='facebook-svg' alt='facebook' />
                        <Image src={Line} className='line-svg' alt='Line' />
                        <Image src={Twitter} className='twitter-svg' alt='twitter' />
                    </Grid>
                    <div className="lan">
                        <Dropdown>
                            <Dropdown.Button light color="transparent">
                                <BritishFlag /> <span className='lan-text'>ENG</span>
                            </Dropdown.Button>
                            <Dropdown.Menu color="secondary" aria-label="Actions">
                                <Dropdown.Item
                                    key="eng"
                                    icon={<BritishFlag />}
                                >
                                    ENG
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
            </Grid>
        </Grid>
    )
}

export default Topbar;
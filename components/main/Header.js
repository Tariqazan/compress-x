import { Container, Grid, useTheme, Text } from "@nextui-org/react";
import React from "react";
import UploadFIle from "../dropzone/UploadFIle";


const MainHeader = () => {
    const theme = useTheme()
    return (
        <Grid css={{
            background: 'linear-gradient(230deg, rgba(176, 216, 254, 0.3), rgba(255, 200, 205, 0.3) 40.71%)',
            padding: '50px 0'
        }}>
            <Container responsive={true}>
                <Grid css={{ textAlign: 'center' }}>
                    <Grid>
                        <Text className="mulish" css={{
                            fontStyle: 'normal',
                            fontWeight: theme.theme.fontWeights.bold,
                            fontSize: theme.theme.fontSizes["6xl"],
                            lineHeight: theme.theme.lineHeights["5xl"],
                            textAlign: 'center',
                            color: '$blue',
                            margin: '0 0 $15 0',
                            '@mdMax': {
                                fontSize: theme.theme.fontSizes["4xl"],
                                margin: '0 0 $5 0',
                            }
                        }}>Fast & efficient</Text>
                        <Text className="mulish" css={{
                            fontStyle: 'normal',
                            fontWeight: theme.theme.fontWeights.black,
                            fontSize: theme.theme.fontSizes["6xl"],
                            lineHeight: theme.theme.lineHeights["5xl"],
                            textAlign: 'center',
                            color: '$pink',
                            textTransform: 'uppercase',
                            '@mdMax': {
                                fontSize: theme.theme.fontSizes["5xl"]
                            }
                        }}>image compression</Text>
                    </Grid>
                    <Grid>
                        <Text className="mukta"
                            css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.normal,
                                fontSize: theme.theme.fontSizes["2xl"],
                                lineHeight: theme.theme.lineHeights["5xl"],
                                marginTop: theme.theme.space["4xl"],
                                marginBottom: theme.theme.space["4xl"],
                                color: '$navyBlue',
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["xl"],
                                }
                            }}>
                            Optimize <Text span css={{ fontWeight: theme.theme.fontWeights.semibold, margin: '0 5px' }}>JPEG</Text>,
                            <Text span css={{ fontWeight: theme.theme.fontWeights.semibold, margin: '0 5px' }}>PNG</Text>,
                            <Text span css={{ fontWeight: theme.theme.fontWeights.semibold, margin: '0 5px' }}>SVG</Text>,
                            <Text span css={{ fontWeight: theme.theme.fontWeights.semibold, margin: '0 5px' }}>GIF</Text>
                            and <Text span css={{ fontWeight: theme.theme.fontWeights.semibold, margin: '0 5px' }}>WEBP</Text></Text>
                    </Grid>
                </Grid>
                <UploadFIle />
            </Container >
        </Grid >
    )
}


export default MainHeader;
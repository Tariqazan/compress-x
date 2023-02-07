import { Col, Container, Grid, Row, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Feature1 from "@/public/assets/main/features-1.png";
import Feature2 from "@/public/assets/main/features-2.png";
import Feature3 from "@/public/assets/main/features-3.png";

const Features = () => {
    const theme = useTheme()
    return (
        <Grid
            css={{
                background: 'linear-gradient(350deg, var(--blue), var(--pink) 80.71%)',
                padding: '50px 0'
            }}>
            <Container>
                <Text className="mulish" css={{
                    fontStyle: 'normal',
                    fontWeight: theme.theme.fontWeights.bold,
                    fontSize: theme.theme.fontSizes["5xl"],
                    lineHeight: theme.theme.lineHeights["5xl"],
                    textAlign: 'center',
                    color: '$navyBlue',
                    marginBottom: theme.theme.space["5xl"],
                    '@mdMax': {
                        fontSize: theme.theme.fontSizes["4xl"],
                        marginBottom: theme.theme.space["lg"],
                    }
                }}>FEATURES</Text>
                <Grid.Container>
                    <Row>
                        <Col span={8}>
                            <Text className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.bold,
                                fontSize: theme.theme.fontSizes["4xl"],
                                lineHeight: theme.theme.lineHeights["5xl"],
                                color: '$navyBlue',
                                marginBottom: theme.theme.space["md"],
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["2xl"],
                                }
                            }}>Smaller images, Faster websites</Text>
                            <Text span className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.light,
                                fontSize: theme.theme.fontSizes["xl"],
                                lineHeight: theme.theme.lineHeights["5xl"],
                                color: '$lightNavyBlue',
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["lg"],
                                }
                            }}>Websites images are usually too big and unoptimized for web purposes. It is easy to save a few megabytes by compressing your assets without noticing any loss in quality.
                            </Text>
                        </Col>
                        <Spacer x={1} />
                        <Col span={5}>
                            <Image src={Feature1} alt="" />
                        </Col>
                    </Row>
                    <Spacer y={3} />
                    <Row>
                        <Col span={5}>
                            <Image src={Feature2} alt="" />
                        </Col>
                        <Spacer x={1} />
                        <Col span={8}>
                            <Text className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.bold,
                                fontSize: theme.theme.fontSizes["4xl"],
                                lineHeight: theme.theme.lineHeights["5xl"],
                                color: '$navyBlue',
                                marginBottom: theme.theme.space["md"],
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["2xl"],
                                }
                            }}>SEO and Lighthouse optimized</Text>
                            <Text span className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.light,
                                fontSize: theme.theme.fontSizes["xl"],
                                lineHeight: theme.theme.lineHeights["5xl"],
                                color: '$lightNavyBlue',
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["lg"],
                                }
                            }}>Compress your images and improve your SEO ranking. <br />
                                Get a higher Lighthouse score and increase your visibility in search engines.</Text>
                        </Col>
                    </Row>
                    <Spacer y={3} />
                    <Row>
                        <Col span={8}>
                            <Text className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.bold,
                                fontSize: theme.theme.fontSizes["4xl"],
                                lineHeight: theme.theme.lineHeights["5xl"],
                                color: '$navyBlue',
                                marginBottom: theme.theme.space["md"],
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["2xl"],
                                }
                            }}>High quality image compression</Text>
                            <Text span className="mulish" css={{
                                fontStyle: 'normal',
                                fontWeight: theme.theme.fontWeights.light,
                                fontSize: theme.theme.fontSizes["xl"],
                                lineHeight: theme.theme.lineHeights["5xl"],
                                color: '$lightNavyBlue',
                                '@mdMax': {
                                    fontSize: theme.theme.fontSizes["lg"],
                                }
                            }}>
                                Achieve huge compressions while keeping the quality of the picture intact. <br />
                                CompressorX can help you reduce drastically the size of your images and photos whilst maintaining a high quality with almost no difference visible to the eye.
                            </Text>
                        </Col>
                        <Spacer x={1} />
                        <Col span={5}>
                            <Image src={Feature3} alt="" />
                        </Col>
                    </Row>
                </Grid.Container>
            </Container>
        </Grid>
    )
}

export default Features;
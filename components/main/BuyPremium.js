import { Col, Container, Row } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import PlaneImg from "@/public/assets/main/plane.png";
import { RightArrow } from "../svg/RightArrow";


const BuyNow = () => {
    return (
        <div className="buy-premium-bg">
            <Container>
                <div className="buy-premium">
                    <Row gap={0}>
                        <Col span={8}>
                            <p className="title">Facilisis fermentum aliquet semper!</p>
                            <ul>
                                <li className="point">Elementum sed sed semlier placerat duis vitae sodales. </li>
                                <li className="point">Maecenas ante sit interdum justo ut pulvinar.  </li>
                                <li className="point">Mattis in cursus varius gravida tincidunt gravida adipiscing sit.  </li>
                                <li className="point">Volutpat et, vulputate enim dignissim.  </li>
                            </ul>
                            <button className="buy-premium-btn"><span>Buy Premium</span> <RightArrow /></button>
                        </Col>
                        <Col span={4}>
                            <div className="plane-img">
                                <Image src={PlaneImg} alt={"plane"} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}


export default BuyNow;
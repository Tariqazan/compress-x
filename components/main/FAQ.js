import { Col, Container, Row, Button } from "@nextui-org/react";
import React from "react";
import Accordion from "../accordion/Accordion";

const FAQ = () => {
    const [activeTab, setActiveTab] = React.useState("Category5")

    return (
        <div className="FAQ-bg">
            <Container>
                <div className="FAQ">
                    <p className="title">FAQs</p>
                    <Row gap={0}>
                        <Col css={{ 'height': '500px', 'overflowY': 'auto', 'overflowX': 'hidden' }} span={3}>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "category1" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("category1")}
                            >Category1</Button>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "Category2" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("Category2")}
                            >Category2</Button>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "Category3" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("Category3")}
                            >Category3</Button>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "Category4" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("Category4")}
                            >Category4</Button>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "Category5" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("Category5")}
                            >Category5</Button>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "Category6" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("Category6")}
                            >Category6</Button>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "Category7" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("Category7")}
                            >Category7</Button>
                            <Button bordered
                                size={'lg'}
                                className={activeTab == "Category8" ? 'tab-button-active' : 'tab-button'}
                                onClick={() => setActiveTab("Category8")}
                            >Category8</Button>
                        </Col>
                        <Col css={{ 'height': '500px', 'overflowY': 'auto' }} span={9}>
                            {activeTab == "Category1" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                            {activeTab == "Category2" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                            {activeTab == "Category3" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                            {activeTab == "Category4" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                            {activeTab == "Category5" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                            {activeTab == "Category6" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                            {activeTab == "Category7" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                            {activeTab == "Category8" ? <>
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                                <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel." />
                            </> : <></>}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default FAQ;
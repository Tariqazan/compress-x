import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Main from "@/components/privacypolicy/main";
import Topbar from "@/components/Topbar";
import React from "react";

export default class MainPage extends React.Component {
    render() {
        return (
            <>
                <Topbar />
                <Navbar />
                <Main />
                <Footer />
            </>
        )
    }
}

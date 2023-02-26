import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";
import ContactForm from "@/components/contacts/ContactForm";

export default class MainPage extends React.Component {
    render() {
        return (
            <>
                <Topbar />
                <Navbar />
                <ContactForm />
                <Footer />
            </>
        )
    }
}

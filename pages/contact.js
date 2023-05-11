import ContactForm from "../components/contact/contact-form";
import Head from 'next/head';
import { Fragment } from "react";

function ContactPage(){
    return(
        <Fragment>
            <Head>
                <title>contact to me</title>
                <meta name="description" content="Sending msg" />
            </Head>
            <ContactForm />
        </Fragment>
        
    )
}

export default ContactPage;
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const ContactUsPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);
        // emailjs.sendForm('gmail', 'template_xmakgec', form.current, 'o14cKU20T7Vr4lmKS')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        e.target.reset()
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactUsPage;
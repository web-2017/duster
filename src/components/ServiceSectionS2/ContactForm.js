import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <div className="contact-form">
            <h3>Request Call Back!</h3>
            <p>Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked me?</p>
            <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                <div className="form-field">
                    <input
                        value={forms.name}
                        type="text"
                        name="name"
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Your Name" />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div className="form-field">
                    <input
                        value={forms.email}
                        type="email"
                        name="email"
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Your Email" />
                    {validator.message('email', forms.email, 'required|email')}
                </div>
                <div className="form-field">
                    <input
                        value={forms.phone}
                        type="phone"
                        name="phone"
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Your phone" />
                    {validator.message('phone', forms.phone, 'required|phone')}
                </div>
                <div className="form-field">
                    <select
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.subject}
                        type="text"
                        className="form-control"
                        name="subject">
                        <option>Choose a Service</option>
                        <option>Bedroom Cleaning</option>
                        <option>Bathroom Cleaning</option>
                        <option>Window Cleaning</option>
                    </select>
                    {validator.message('subject', forms.subject, 'required')}
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="submit-area">
                        <button type="submit" className="theme-btn">Submit Now</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default ContactForm;
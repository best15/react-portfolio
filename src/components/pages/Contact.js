import React, { Fragment, useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {

    // Create state variables for the fields in the form
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');

    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {

        // Getting the value and name of the input which triggered the change
        let target = e.target;
        let inputType = target.name;
        let inputValue = target.value;

        // Based on the input type, we set the state of either email, username

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }

    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (userName === "" || message === "") {

            setErrorMessage('Username/Message field are required');
        } else if (!validateEmail(email)) {

            setErrorMessage('Please provide valid email!');
        } else {
            setSuccessMessage('Submitted !');
            setUserName('');
            setEmail('');
            setErrorMessage('');
        }


    };


    return (
        <Fragment>
            <section className="contactForm">
                <form>
                    <div className="row mb-3">
                        {/* <label for="inputPassword3" className="col-sm-2 col-form-label me-2">Password</label> */}
                        <div className="col-sm-10">
                            <input name="userName" onChange={handleInputChange} className="form-control" id="" placeholder="Name" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        {/* <label for="inputEmail3" className="col-sm-2 col-form-label me-2">Email</label> */}
                        <div className="col-sm-10">
                            <input name="email" onChange={handleInputChange} className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label> Message:</label>
                        <textarea name="message" onChange={handleInputChange} className="form-control" rows="5" id="message"></textarea>
                    </div>

                    <button name="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {successMessage && (
                    <div>
                        <p className="success-text">{successMessage}</p>
                    </div>
                )}
            </section>

        </Fragment>

    );
}

export default Contact;
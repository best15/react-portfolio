import React, { Fragment } from 'react';


function Contact() {

    return (
        <Fragment>
            <section className="contactForm">
                <form>
                    <div class="row mb-3">
                        {/* <label for="inputEmail3" class="col-sm-2 col-form-label me-2">Email</label> */}
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Name" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        {/* <label for="inputPassword3" class="col-sm-2 col-form-label me-2">Password</label> */}
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="Email" />
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="message">Message:</label>
                        <textarea class="form-control" rows="5" id="message"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </section>
        </Fragment>

    );
}

export default Contact;
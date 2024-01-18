import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

import PageHeader from '../PageHeader/PageHeader'

function Contact() {
    return (
        <>
        <PageHeader title={"Contact Me"} />
        <div className="container bg-white pt-5">
            <div className="row px-3 pb-2">
                <div className="col-sm-4 text-center mb-3">
                    <FontAwesomeIcon icon={solid("location-dot")} size="2xl" className="mb-3 text-primary"/>
                    <h4 className="font-weight-bold">Address</h4>
                    <p>123 Street, New York, USA</p>
                </div>
                <div className="col-sm-4 text-center mb-3">
                    <FontAwesomeIcon icon={solid("phone")} size="2xl" className="mb-3 text-primary"/>
                    <h4 className="font-weight-bold">Phone</h4>
                    <p>+012 345 6789</p>
                </div>
                <div className="col-sm-4 text-center mb-3">
                    <FontAwesomeIcon icon={regular("envelope")} size="2xl" className="mb-3 text-primary"/>
                    <h4 className="font-weight-bold">Email</h4>
                    <p>info@example.com</p>
                </div>
            </div>
            <div className="col-md-12 pb-5">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm">
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="8" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn btn-primary" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
  
export default Contact;
  
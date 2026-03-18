import React from "react";
import backimg from "../images/bg-newsletter.jpg"

const Contact=()=>{
    return(
          <div className="position-relative overflow-hidden py-5">
            <img src={backimg}
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover scale-50" alt="newsletter"
                style={{ zIndex: -1 }} />

            <div className="container ">
                <div className="row justify-content-center ">
                    <div className="col-md-8 py-5 my-5 bg-rounded">
                        <div className="subscribe-header text-center pb-3">
                            <h3 className="section-title text-uppercase text-white">Send Your Feedback</h3>
                        </div>
                        <form id="form" className="d-flex flex-wrap gap-2">
                            <input type="email" name="email" placeholder="Your Email Address"
                                className="form-control form-control-lg bg-white rounded-0" required />
                                <textarea type="text" name="messege" placeholder="Your Message"
                                className="form-control form-control-lg bg-white rounded-0" required />
                            <button className="btn btn-danger btn-lg text-uppercase w-100" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
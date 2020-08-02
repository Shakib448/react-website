import React, { useState } from "react";

const Contact = () => {

    const [data,setData] = useState({
        fullname: "",
        email: "",
        address: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;
        
        setData((preVal) => {
            return {
                ... preVal,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My full name is ${data.fullname} and my email is ${data.email} and my address is ${data.address} also my message is ${data.msg}`);
    };

return (
<>
    <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
        <div className="">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit="formSubmit">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname}
                            onChange={InputEvent} placeholder="Enter your name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email}
                            onChange={InputEvent} placeholder="Your Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="address" value={data.address}
                            onChange={InputEvent} placeholder="Your Address" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg}
                            onChange={InputEvent}></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
);
};

export default Contact;
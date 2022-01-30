import React, {useState} from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_3AzReaBWCCn6R56UGfZc9";

  const onSubmit = (data, r) => {
    sendEmail(serviceID,
              templateID,
              { 
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
              },
              userID
          )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
  
      emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form Sent Successfully");
      }).catch(err => console.error(`Something went wrong here ${err}`));
  }

  return (
  <div id="contact" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out the form</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
              <div className="col-md-6 col-xs-12">

                {/* Name Input */}

                <div className="text-center">
                 <input type="text" className="form-control" placeholder="Name" name="name" 
                  ref={register({
                   required: "Please enter your name",
                   maxLength: { 
                     value: 20,
                     message: "Please enter your name within 20 characters"
                    }
                  })
                  }
                 />
                 <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>

                {/* Phone Input */}

                <div className="text-center">
                 <input type="text" className="form-control" placeholder="Phone Number" name="phone"
                 ref={register({
                  required: "Please add your Phone Number",                  
                 })
                 }
                 />
                 <div className="line"></div>
                </div>
                
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>

                {/* Email Input */}

                <div className="text-center">
                 <input type="email" className="form-control" placeholder="Email" name="email" 
                 ref={register({
                  required: "Please provide your Email Address",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email"
                  }                  
                 })
                 }
                 />
                 <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>

                {/* Subject Input */}

                <div className="text-center">
                 <input type="text" className="form-control" placeholder="Subject" name="subject" 
                  ref={register({
                    required: "Please add the Subject",                  
                   })
                  }
                 />
                 <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>
              </div>
              <div className="col-md-6 col-xs-12">

                {/* Description */}

                <div className="text-center">  
                 <textarea type="text" className="form-control" placeholder="Description" name="description"
                  ref={register({
                    required: "Please describe your Project requirements",                  
                   })
                  }
                 >
                 </textarea>
                 <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
                <button className="button btn-main-offer contact-btn" type="submit">contact me</button>                
              </div>
          </div>
        </form>
      </div>
  </div>
  )
};

export default Contacts;

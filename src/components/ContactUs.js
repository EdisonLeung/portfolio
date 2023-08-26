import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function ContactUs(props) {
  let resumeData = props.resumeData;
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // function sendEmail() {
  //   const templateID = "template_ncr71de";
  //   const variables = {
  //     from_name: name,
  //     from_email: email,
  //     message: message,
  //     subject: subject
  //   };
  //   window.emailjs
  //     .send("service_hoec3yn", templateID, variables)
  //     .then((res) => {
  //       alert("Message Sent");
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <section id="contact">
      <div className="row">
        <div className="contact-form">
        <ScrollAnimation
                animateIn="animate__fadeInLeft"
                animateOnce={false}
                duration={0.5}
              >
                            <h1>
              Please Feel Free to Contact Me @{" "}
              <a style={{color: "#57cbff"}} href="mailto:edleung03@gmail.com?">{resumeData.email}</a>
              {" "}or +1(206)681-7124
            </h1>
          {/* <form action="mailto:edleung03@gmail.com" className="contact-form" onSubmit={sendEmail}>
            <h1>
              Please Feel Free to Contact Me @{" "}
              <a href="mailto:edleung03@gmail.com?">{resumeData.email}</a>
            </h1>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "1rem",
                  width: "50%",
                }}
              >
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
              </div>
            </div>
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required onChange={(e)=>setSubject(e.target.value)}/>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="2" required onChange={(e)=>setMessage(e.target.value)}/>
            <label for="submit" style={{ marginTop: "24px" }} />
            <input
              type="submit"
              value="Send"
            />
          </form> */}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

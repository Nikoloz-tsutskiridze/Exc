import { useRef } from "react";

function Contact() {
  const contactRef = useRef(null);

  return <section className="py-10" id="contact" ref={contactRef}></section>;
}

export default Contact;

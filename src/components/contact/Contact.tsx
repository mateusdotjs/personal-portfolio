/// <reference types="vite-plugin-svgr/client" />
import ButtonFilled from "../global/ButtonFilled";
import Input from "./form/Input";
import Textarea from "./form/Textarea";
import Title from "../global/Title";
import useField from "../../hooks/useField";
import Email from "../../assets/email.svg?react";
import Phone from "../../assets/phone.svg?react";
import { FormEvent, RefObject, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ refer }: { refer: RefObject<HTMLDivElement> }) => {
  const name = useField("");
  const email = useField("email");
  const message = useField("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!name.value || !email.value || !message.value) return;
    if (name.error || email.error || message.error) return;

    const templateParams = {
      from_name: name.value,
      email: email.value,
      message: message.value,
    };

    setLoading(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      console.log(response);
      alert("Email successfully sent. Thanks!");

      name.setValue("");
      email.setValue("");
      message.setValue("");
    } catch (error) {
      alert("Failed to send email. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-neutral-900 px-4 pb-20 pt-16 
    font-inter md:pt-44"
    >
      <div
        className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 
      justify-items-center  lg:grid-cols-2"
      >
        <form
          className="mt-8 flex w-full flex-col gap-4 rounded-md border-[1px] border-neutral-700 bg-gradient-to-br 
        from-neutral-800 p-10 shadow-form md:w-auto lg:mt-0"
        >
          <p className="text-center text-lg text-violet-400 md:hidden">
            Contact Form
          </p>
          <Input id={"name"} type={"text"} label={"Name"} {...name} />
          <Input id={"email"} type={"email"} label={"E-mail"} {...email} />
          <Textarea id={"message"} label={"Message"} {...message} />
          <ButtonFilled onClick={handleClick}>
            {loading ? "Loading..." : "Send message"}
          </ButtonFilled>
        </form>
        <div className="row-start-1 lg:col-start-2">
          <Title>Get in contact</Title>
          <span className="mb-5 mt-5 hidden text-xl text-neutral-500 lg:block">
            I'm open to work. Send me an e-mail or contact me via Whatsapp.
          </span>
          <ul className="mt-6 text-neutral-300">
            <li className="mb-2 flex items-center gap-2">
              <Email /> mateus.silvainfo@gmail.com
            </li>
            <li className="mb-2 flex items-center gap-2">
              <Phone /> +55 11 95492-5932
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

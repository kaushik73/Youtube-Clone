import emailjs from "@emailjs/browser";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "./constants";

export const handleSendMail = (form) => {
  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
      publicKey: EMAILJS_PUBLIC_KEY,
    })
    .then(
      () => {
        // return is not being used
        return "I got you Mail, THANKS!";
      },
      (error) => {
        return "OOPS, I got some error... , Please mail me on kaushikjain67890@gmail.com";
      }
    );
};

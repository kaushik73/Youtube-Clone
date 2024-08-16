import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { handleSendMail } from "../utils/sendMail";

const ContactMeForm = () => {
  const formRef = useRef(null);
  const [showSubmissionMessage, setShowSubmissionMessage] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{ userName: "", email: "", message: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSendMail(formRef.current);
          setShowSubmissionMessage(true);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={formRef} className="space-y-4">
            <Field
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              type="text"
              name="userName"
            />
            <Field
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              type="email"
              name="email"
            />
            <Field
              as="textarea"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
              name="message"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500  to-cyan-500 hover:from-cyan-500 hover:to-blue-500  text-white font-bold py-2 px-4 rounded transition duration-300"
                disabled={isSubmitting}
              >
                Send Message
              </button>
              <Link
                to="/resume"
                className="flex-1 bg-gradient-to-r from-cyan-500  to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
              >
                View Resume
              </Link>
            </div>
            {showSubmissionMessage && (
              <div className="text-green-600 mt-4 text-center text-xl font-bold">
                I got you Mail, THANKS!
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactMeForm;

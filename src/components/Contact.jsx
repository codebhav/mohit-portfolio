import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    linkedin: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_yyqh2ud",
        "template_t1eaane",
        {
          fName: form.fName,
          lName: form.lName,
          to_name: "Mohit Mokal Mediation",
          email: form.email,
          linkedin: form.linkedin,
          to_email: "info@mohitmokalmediation.com",
          message: form.message,
        },
        "NSbCH1fg_8V6MtNF6"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            fName: "",
            lName: "",
            email: "",
            linkedin: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="bg-[#BAE0EB] bg-opacity-25 flex flex-col justify-center items-center">
      <div className="px-[28px] py-[53px] md:p-[73px] flex flex-col gap-[12px] justify-center items-center">
        <h1 className="font-jakarta font-semibold text-[25px] md:text-[54px]">
          Contact Us
        </h1>
        <p className="font-jakarta text-center w-[238px] md:w-[450px] text-[#706D79] text-[14px] md:text-[18px]">
          Fill out the form below and we will reach out to you as soon as
          possible..
        </p>
      </div>

      <div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col md:w-[1136px] md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col md:w-1/2">
              <label className="font-jakarta text-[15px] md:text-[20px] text-[#2E2E2E] mb-2">
                First name
              </label>
              <input
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                placeholder="First name"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="font-jakarta text-[15px] md:text-[20px] text-[#2E2E2E] mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                placeholder="Last name"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col md:w-1/2">
              <label className="font-jakarta text-[15px] md:text-[20px] text-[#2E2E2E] mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="font-jakarta text-[15px] md:text-[20px] text-[#2E2E2E] mb-2">
                LinkedIn
              </label>
              <input
                type="url"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-jakarta text-[15px] md:text-[20px] text-[#2E2E2E] mb-2">
              Tell us your query
            </label>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-center my-[40px]">
            <button
              type="submit"
              className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-4 rounded w-[290px]"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact");

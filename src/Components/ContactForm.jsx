import React, { useState } from "react";
import DOMPurify from 'dompurify'

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prepValues) => ({
      ...prepValues,
      [name]: DOMPurify.sanitize(value),
    }));
  }
  return (
    <div className="h-full border rounded-xl p-8 bg-white">
      <form>
        <div className="grid gap-4">
          {/* Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="outline-accent py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
          </div>
          {/* End Grid */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="outline-accent py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="outline-accent py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Phone Number"
              value={formValues.phone}
              onChange={handleChange}
              autoComplete="phone"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="outline-accent py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Your Message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* End Grid */}
        <div className="mt-4 grid">
          <button
            type="submit"
            className="outline-accent w-32 py-3 px-4 inline-flex justify-center items-left gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-accent text-white hover:bg-accent/90 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none"
          >
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

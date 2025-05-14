import React from "react";
import Section from "../templates/Section";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Stats = () => {
  const inquiryForm = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      message: Yup.string()
        .min(50, "Must be at least 50 characters")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      phone: Yup.string()
        .required("Mobile number is required")
        .matches(/^\+?[1-9]\d{1,14}$/, "Enter a valid international phone number"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Section>
      <h2 className="text-2xl font-bold mb-2">For any Enquiry, please write to us.</h2>
      <p className="text-gray-600 mb-6">We usually respond within 24-48 hours.</p>

      <form onSubmit={inquiryForm.handleSubmit} className="space-y-5 max-w-lg">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g., Mahesh Khanna"
            onChange={inquiryForm.handleChange}
            onBlur={inquiryForm.handleBlur}
            value={inquiryForm.values.name}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {inquiryForm.touched.name && inquiryForm.errors.name && (
            <div className="text-red-600 text-sm">{inquiryForm.errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g., mahesh.khanna@gmail.com"
            onChange={inquiryForm.handleChange}
            onBlur={inquiryForm.handleBlur}
            value={inquiryForm.values.email}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {inquiryForm.touched.email && inquiryForm.errors.email && (
            <div className="text-red-600 text-sm">{inquiryForm.errors.email}</div>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-semibold mb-1">Phone Number</label>
          <PhoneInput
            id="phone"
            name="phone"
            international
            defaultCountry="IN"
            placeholder="e.g., +91 9876543210"
            value={inquiryForm.values.phone}
            onChange={(value) => inquiryForm.setFieldValue("phone", value)}
            onBlur={() => inquiryForm.setFieldTouched("phone", true)}
            className="w-full border border-gray-300 rounded"
            countrySelectProps={{
              className: "bg-base-100 text-white border-gray-600",
            }}
          />
          {inquiryForm.touched.phone && inquiryForm.errors.phone && (
            <div className="text-red-600 text-sm">{inquiryForm.errors.phone}</div>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-1">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Please enter at least 50 characters..."
            onChange={inquiryForm.handleChange}
            onBlur={inquiryForm.handleBlur}
            value={inquiryForm.values.message}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {inquiryForm.touched.message && inquiryForm.errors.message && (
            <div className="text-red-600 text-sm">{inquiryForm.errors.message}</div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </Section>
  );
};

export default Stats;

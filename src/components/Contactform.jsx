import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
// ✅ Validation Helpers
const validateName = (name) =>
  name.trim().length > 0 && name.trim().length <= 35;
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) =>
  /^\+?\d{10,15}$/.test(phone.replace(/\s+/g, ""));
const validateSubject = (s) => s.trim().length > 0 && s.trim().length <= 120;

const ContactForm = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!fields.name.trim()) newErrors.name = "Name is required";
    else if (!validateName(fields.name))
      newErrors.name = "Name must be 1–35 characters";

    if (!fields.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(fields.email))
      newErrors.email = "Invalid email address";

    if (!fields.phone.trim()) newErrors.phone = "Phone is required";
    else if (!validatePhone(fields.phone))
      newErrors.phone = "Invalid phone number";

    if (!fields.subject.trim()) newErrors.subject = "Subject is required";
    else if (!validateSubject(fields.subject))
      newErrors.subject = "Subject must be 1–120 characters";

    if (!fields.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        "service_kmzk5e6",
        "template_o8h1bfm",
        {
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          subject: fields.subject,
          message: fields.message,
        },
        "UvBtke7LSWuoHG9LL"
      );

      //   alert("✅ Message sent successfully!");
      toast.success("Message sent successfully!");
      setFields({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Email sending failed:", error);
      //   alert("❌ Something went wrong. Please try again later.");
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-10 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-xl bg-primary backdrop-blur-lg shadow-xl rounded-2xl p-8 ">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-white">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Reusable Input */}
          {[
            { name: "name", type: "text", label: "Full Name", max: 35 },
            { name: "email", type: "email", label: "Email Address" },
            { name: "phone", type: "tel", label: "Phone Number" },
            { name: "subject", type: "text", label: "Subject", max: 120 },
          ].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type}
                name={field.name}
                maxLength={field.max}
                placeholder=" "
                value={fields[field.name]}
                onChange={handleChange}
                required
                aria-invalid={!!errors[field.name]}
                className={`peer w-full px-4 pt-5 pb-2 text-gray-800 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:bg-white transition ${
                  errors[field.name]
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300"
                }`}
              />
              <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                {field.label}
              </label>
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              placeholder=" "
              rows="5"
              value={fields.message}
              onChange={handleChange}
              required
              className={`peer w-full px-4 pt-5 pb-2 text-gray-800 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:bg-white transition resize-none ${
                errors.message
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300"
              }`}
            />
            <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
              Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

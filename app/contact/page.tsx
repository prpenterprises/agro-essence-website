"use client";

import { useState } from "react";

export default function ContactPage() {
  const phone = "+919599804558";
  const phone2 = "+919818990174";
  const whatsapp = "919599804558";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !message) {
      alert("All fields are required.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const subject = encodeURIComponent(
      "New Inquiry from AgroEssence Website"
    );

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Phone: ${phoneNumber}

Message:
${message}`
    );

    window.location.href = `mailto:prpenterprises13@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-700">

      {/* Hero Section */}
      <section className="text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">From Seed to Bloom 🌱</p>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Get in Touch
            </h2>

            <div className="space-y-3 text-gray-200">
              <p>
                <strong className="text-white">Business Name: </strong>
                <span className="text-green-400 font-medium">
                  AgroEssence
                </span>
              </p>

              <p>
                <strong className="text-white">City: </strong>
                <span className="text-green-400 font-medium">
                  Ghaziabad, Uttar Pradesh
                </span>
              </p>

              <p>
                <strong className="text-white">Business Hours: </strong>
                <span className="text-green-400 font-medium">
                  11 AM – 6 PM
                </span>
              </p>

              <p>
                <strong className="text-white">Phone: </strong>
                <br />
                <a
                  href={`tel:${phone2}`}
                  className="text-green-400 hover:underline"
                >
                  +91 98189 90174
                </a>
                <br />
                <a
                  href={`tel:${phone}`}
                  className="text-green-400 hover:underline"
                >
                  +91 95998 04558
                </a>
              </p>

              <p>
                <strong className="text-white">WhatsApp: </strong>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </p>

              <p>
                <strong className="text-white">Email: </strong>
                <a
                  href="mailto:prpenterprises13@gmail.com"
                  className="text-green-400 hover:underline"
                >
                  prpenterprises13@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl text-gray-700 font-semibold mb-4">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full text-gray-700 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-gray-700 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number (10 digits)"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
                maxLength={10}
                required
                className="w-full text-gray-700 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full text-gray-700 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Google Map Section (UNCHANGED LINK) */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-white py-6 text-center">
            Our Location
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6394301350824!2d77.33320357550221!3d28.670513075644063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfafce7691761%3A0x58fbad0a2272141!2sTyagi%20Complex!5e0!3m2!1sen!2sin!4v1771328857452!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
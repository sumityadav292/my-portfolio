
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import emailjs from "emailjs-com";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/sumityadav292",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sumit8887y/",
    icon: <FaLinkedin />,
  },
  {
    name: "Email",
    href: "mailto:yadavsumit0199@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Sumit63yadav/",
    icon: <FaCode />,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/918887905495",
    icon: <FaWhatsapp />,
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
    setSuccess(false);
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("Sending your message...");
    setSuccess(false);

    try {
      await emailjs.send(
        "service_0c1tues",
        "template_y0qwar8",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        "ebKDF7AWzup_etuSD"
      );

      setStatus("Message sent successfully! Thank you for reaching out.");
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus(
        "Unable to send your message. Please try again or contact me by email."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-glow contact-bg-glow-one" />
      <div className="contact-bg-glow contact-bg-glow-two" />

      <div className="contact-container">
        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span className="contact-eyebrow">
            <HiSparkles />
            LET'S CONNECT
          </span>

          <h2>
            Get In <span>Touch.</span>
          </h2>

          <p>
            Have a project idea, an opportunity, or just want to
            connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Left information panel */}
          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="contact-info-top">
              <div className="contact-info-icon">
                <FaPaperPlane />
              </div>

              <span className="contact-info-label">CONTACT DETAILS</span>
            </div>

            <h3>
              Let's build something <span>great.</span>
            </h3>

            <p className="contact-info-description">
              I'm interested in web development, meaningful projects
              and opportunities to grow as a developer.
            </p>

            <a
              href="mailto:yadavvishal0199@gmail.com"
              className="contact-email-card"
            >
              <span className="contact-email-icon">
                <FaEnvelope />
              </span>

              <span className="contact-email-content">
                <span>Email me at</span>
                <strong>yadavvishal0199@gmail.com</strong>
              </span>
            </a>

            <div className="contact-social-heading">
              <span>FIND ME ONLINE</span>
              <span className="contact-social-line" />
            </div>

            <div className="contact-social-list">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  title={social.name}
                  className="contact-social-link"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="contact-note">
              <HiSparkles />
              <span>Thanks for visiting my portfolio!</span>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="contact-form-heading">
              <span className="contact-form-label">SEND A MESSAGE</span>
              <h3>Let's talk about your idea.</h3>
              <p>Fill in the details below and I'll receive your message.</p>
            </div>

            <form className="contact-form" onSubmit={sendEmail}>
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  disabled={sending}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  disabled={sending}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project..."
                  rows={5}
                  maxLength={3000}
                  required
                  disabled={sending}
                />
                <span className="contact-character-count">
                  {formData.message.length}/3000
                </span>
              </div>

              <button
                type="submit"
                className="contact-submit-button"
                disabled={sending}
              >
                {sending ? (
                  <>
                    Sending Message...
                    <span className="contact-spinner" />
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>

              {status && (
                <p
                  className={`contact-form-status ${
                    success ? "contact-status-success" : ""
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {success && <FaCheckCircle />}
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="contact-footer">
          <a href="https://portfoliosumit2.netlify.app/" className="contact-footer-brand">
            SUMIT<span>.</span>
          </a>

          <p style={{ fontWeight: "bold", fontSize: "10px" }}>Designed and built with passion.</p>

          <span className="contact-footer-copy" style={{ fontWeight: "bold", fontSize: "10px" }}>
            © {new Date().getFullYear()} Sumit Yadav
          </span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

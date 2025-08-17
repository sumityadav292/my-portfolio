import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('')

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = e => {
    e.preventDefault()
    setStatus('Sending...')

    emailjs.send(
      'service_0c1tues',      
      'template_y0qwar8',     
      formData,
      'ebKDF7AWzup_etuSD'     
    )
    .then(() => {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' }) // Reset form
    })
    .catch(() => {
      setStatus('Failed to send message. Please try again later.')
    })
  }

  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-400 mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="px-4 py-2 rounded bg-gray-700 text-white outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="px-4 py-2 rounded bg-gray-700 text-white outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="px-4 py-2 rounded bg-gray-700 text-white outline-none h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded duration-300"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-8 flex space-x-6 text-2xl"
      >
        <a href="https://github.com/sumityadav292" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-indigo-400 duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/sumit8887y/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-indigo-400 duration-300" />
        </a>
        <a href="mailto:yadavvishal0199@gmail.com">
          <FaEnvelope className="hover:text-indigo-400 duration-300" />
        </a>

        <a href="https://leetcode.com/u/Sumit63yadav/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png"
          alt="LeetCode"
          className="w-6 h-6 hover:scale-110 transition-transform duration-300"
        />
      </a>
      </motion.div>
    </section>
  )
}

export default Contact

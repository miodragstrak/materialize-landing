'use client'

import { motion } from 'framer-motion'
import { Wallet, QrCode, BadgeCheck, Mail } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import './landing.css'

export default function LandingPage() {
  return (
    <main className="landing-main">

    <nav className="landing-nav">
        <a href="https://demo.materialize4.me/" target="_blank">RWA Demo</a>
        <a href="https://youtu.be/M4Mj8XB6QfQ?si=P5MHmYhDa_MDx21F">Reverse RWA Video</a>
        <a href="https://youtu.be/-J53FNANA4s?si=lMgRtcgaOAdHKOlb" target="_blank">Verification Demo Video</a>
        
        {/* TWITTER */}
        <a
          href="https://x.com/materializeee"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-icon"
        >
          <FaXTwitter />
        </a>
     </nav>


      {/* HEADER */}
      <header className="landing-header">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="logo-wrapper"
        >
          <Image
            src="/logo2.jpg"
            alt="Materialize Logo"
            width={220}
            height={150}
            className="logo-img"
            priority
          />
        </motion.div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <motion.div className="hero-inner">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Materialize Network <br />
            Decentralized Manufacturing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hero-subtitle"
          >
            Materialize is building the world’s first decentralized manufacturing network.
          </motion.p>

          <div className="hero-buttons">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYRj2RxxyvdJZlbuPUJFN1oeCofCL1niUK6zSw8AKwFHU90Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Join Waitlist →
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        {[
          {
            icon: <Wallet size={40} color="#f5b352" />,
            title: 'Own the Design',
            text: 'Connect your wallet to claim a tokenized design - your key to verified, real-world creation.',
          },
          {
            icon: <QrCode size={40} color="#f5b352" />,
            title: 'Identity',
            text: 'Each physical item carries its digital twin - an engraved link proving authenticity and origin.',
          },
          {
            icon: <BadgeCheck size={40} color="#f5b352" />,
            title: 'Proof of Make',
            text: 'Your NFT certifies not just ownership, but the act of creation itself - machine-verified and logged on-chain.',
          },
          {
            icon: <Mail size={40} color="#f5b352" />,
            title: 'Build the Future',
            text: 'Join a growing ecosystem of designers, makers, and collectors powering the next era of decentralized fabrication.',
          },
        ].map((f) => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </section>

      {/* PROCESS VISUAL */}
      <section id="reverse-rwa" className="process-section">
        {[
          {
            img: '/origin.gif',
            title: 'Digital Origin',
            text: 'Verifiable history of how something was produced and installed.',
          },
          {
            img: '/machine-step.gif',
            title: 'Machine Production',
            text: 'Automated systems materialize assets linked to your wallet.',
          },
          {
            img: '/rwa-step.gif',
            title: 'Reverse RWA',
            text: 'Each physical product is engraved and verified on-chain.',
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="process-card"
          >
            <div className="process-img-wrapper">
              <Image
                src={step.img}
                alt={step.title}
                width={300}
                height={200}
                className="process-img"
              />
            </div>
            <h3 className="process-title">{step.title}</h3>
            <p className="process-text">{step.text}</p>
          </motion.div>
        ))}
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Materialize Labs · Built for the Real World ⚡
      </footer>
    </main>
  )
}
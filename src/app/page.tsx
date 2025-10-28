'use client'

import { motion } from 'framer-motion'
import { Wallet, QrCode, BadgeCheck, Mail } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0e0524',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
    {/* HEADER */}
    <header
      style={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40px',
        marginBottom: '20px',
        zIndex: 50,
      }}
    >
      {/* Centered Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          borderRadius: '10%',
          overflow: 'hidden',
          boxShadow: '0 0 25px rgba(207, 73, 104, 0.5)',
        }}
      >
        <Image
          src="/logo2.jpg"
          alt="Materialize Logo"
          width={300}
          height={200}
          style={{ objectFit: 'contain', borderRadius: '50%' }}
          priority
        />
      </motion.div>

      {/* X (Twitter) Icon - Top Right Corner */}
      <a
        href="https://x.com/materializeee"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute',
          right: 30,
          top: 40,
          color: '#cf4968',
          fontSize: 32,
          textDecoration: 'none',
          textShadow: '0 0 10px rgba(207, 73, 104, 0.8)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#cf4968')}
      >
        <FaXTwitter />
      </a>
    </header>


      {/* HERO */}
      <section
        style={{
          minHeight: 'calc(100vh - 140px)',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <motion.div
          style={{
            maxWidth: 800,
            aspectRatio: '1 / 1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: 20,
              background: 'linear-gradient(90deg, #cf4968, #ff80a5)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            DeFab: When Machines Join the Blockchain
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              maxWidth: 600,
              margin: '0 auto 40px',
              fontSize: 18,
              color: '#d1c1e8',
              lineHeight: 1.6,
            }}
          >
            We’re building a world where machines have wallets, ownership is
            production, and creation is decentralized.
          </motion.p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYRj2RxxyvdJZlbuPUJFN1oeCofCL1niUK6zSw8AKwFHU90Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#f5b352',
                color: '#0e0524e0',
                padding: '14px 36px',
                borderRadius: 30,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 18,
                boxShadow: '0 0 20px #cf496860',
              }}
            >
              Join Waitlist →
            </motion.a>

           <motion.a
              href="https://materializeit4me.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                border: '2px solid #f5b352',
                color: '#f5b352',
                padding: '14px 36px',
                borderRadius: 30,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: 18,
                transition: 'all 0.3s',
              }}
            >
              Enter Demo →
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          background: '#13083790',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid #cf496840',
          borderBottom: '1px solid #cf496840',
          padding: '40px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
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
          <div
            key={f.title}
            style={{
              background: '#1a0d3a',
              borderRadius: 16,
              padding: 20,
              border: '1px solid #cf496850',
            }}
          >
            <div style={{ marginBottom: 10 }}>{f.icon}</div>
            <h3 style={{ fontSize: 20, fontWeight: 600 }}>{f.title}</h3>
            <p style={{ fontSize: 14, color: '#d0bfff' }}>{f.text}</p>
          </div>
        ))}
      </section>

      {/* PROCESS VISUAL */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          padding: '40px 40px',
          background: '#130837',
          borderTop: '1px solid #cf496840',
          borderBottom: '1px solid #cf496840',
        }}
      >
        {[
          {
            img: '/nft.jpg',
            title: 'Digital Origin',
            text: 'Mint your NFT to define the identity of your creation.',
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
            style={{
              width: 300,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px #cf496830',
                marginBottom: 16,
              }}
            >
            <Image
              src={step.img}
              alt={step.title}
              width={300}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 16,
              }}
            />
            </div>
            <h3 style={{ fontSize: 20, color: '#cf4968', fontWeight: 600 }}>
              {step.title}
            </h3>
            <p style={{ fontSize: 14, color: '#d1c1e8', marginTop: 8 }}>
              {step.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '40px 0 20px',
          color: '#aaa',
          fontSize: 14,
          textAlign: 'center',
        }}
      >
        © {new Date().getFullYear()} Materialize Labs · Built for the Real World ⚡
      </footer>
    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Wallet, QrCode, BadgeCheck, Mail, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function LandingPage() {
  const [walletConnected, setWalletConnected] = useState(false)

  return (
    <main className="min-h-screen bg-[#0e0524] text-white font-inter">
      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-violet-400 to-fuchsia-400 mb-4"
        >
          Materialize Market
        </motion.h1>
        <p className="text-lg text-purple-300 max-w-xl mx-auto">
          Reverse RWA for the real world — linking physical art, collectibles, and culture
          to verified on-chain ownership.
        </p>

        {/* CONNECT WALLET mock */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setWalletConnected(!walletConnected)}
            className={`${
              walletConnected
                ? 'bg-green-500 hover:bg-green-400'
                : 'bg-linear-to-r from-fuchsia-500 to-violet-500 hover:opacity-90'
            } text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition`}
          >
            <Wallet className="w-5 h-5" />
            {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </button>
        </div>

        {walletConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-purple-300 text-sm"
          >
            ✅ Wallet connected (mock). You can claim your NFT soon!
          </motion.div>
        )}
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-20 px-8 bg-[#130837]/60 backdrop-blur-md border-y border-fuchsia-800/20"
      >
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <Wallet className="mx-auto mb-4 w-10 h-10 text-fuchsia-400" />,
              title: 'Connect Wallet',
              text: 'Log in using your Solflare or Phantom wallet and verify your digital presence.',
            },
            {
              icon: <QrCode className="mx-auto mb-4 w-10 h-10 text-violet-400" />,
              title: 'Engraved Identity',
              text: 'Each real object is engraved with a QR linking directly to its NFT record.',
            },
            {
              icon: <BadgeCheck className="mx-auto mb-4 w-10 h-10 text-fuchsia-400" />,
              title: 'Verified Ownership',
              text: 'Claim your NFT and prove real-world possession of your collectible.',
            },
            {
              icon: <Mail className="mx-auto mb-4 w-10 h-10 text-violet-400" />,
              title: 'Future Drops',
              text: 'Join our waitlist to receive early access to upcoming engraved editions.',
            },
          ].map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a0d3a] rounded-2xl p-6 border border-fuchsia-500/20 hover:border-fuchsia-400/40 transition"
            >
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-purple-200">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-28 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-violet-400 to-fuchsia-400">
          Join the Waitlist
        </h2>
        <p className="text-purple-300 mb-10 max-w-lg mx-auto">
          Be the first to claim your Balkan Sheep NFT and experience Reverse RWA in action.
        </p>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYRj2RxxyvdJZlbuPUJFN1oeCofCL1niUK6zSw8AKwFHU90Q/viewform"
            target="_blank"
          >
            <button className="bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-8 py-3 rounded-full font-medium">
              Join Waitlist on Google Form →
            </button>
          </Link>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-fuchsia-800/30 bg-linear-to-r from-fuchsia-800/20 to-violet-800/20">
        <Zap className="mx-auto mb-3 text-fuchsia-400" />
        <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">
          Reverse RWA in Motion
        </h3>
        <p className="text-purple-300 max-w-md mx-auto">
          Each NFT represents a real, engraved object — verified, tangible, and collectible.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-purple-400 text-sm border-t border-fuchsia-900/30">
        © {new Date().getFullYear()} Materialize Labs · Built for Hackathons ⚡
      </footer>
    </main>
  )
}

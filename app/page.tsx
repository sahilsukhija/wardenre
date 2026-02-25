"use client";

import WaitlistForm from '../components/WaitlistForm';
import React from 'react';
import { Shield, Lock, Search, Zap, Globe, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WardenReHome() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Shield size={18} className="text-black" />
          </div>
          WardenRe
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Platform</a>
          <a href="/pricing" className="hover:text-white transition-colors">Enterprise</a>
        </div>
        <a href="#waitlist" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-slate-200 transition-all flex items-center justify-center">
          Request Access
        </a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <motion.div {...fadeIn}>
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 inline-block">
            Next-Gen Identity Defense
          </span>
          
          <div className="mb-8">
            <span className="px-4 py-2 rounded-md bg-white/10 text-white text-sm font-bold tracking-wide border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] inline-flex items-center gap-2">
              <Shield size={14} className="text-cyan-400" />
              Protected by Proprietary Deepfake Neutralization Technology
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            The Digital Fortress for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
              Modern Identities.
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Stop identity injection and deepfake fraud before they reach your infrastructure. 
            Automated legal takedowns and real-time perimeter protection.
          </p>
          
          {/* THE NEW WAITLIST FORM IS PLACED HERE */}
          <div id="waitlist" className="bg-white/5 p-8 rounded-2xl border border-white/10 max-w-xl mx-auto shadow-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Secure Your Access</h2>
            <WaitlistForm />
          </div>

        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Search className="text-cyan-400" />, title: "Deep Scan AI", desc: "Our neural engine monitors the dark web and surface web in real-time." },
            { icon: <Globe className="text-blue-400" />, title: "Global Takedown", desc: "Automated legal requests issued globally to remove fraudulent content." },
            { icon: <Lock className="text-purple-400" />, title: "Privacy Layer", desc: "Enterprise-grade encryption for all your digital assets and identity data." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h3 className="text-2xl font-bold mb-6">Leadership</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            WardenRe is spearheaded by experts in digital trust, safety infrastructure, and active threat neutralization.
          </p>
          <div className="inline-flex items-center gap-6 bg-white/5 px-8 py-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors">
            <div className="text-center">
              <p className="text-white font-bold text-lg">Yugam Sukhija</p>
              <p className="text-slate-400 text-sm">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="border-t border-white/10 pt-12 mt-12 mb-12 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
          <h4 className="text-xl font-bold text-white mb-2">Deploy WardenRe For Your Organization</h4>
          <p className="text-slate-400 mb-6">We are currently onboarding enterprise clients for our early-access rollout.</p>
          <div className="flex flex-col md:flex-row gap-8 text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-cyan-500/50 transition-colors">
              <span className="text-cyan-400">✉️</span> support@wardenre.com
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-cyan-500/50 transition-colors">
              <span className="text-cyan-400">📞</span> +1 (888) 390-9736
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
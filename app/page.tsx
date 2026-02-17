"use client";
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
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="/pricing" className="hover:text-white transition-colors">Enterprise</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
        </div>
        <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-slate-200 transition-all">
          Book Demo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <motion.div {...fadeIn}>
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-8 inline-block">
            Next-Gen Identity Defense
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            The Digital Fortress for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
              Modern Identities.
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop identity injection and deepfake fraud before they reach your infrastructure. 
            Automated legal takedowns and real-time perimeter protection.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
              View Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
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
    </div>
  );
}
// Refreshing build
// Vercel Root Force Build: Tue Feb 17 13:52:56 EST 2026

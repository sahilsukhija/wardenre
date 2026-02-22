"use client";
import React from 'react';
import { Check, Shield, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfessionalPricing() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans py-24 px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
        >
          Protection for <span className="text-slate-500">Every Scale.</span>
        </motion.h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          From individual creators to enterprise-level defense. Choose the perimeter that fits your digital footprint.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {[
          { name: "Creators", price: "29", icon: <Zap className="text-blue-400" />, features: ["Weekly Deepfake Scans", "Automated C&D Generation", "Social Media Monitoring"] },
          { name: "Executives", price: "99", icon: <Crown className="text-purple-400" />, features: ["Daily Identity Scans", "Global Takedown Service", "Priority Threat Alerts"], highlight: true },
          { name: "Enterprise", price: "Custom", icon: <Shield className="text-cyan-400" />, features: ["Real-time Dark Web Ops", "Direct Attorney Access", "API Integration"] }
        ].map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-[2.5rem] border ${plan.highlight ? 'border-cyan-500/50 bg-white/[0.03]' : 'border-white/10 bg-white/[0.01]'} backdrop-blur-xl flex flex-col`}
          >
            <div className="mb-8">{plan.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              {plan.price === "Custom" ? (
                <span className="text-4xl font-bold">Custom</span>
              ) : (
                <>
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </>
              )}
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-slate-400">
                  <Check size={16} className="text-cyan-500" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? 'bg-cyan-500 text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-white/5 hover:bg-white/10'}`}>
              {plan.price === "Custom" ? "Contact Sales" : "Select Plan"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Contact Footer */}
      <footer className="border-t border-white/10 pt-12 mt-12 text-center">
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

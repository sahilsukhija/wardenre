"use client";

import { useState } from 'react';

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    await fetch("https://formspree.io/f/mzdayaww", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 border border-green-500 rounded-lg text-center" style={{ backgroundColor: 'rgba(20, 83, 45, 0.2)' }}>
        <h3 className="text-xl font-bold text-green-400 mb-2">Access Request Secured.</h3>
        <p className="text-gray-300">Someone from our triage team will reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto w-full">
      <input 
        type="text" 
        name="name" 
        required 
        placeholder="Full Name" 
        className="px-4 py-3 bg-gray-900 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
      />
      <input 
        type="email" 
        name="email" 
        required 
        placeholder="Corporate or Preferred Email" 
        className="px-4 py-3 bg-gray-900 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
      />
      <input 
        type="tel" 
        name="phone" 
        required 
        placeholder="Phone Number" 
        className="px-4 py-3 bg-gray-900 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
      />
      <button 
        type="submit" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-colors"
      >
        Request Early Access
      </button>
    </form>
  );
}
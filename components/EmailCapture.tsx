'use client';

import { FormEvent, useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="email" className="py-32 px-6 bg-rg-black scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-rg-bone">
            Join the Movement
          </h2>
          <p className="text-lg text-rg-sunset">
            Get exclusive drops and updates delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 border border-rg-bone bg-rg-charcoal text-rg-bone text-sm focus:outline-none flex-1 sm:flex-none sm:w-64 placeholder:text-rg-mauve"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              {submitted ? 'Thank you' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

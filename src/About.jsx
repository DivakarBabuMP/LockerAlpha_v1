import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Locker</h1>
      <p>
        <strong>Locker</strong> is a privacy-first, no-signup file sharing platform that lets you securely share files and messages using a secret code.
        Everything you share is protected with <strong>AES-256 encryption</strong> for maximum security and confidentiality.
      </p>
      <p>
        Whether it's sensitive documents, private videos, or secret notes — Locker offers a simple, fast, and secure way to share them.
        No logins. No ads. No unnecessary steps.
      </p>
      <p>
        <strong>Coming soon:</strong> support for even larger file transfers!
      </p>
      <p>
        <strong>Locker exists because of your support.</strong> If you find it useful, consider donating — your contributions help us grow and keep Locker free forever.
      </p>
      <p>
        Built with transparency and user freedom in mind. Your privacy is your power.
      </p>
      <hr />
      <p>
        <strong>License:</strong> This project is licensed under the <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank" rel="noopener noreferrer">Mozilla Public License 2.0</a>.
      </p>
    </div>
  );
}

export default About;

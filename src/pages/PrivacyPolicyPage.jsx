import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck, Eye, Lock, Server, Mail, Phone, MapPin,
  ChevronRight, ChevronDown, Users, Cookie, RefreshCw, AlertTriangle
} from 'lucide-react'

const SECTIONS = [
  {
    id: 'information-collect',
    icon: <Users className="h-5 w-5 text-[#F01B1D]" />,
    title: '1. Information We Collect',
    content: `When you visit Fast Computers or place an order, we may collect the following types of information:

**Personal Information:**
- Full name, email address, phone number, and delivery address
- Payment details (processed securely via third-party gateways — we do not store card numbers)
- Account credentials if you register an account with us

**Usage & Technical Data:**
- IP address, browser type, operating system, and device information
- Pages visited, time spent on site, and referring URLs
- Cookies and similar tracking technologies (see Cookie Policy section)

**Communications:**
- Messages and inquiries submitted through our contact form or email
- Order-related communications and customer support history`
  },
  {
    id: 'how-we-use',
    icon: <Eye className="h-5 w-5 text-[#F01B1D]" />,
    title: '2. How We Use Your Information',
    content: `Fast Computers uses your information solely to provide and improve our services:

- **Order Fulfillment:** Processing purchases, arranging delivery, and sending order confirmations
- **Customer Support:** Responding to inquiries, returns, and warranty claims
- **Account Management:** Creating and managing your customer account
- **Marketing (with consent):** Sending promotional emails and offers — you may opt out at any time
- **Analytics:** Understanding how users interact with our website to improve performance and user experience
- **Legal Compliance:** Meeting obligations under Pakistani law and protecting against fraud

We do **not** sell, rent, or trade your personal data to third parties for their marketing purposes.`
  },
  {
    id: 'data-sharing',
    icon: <Server className="h-5 w-5 text-[#F01B1D]" />,
    title: '3. Data Sharing & Third Parties',
    content: `We may share your information with trusted partners strictly for operational purposes:

- **Delivery Partners:** Courier services require your name and address to deliver orders
- **Payment Processors:** Secure payment gateways process transactions on our behalf
- **Analytics Providers:** Tools like Google Analytics help us understand website traffic (anonymised data)
- **Legal Authorities:** We may disclose data if required by law, court order, or government authority in Pakistan

All third parties are contractually obligated to handle your data securely and only for the specified purpose.`
  },
  {
    id: 'data-security',
    icon: <Lock className="h-5 w-5 text-[#F01B1D]" />,
    title: '4. Data Security',
    content: `We take your privacy and security seriously and implement industry-standard measures:

- **SSL Encryption:** All data transmitted between your browser and our servers is encrypted using SSL/TLS
- **Secure Servers:** Customer data is stored on protected servers with restricted access
- **Access Controls:** Only authorised Fast Computers personnel can access customer data, and only when necessary
- **Regular Audits:** Our systems and practices are periodically reviewed for security vulnerabilities

While we implement strong safeguards, no method of transmission over the Internet is 100% secure. We encourage you to use strong, unique passwords for your account.`
  },
  {
    id: 'cookies',
    icon: <Cookie className="h-5 w-5 text-[#F01B1D]" />,
    title: '5. Cookies & Tracking',
    content: `Fast Computers uses cookies and similar technologies to enhance your browsing experience:

**Types of Cookies We Use:**
- **Essential Cookies:** Required for the website to function (shopping cart, login sessions)
- **Analytics Cookies:** Help us understand user behaviour to improve our site (can be disabled)
- **Preference Cookies:** Remember your settings and preferences for future visits

**Your Choices:**
You can control cookies through your browser settings. Disabling cookies may affect certain features of our website (e.g., the shopping cart may not work as expected).

We do not use cookies to track you across unrelated third-party websites.`
  },
  {
    id: 'your-rights',
    icon: <ShieldCheck className="h-5 w-5 text-[#F01B1D]" />,
    title: '6. Your Rights',
    content: `As a customer of Fast Computers, you have the following rights regarding your personal data:

- **Access:** Request a copy of the personal information we hold about you
- **Correction:** Ask us to correct inaccurate or incomplete information
- **Deletion:** Request that we delete your personal data (subject to legal obligations)
- **Opt-Out:** Unsubscribe from marketing communications at any time via the link in any email
- **Data Portability:** Request your data in a structured, machine-readable format

To exercise any of these rights, contact us at **privacy@fastcomputers.pk** or visit our store in person.`
  },
  {
    id: 'data-retention',
    icon: <RefreshCw className="h-5 w-5 text-[#F01B1D]" />,
    title: '7. Data Retention',
    content: `We retain your personal data only as long as necessary for the purposes outlined in this policy:

- **Order Data:** Retained for 7 years for accounting and legal compliance
- **Account Data:** Retained while your account is active; deleted upon request after account closure
- **Marketing Data:** Retained until you opt out or request deletion
- **Support Records:** Retained for 2 years after the last interaction

After the retention period, data is securely deleted or anonymised.`
  },
  {
    id: 'policy-changes',
    icon: <AlertTriangle className="h-5 w-5 text-[#F01B1D]" />,
    title: '8. Changes to This Policy',
    content: `Fast Computers reserves the right to update this Privacy Policy at any time. When we make significant changes:

- The "Last Updated" date at the top of this page will be revised
- We will notify registered users via email for material changes
- Continued use of our website after changes constitutes acceptance of the updated policy

We encourage you to review this policy periodically to stay informed about how we protect your information.`
  },
]

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <motion.div
      className={`border rounded-lg overflow-hidden transition-colors ${isOpen ? 'border-[#F01B1D]/40 shadow-sm' : 'border-gray-200'}`}
      layout
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <span className="shrink-0">{section.icon}</span>
          <span className={`font-semibold text-sm font-heading uppercase tracking-wide transition-colors ${isOpen ? 'text-[#F01B1D]' : 'text-gray-900 group-hover:text-[#F01B1D]'}`}>
            {section.title}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 shrink-0 ml-4"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-100">
          <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {section.content.split('\n').map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-bold text-gray-800 mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>
              }
              if (line.startsWith('- **')) {
                const boldEnd = line.indexOf(':**')
                const bold = line.slice(4, boldEnd)
                const rest = line.slice(boldEnd + 3)
                return (
                  <p key={i} className="flex items-start gap-2 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F01B1D] mt-2 shrink-0" />
                    <span><strong className="text-gray-800">{bold}:</strong>{rest}</span>
                  </p>
                )
              }
              if (line.startsWith('- ')) {
                return (
                  <p key={i} className="flex items-start gap-2 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                    <span>{line.slice(2)}</span>
                  </p>
                )
              }
              if (line.trim() === '') return <div key={i} className="h-2" />
              return <p key={i} className="mt-1.5">{line}</p>
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function PrivacyPolicyPage({ setActivePage }) {
  const [openSection, setOpenSection] = useState('information-collect')
  const lastUpdated = 'July 5, 2026'

  const toggle = (id) => setOpenSection(prev => prev === id ? null : id)

  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      {/* Page Header */}
      <div className="bg-black text-white py-14 px-4 relative overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(240,27,29,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(240,27,29,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-5">
            <button onClick={() => setActivePage('Home')} className="hover:text-[#F01B1D] transition-colors cursor-pointer">Home</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Privacy Policy</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#F01B1D]/10 border border-[#F01B1D]/30 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-[#F01B1D]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-wider">
                Privacy <span className="text-[#F01B1D]">Policy</span>
              </h1>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Fast Computers · Pakistan</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
            Your privacy matters to us. This policy explains what data we collect, how we use it, and the rights you have over your personal information when you shop with Fast Computers.
          </p>
          <p className="text-[#F01B1D] text-xs font-semibold mt-3 uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">

        {/* Intro banner */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#F01B1D]/10 border border-[#F01B1D]/20 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="h-5 w-5 text-[#F01B1D]" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-sm mb-1.5">Our Commitment to Your Privacy</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Fast Computers is committed to protecting and respecting your privacy. This Privacy Policy applies to all information collected through our website (<span className="text-[#F01B1D] font-semibold">fastcomputers.pk</span>), physical store, and any communications between you and us. By using our services, you agree to the terms of this policy.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              This policy applies to all customers, visitors, and users of Fast Computers services in Pakistan.
            </p>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-sm font-bold font-heading uppercase tracking-wider text-gray-900 border-l-4 border-[#F01B1D] pl-3 mb-2">
            Policy Details
          </h2>
          {SECTIONS.map(section => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openSection === section.id}
              onToggle={() => toggle(section.id)}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-800">
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
              Privacy Inquiries & Contact
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Have questions about this policy or your data? Reach out to us.
            </p>
          </div>
          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: <Mail className="h-4 w-4 text-[#F01B1D]" />,
                label: 'Email Us',
                value: 'privacy@fastcomputers.pk',
                sub: 'We respond within 48 hours'
              },
              {
                icon: <Phone className="h-4 w-4 text-[#F01B1D]" />,
                label: 'Call Us',
                value: '+92 (300) 123-4567',
                sub: 'Mon–Sat, 11 AM – 9 PM'
              },
              {
                icon: <MapPin className="h-4 w-4 text-[#F01B1D]" />,
                label: 'Visit Us',
                value: 'Plaza 45-B, DHA Phase 3',
                sub: 'Lahore, Pakistan'
              },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-[#F01B1D]/10 border border-[#F01B1D]/20 flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{c.label}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{c.value}</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Fast Computers. All rights reserved. &nbsp;|&nbsp;
          <button onClick={() => setActivePage('ContactUs')} className="text-[#F01B1D] hover:underline cursor-pointer">Contact Us</button>
          &nbsp;|&nbsp; Lahore, Pakistan
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage

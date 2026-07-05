import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

function ContactUsPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission success
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      
      {/* Breadcrumbs */}
      <div className="mb-8">
        <span className="text-xs text-gray-500 font-medium">
          Home / <span className="text-gray-900 font-bold">Contact Us</span>
        </span>
        <h1 className="text-2xl font-bold uppercase tracking-wider text-black font-heading mt-2">
          Contact Us
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left Side: Contact Information (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-gray-200 rounded p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900 font-heading border-b border-gray-100 pb-3 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: 'Physical Store', val: 'Plaza 45-B, Sector XX, Phase 3, DHA, Lahore, Pakistan.' },
                { icon: Phone, label: 'Helpline & WhatsApp', val: '+92 (300) 123-4567' },
                { icon: Mail, label: 'General & Support Email', val: 'support@fastcomputers.pk' },
                { icon: Clock, label: 'Working Business Hours', val: 'Monday - Saturday: 11:00 AM - 9:00 PM' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-9 h-9 rounded bg-red-50 flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                    <item.icon className="h-4.5 w-4.5 text-[#F01B1D]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-0.5">{item.label}</span>
                    <span className="text-xs text-gray-700 leading-relaxed font-semibold">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Store Location Map Placeholder */}
          <div className="bg-white border border-gray-200 rounded p-4 shadow-sm flex flex-col justify-between aspect-[16/10] overflow-hidden">
            <div className="w-full h-full bg-gray-100 rounded border border-gray-200 flex flex-col items-center justify-center text-center p-4 relative">
              {/* Map mockup */}
              <MapPin className="h-8 w-8 text-[#F01B1D] mb-2 animate-bounce" />
              <span className="text-xs font-bold text-gray-900 font-heading uppercase mb-1">Lahore Store Location</span>
              <p className="text-[10px] text-gray-500 max-w-xs leading-normal">
                Visit our physical store to test monitors, keyboards, mice, and check prebuilt rigs before purchase.
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-black/5 py-1 text-center text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
                Google Maps Navigation API (Mock)
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded p-6 md:p-8 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900 font-heading border-b border-gray-100 pb-3 mb-6">
              Send us a Message
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mb-3" />
                <h3 className="font-bold text-sm uppercase font-heading mb-1">Message Sent Successfully!</h3>
                <p className="text-xs text-emerald-600 leading-normal max-w-xs">
                  Thank you for reaching out to Fast Computers. One of our support engineers will review your request and reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Your Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Ali Raza" 
                      className="w-full bg-gray-50 text-xs px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#F01B1D] text-gray-800"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. ali@example.com" 
                      className="w-full bg-gray-50 text-xs px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#F01B1D] text-gray-800"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Quote for custom gaming PC" 
                    className="w-full bg-gray-50 text-xs px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#F01B1D] text-gray-800"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Your Message</label>
                  <textarea 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Type details of your build or query here..." 
                    className="w-full bg-gray-50 text-xs px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#F01B1D] text-gray-800 resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-11 bg-[#F01B1D] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  )
}

export default ContactUsPage

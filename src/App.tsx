import { useState } from 'react'

const PHONE = '(978) 555-0199'
const PHONE_HREF = 'tel:+19785550199'

const services = [
  {
    icon: '🚿',
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, major leaks, or flooding — we respond fast 24/7, any day of the year.',
  },
  {
    icon: '🚽',
    title: 'Drain Cleaning',
    desc: 'Clogged drains cleared completely. Kitchen, bath, main line — no clog too stubborn.',
  },
  {
    icon: '🔧',
    title: 'Pipe Repair & Replacement',
    desc: 'Corroded, cracked, or leaking pipes repaired right — with materials built to last.',
  },
  {
    icon: '🌡️',
    title: 'Water Heater Services',
    desc: 'Installation, repair, and replacement of tank and tankless water heaters.',
  },
  {
    icon: '🏠',
    title: 'Bathroom & Kitchen Remodel',
    desc: 'New fixtures, full rough-in, and finish plumbing for renovations big and small.',
  },
  {
    icon: '💧',
    title: 'Leak Detection',
    desc: 'Advanced leak detection stops hidden water damage before it becomes a disaster.',
  },
  {
    icon: '🔥',
    title: 'Heating & Boiler Service',
    desc: 'Boiler installation, repair, and annual tune-ups to keep your home warm all winter.',
  },
  {
    icon: '🏗️',
    title: 'New Construction',
    desc: 'Full plumbing rough-in and finish work for residential new builds across MA.',
  },
]

const areas = [
  'Lowell', 'Chelmsford', 'Billerica', 'Tewksbury', 'Dracut',
  'Methuen', 'Lawrence', 'Haverhill', 'Andover', 'Wilmington',
  'Tyngsborough', 'Westford', 'Littleton', 'Ayer', 'Groton',
]

const reviews = [
  {
    name: 'Maria S.',
    location: 'Lowell, MA',
    stars: 5,
    text: 'Called at 11 PM for a burst pipe and they were at my door within 45 minutes. Saved my basement. Absolute lifesavers — highly recommend!',
  },
  {
    name: 'James T.',
    location: 'Chelmsford, MA',
    stars: 5,
    text: 'Very professional, explained everything before starting, and the price was fair. My water heater install was done in half a day. Will use again.',
  },
  {
    name: 'Priya K.',
    location: 'Tewksbury, MA',
    stars: 5,
    text: 'Fixed a slow drain that two other plumbers couldn\'t solve. Thorough, clean, and honest. This is our go-to plumber from now on.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent-500">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [formState, setFormState] = useState<FormState>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => setFormState('sent'), 1200)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* Top bar */}
      <div className="bg-brand-700 text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="hidden sm:block">Licensed & Insured · MA License #12345 · Serving Greater Lowell Since 2001</span>
          <a href={PHONE_HREF} className="font-bold text-accent-400 hover:text-accent-300 flex items-center gap-1.5 ml-auto">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            {PHONE}
          </a>
        </div>
      </div>

      {/* Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
            </svg>
            <div>
              <div className="font-extrabold text-brand-700 text-lg leading-tight">Lowell Plumbing</div>
              <div className="text-xs text-gray-500 leading-tight">&amp; Heating</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-brand-600">Services</a>
            <a href="#about" className="hover:text-brand-600">About</a>
            <a href="#reviews" className="hover:text-brand-600">Reviews</a>
            <a href="#areas" className="hover:text-brand-600">Service Areas</a>
            <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#areas" onClick={() => setMenuOpen(false)}>Service Areas</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-accent-500 text-white px-4 py-2 rounded-lg font-semibold text-center">
              Get a Quote
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"/>
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-accent-400 rounded-full blur-3xl"/>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
              Available 24/7 · Same-Day Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Lowell's Most<br/>
              <span className="text-accent-400">Trusted Plumbers</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              Licensed plumbing &amp; heating experts serving Lowell and Greater Lowell, MA since 2001. From emergency repairs to full remodels — done right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={PHONE_HREF}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call {PHONE}
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors flex items-center justify-center"
              >
                Free Quote
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                No Hidden Fees
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Satisfaction Guaranteed
              </div>
            </div>
          </div>

          {/* Hero stats card */}
          <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 grid grid-cols-2 gap-6 text-center w-full md:w-72">
            {[
              { value: '23+', label: 'Years in Lowell' },
              { value: '5,000+', label: 'Jobs Completed' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '24/7', label: 'Emergency Line' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-accent-400">{s.value}</div>
                <div className="text-sm text-blue-100 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 font-medium">
          {[
            '✅ MA Master Plumber License',
            '✅ Fully Bonded & Insured',
            '✅ Free Estimates',
            '✅ Upfront Flat-Rate Pricing',
            '✅ 1-Year Labor Warranty',
          ].map(t => <span key={t}>{t}</span>)}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our Plumbing Services</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From a dripping faucet to a full home repipe — we handle every job with the same care and craftsmanship.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div
                key={s.title}
                className="bg-gray-50 hover:bg-brand-50 border border-gray-100 hover:border-brand-200 rounded-2xl p-6 transition-all group"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-700">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#contact" className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              Request a Service Call
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-brand-700 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
              Lowell's Plumber —<br/><span className="text-accent-400">Family-Owned Since 2001</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              We started Lowell Plumbing &amp; Heating right here in the Merrimack Valley, and we've been keeping homes and businesses running ever since. As a local family business, our reputation is everything — and we earn it job by job.
            </p>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Every technician on our team is background-checked, factory-trained, and holds a current MA plumber's license. We give you a written estimate before we start, and our price never changes once you approve it.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Master Plumber', detail: 'MA License #12345' },
                { label: 'BBB Accredited', detail: 'A+ Rating' },
                { label: 'Fully Insured', detail: '$2M Liability' },
                { label: 'Warranty', detail: '1-Year on All Labor' },
              ].map(i => (
                <div key={i.label} className="bg-white/10 rounded-xl p-4">
                  <div className="font-bold text-accent-400">{i.label}</div>
                  <div className="text-sm text-blue-100 mt-0.5">{i.detail}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 bg-white/10 backdrop-blur rounded-2xl p-8 text-center w-full md:w-72">
            <div className="text-6xl mb-4">🔧</div>
            <div className="text-2xl font-extrabold mb-2">Need Help Now?</div>
            <p className="text-blue-100 text-sm mb-6">Our emergency line is answered by a real plumber — not a call center.</p>
            <a
              href={PHONE_HREF}
              className="block bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <StarRating count={5} />
              <span className="font-semibold text-gray-700">4.9 out of 5</span>
              <span>· 300+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <StarRating count={r.stars} />
                <p className="text-gray-700 mt-3 mb-4 leading-relaxed">"{r.text}"</p>
                <div className="font-semibold text-gray-900">{r.name}</div>
                <div className="text-sm text-gray-400">{r.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Service Areas</h2>
            <p className="text-gray-500 text-lg">Proudly serving Lowell and the Greater Merrimack Valley area in Massachusetts.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map(a => (
              <span
                key={a}
                className={`px-5 py-2 rounded-full text-sm font-semibold border ${
                  a === 'Lowell'
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-colors'
                }`}
              >
                {a}{a === 'Lowell' ? ' ★' : ''}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Not sure if we cover your area? Call us — we likely do.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Get a Free Quote</h2>
            <p className="text-gray-500 text-lg">Fill out the form and we'll get back to you within 2 hours during business hours.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            {formState === 'sent' ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">We got your request!</h3>
                <p className="text-gray-500">Someone from our team will call or text you within 2 hours. For emergencies, call us directly at <a href={PHONE_HREF} className="text-brand-600 font-semibold">{PHONE}</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(978) 555-0100"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Type of Service *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Describe the Issue</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's happening — as much detail as you can..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition-colors"
                >
                  {formState === 'sending' ? 'Sending…' : 'Send My Request'}
                </button>
                <p className="text-center text-gray-400 text-xs">
                  For emergencies, skip the form and call us directly at <a href={PHONE_HREF} className="text-brand-600 font-medium">{PHONE}</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="font-extrabold text-xl mb-2">Lowell Plumbing &amp; Heating</div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Licensed, bonded, and insured plumbing &amp; heating services for Lowell, MA and the Greater Merrimack Valley.
            </p>
          </div>
          <div>
            <div className="font-bold mb-3 text-accent-400">Contact</div>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href={PHONE_HREF} className="hover:text-white">{PHONE}</a></li>
              <li>info@lowellplumbing.com</li>
              <li>123 Market St, Lowell, MA 01852</li>
              <li className="pt-1">Mon–Fri 7am–7pm · Sat 8am–4pm<br/>Emergency: 24/7</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-3 text-accent-400">Services</div>
            <ul className="space-y-1 text-blue-200 text-sm">
              {services.slice(0, 6).map(s => <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 border-t border-white/10 mt-10 pt-6 text-center text-blue-300 text-xs">
          © {new Date().getFullYear()} Lowell Plumbing &amp; Heating. All rights reserved. · MA Master Plumber License #12345
        </div>
      </footer>
    </div>
  )
}

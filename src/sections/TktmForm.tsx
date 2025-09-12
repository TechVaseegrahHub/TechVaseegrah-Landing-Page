
"use client"
import { useState, useRef, FormEvent, ChangeEvent } from 'react'
import emailjs from '@emailjs/browser'

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const ContactInfoItem = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: React.ReactNode }) => (
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="flex-shrink-0 mt-1 p-1.5 sm:p-2 bg-green-100 rounded-full">{icon}</div>
    <div>
      <h3 className="text-base sm:text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{value}</p>
    </div>
  </div>
)

const StatusMessage = ({ status }: { status: Exclude<FormStatus, 'idle' | 'submitting'> }) => {
  const config = {
    success: {
      className: 'bg-green-50 text-green-700',
      message: 'உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! விரைவில் உங்களை தொடர்பு கொள்கிறோம்.'
    },
    error: {
      className: 'bg-red-50 text-red-700',
      message: 'ஏதோ தவறு நடந்துவிட்டது. மீண்டும் முயற்சிக்கவும்.'
    }
  }

  return (
    <div className={`p-3 sm:p-4 rounded-lg text-center text-xs sm:text-sm ${config[status].className}`}>
      {config[status].message}
    </div>
  )
}

const FormField = ({
  id,
  label,
  required,
  type = 'text',
  value,
  onChange,
  rows
}: {
  id: keyof FormData
  label: string
  required?: boolean
  type?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  rows?: number
}) => (
  <div>
    <label htmlFor={id} className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={`user_${id}`}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={`user_${id}`}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 transition"
      />
    )}
  </div>
)

export default function TholKoduppomContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const form = useRef<HTMLFormElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const field = name.replace('user_', '') as keyof FormData
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      await emailjs.sendForm('service_n9jpa8v', 'template_tnc6ckm', form.current!, {
        publicKey: 'VkvBxQ3RnOgrj4gE3'
      })

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div className="lg:w-1/2 lg:pr-6 xl:pr-8">
          <div className="mb-6 sm:mb-8 mt-8 sm:mt-12 lg:mt-24">
           <p className="tag mb-4 sm:mb-6 text-base sm:text-lg text-green-700 font-semibold">தொடர்பு கொள்ளுங்கள்</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mb-3 sm:mb-4">
            <span className="text-black">தோள் கொடுப்போம்</span>{' '}
            <span className="text-green-600">தொழில் முனைந்திட</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-body leading-relaxed">
            தொழில் முனைவோராக உயர பறக்க விரும்புகிறீர்களா?  உங்கள் பயணத்தில் வழிகாட்டிட உங்கள் கனவுகளை நிஜமாக்கிட நாங்கள் இருக்கிறோம்.
             உங்கள் எண்ணங்களை பகிருங்கள் – நாங்கள் உங்களுக்கு துணை நிற்போம்
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <ContactInfoItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>}
              title="மின்னஞ்சல்"
              value={<a href="mailto:techvaseegrah@gmail.com" className="text-green-600 hover:underline">techvaseegrah@gmail.com</a>}
            />
            <ContactInfoItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>}
              title="தொலைபேசி"
              value={<a href="tel:+918524089733" className="text-green-600 hover:underline">+91 85240 89733</a>}
            />
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {status === 'success' && <StatusMessage status="success" />}
              {status === 'error' && <StatusMessage status="error" />}

            <div className="grid grid-cols-1 gap-4 sm:gap-5">
              <FormField id="name" label="பெயர் (Your Name)" required value={formData.name} onChange={handleChange} />
              <FormField id="email" label="மின்னஞ்சல் (Your Email)" type="email" required value={formData.email} onChange={handleChange} />
              <FormField id="phone" label="கைபேசி எண் (Mobile No)" value={formData.phone} onChange={handleChange} />
              <FormField id="message" label="செய்தி (Your Message)" type="textarea" required rows={4} value={formData.message} onChange={handleChange} />
`           </div>


              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-white font-medium text-sm sm:text-base transition-all ${
                  status === 'submitting' ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:shadow-md'
                }`}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    அனுப்பப்படுகிறது...
                  </span>
                ) : (
                  'செய்தியை அனுப்பவும் (Send Form)'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

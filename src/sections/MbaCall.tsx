import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactInfoItem = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: React.ReactNode }) => (
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="flex-shrink-0 mt-1 p-1.5 sm:p-2 bg-blue-100 rounded-full">{icon}</div>
    <div>
      <h3 className="text-base sm:text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{value}</p>
    </div>
  </div>
);

const StatusMessage = ({ status }: { status: Exclude<FormStatus, 'idle' | 'submitting'> }) => {
  const config = {
    success: {
      className: 'bg-green-50 text-green-700',
      message: "Your message has been sent successfully! We'll get back to you soon."
    },
    error: {
      className: 'bg-red-50 text-red-700',
      message: 'Something went wrong. Please try again later.'
    }
  };

  return (
    <div className={`p-3 sm:p-4 rounded-lg text-center text-xs sm:text-sm ${config[status].className}`}>
      {config[status].message}
    </div>
  );
};

const FormField = ({
  id,
  label,
  required,
  type = 'text',
  value,
  onChange,
  rows
}: {
  id: keyof FormData;
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rows?: number;
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
        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={`user_${id}`}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    )}
  </div>
);

export default function SplitContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name.replace('user_', '') as keyof FormData;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.sendForm('service_n9jpa8v', 'template_tnc6ckm', form.current!, {
        publicKey: 'VkvBxQ3RnOgrj4gE3'
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div className="lg:w-1/2 lg:pr-6 xl:pr-8">
          <div className="mb-6 sm:mb-8 mt-8 sm:mt-12 lg:mt-24">
            <p className="tag mb-4 sm:mb-6 text-sm sm:text-base">Get Started</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-3 sm:mb-4">
              Connect with Our Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#010D3E] leading-relaxed">
              Pursuing an MBA and seeking impactful internship opportunities? Fill out the form and we&apos;ll get back to you within 24 hours to explore how you can contribute and grow with us.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
          <ContactInfoItem
          icon={
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  }
  title="Email us"
  value={
    <a href="mailto:techvaseegrah@gmail.com" className="text-blue-600 hover:underline">
      techvaseegrah@gmail.com
    </a>
  }
  />
           <ContactInfoItem
  icon={
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  }
  title="Call us"
  value={
    <a href="tel:+918524089733" className="text-blue-600 hover:underline">
      +91 85240 89733
    </a>
  }
/>

<ContactInfoItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-whatsapp h-4 w-4 sm:h-5 sm:w-5 text-green-600">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              }
              title="WhatsApp"
              value={
                <a
                  href="https://wa.me/918524089733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              }
            />

          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {status === 'success' && <StatusMessage status="success" />}
              {status === 'error' && <StatusMessage status="error" />}

              <div className="grid grid-cols-1 gap-4 sm:gap-5">
                <FormField id="name" label="Your Name" required value={formData.name} onChange={handleChange} />
                <FormField id="email" label="Email Address" type="email" required value={formData.email} onChange={handleChange} />
                <FormField id="phone" label="Phone Number" value={formData.phone} onChange={handleChange} />
                <FormField id="message" label="Your Message" type="textarea" required rows={4} value={formData.message} onChange={handleChange} />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-white font-medium text-sm sm:text-base transition-all ${
                  status === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-black hover:shadow-md'
                }`}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

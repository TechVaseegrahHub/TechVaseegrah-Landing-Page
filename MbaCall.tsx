import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  dob: string;
  gender: string;
  college: string;
  regno: string;
  degree: string;
  altphone: string;
  email: string;
  phone: string;
  year: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type FormFieldProps = {
  id: keyof FormData;
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormField = ({ id, label, required = false, type = 'text', value, onChange }: FormFieldProps) => (
  <div className="col-span-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    dob: '',
    gender: '',
    college: '',
    regno: '',
    degree: '',
    altphone: '',
    email: '',
    phone: '',
    year: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.sendForm(
        'service_n9jpa8v',
        'template_tnc66km',
        formRef.current!,
        'Vkxv8xQ3Rn0grJ4gE3'
      );
      setFormData({
        name: '',
        dob: '',
        gender: '',
        college: '',
        regno: '',
        degree: '',
        altphone: '',
        email: '',
        phone: '',
        year: '',
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Internship Application
      </h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField id="name" label="Full Name" required value={formData.name} onChange={handleChange} />
          <FormField id="dob" label="Date of Birth" type="date" required value={formData.dob} onChange={handleChange} />

          {/* Gender Radio Buttons */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {['male', 'female', 'other'].map((option) => (
                <label key={option} className="flex items-center gap-1.5 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleChange}
                    required
                  />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <FormField id="college" label="College Name" required value={formData.college} onChange={handleChange} />
          <FormField id="degree" label="Degree & Major" required value={formData.degree} onChange={handleChange} />
          <FormField id="regno" label="Registration Number" required value={formData.regno} onChange={handleChange} />
          <FormField id="phone" label="Phone Number" type="tel" required value={formData.phone} onChange={handleChange} />
          <FormField id="email" label="Email" type="email" required value={formData.email} onChange={handleChange} />
          <FormField id="altphone" label="Alternative Contact Number" type="tel" required value={formData.altphone} onChange={handleChange} />
          <FormField id="year" label="Year of Study" type="number" required value={formData.year} onChange={handleChange} />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`mt-6 w-full py-3 rounded-lg text-white font-semibold ${
            status === 'submitting' ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-4 text-sm text-center">Form submitted successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4 text-sm text-center">Submission failed. Please try again.</p>
        )}
      </form>
    </div>
  );
}
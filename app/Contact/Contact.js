import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
    service: '',
  });

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'SEO Optimization',
    'Other',
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
    // You can later connect this with an API route or external service
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-3 border rounded-md"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-3 border rounded-md"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border rounded-md col-span-1 md:col-span-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            className="p-3 border rounded-md col-span-1 md:col-span-2"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            className="p-3 border rounded-md col-span-1 md:col-span-2"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a service</option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>{service}</option>
            ))}
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="p-3 border rounded-md col-span-1 md:col-span-2"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-md col-span-1 md:col-span-2 hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

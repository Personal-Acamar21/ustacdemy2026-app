import React, { useState } from 'react';
import Button from '../components/Button';

export default function Sponsors() {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add partnership inquiry submission logic here
    console.log('Partnership inquiry:', formData);
    setShowPartnershipModal(false);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Sponsors</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="h-32 flex items-center justify-center">
            {/* Placeholder for sponsor logo */}
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          </div>
          <h2 className="text-xl font-bold mt-4">Sponsor Name</h2>
          <p className="text-gray-600 mt-2">Official Equipment Partner</p>
        </div>
        {/* Add more sponsor cards as needed */}
      </div>
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
        <p className="text-gray-600 mb-6">
          Join our mission to develop the next generation of soccer talent.
          Partner with UST Academy and make a difference in youth sports.
        </p>
        <Button
          onClick={() => setShowPartnershipModal(true)}
          className="bg-[#00FF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
        >
          Partnership Opportunities
        </Button>
      </div>

      {/* Partnership Modal */}
      {showPartnershipModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Partnership Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  onClick={() => setShowPartnershipModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
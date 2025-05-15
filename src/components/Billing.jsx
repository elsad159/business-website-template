import React, { useState } from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import { call, slide3 } from '../assets';
import { FiHome, FiCreditCard, FiUser, FiBriefcase, FiPhone } from "react-icons/fi";
import Button from './Button';

const Billing = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    voen: '',
    fullName: '',
    position: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      console.log('Submitted data:', formData);
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={slide3}
          alt='billing'
          className='w-[100%] rounded-xl relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white ">
              Distribütor şirkətlər üçün xidmətə qoşulmaq üçün  <span className="text-gradient">easy </span> müraciət
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5 w-full">
              {/** inputs with icons **/}
              <div className="relative">
                <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Şirkətin adı"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 p-4 rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  disabled={loading}
                />
              </div>

              <div className="relative">
                <FiCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type="text"
                  name="voen"
                  placeholder="Şirkətin VÖENİ"
                  value={formData.voen}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 p-4 rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  disabled={loading}
                />
              </div>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Müraciət edən şəxsin adı və familiyası"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 p-4 rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  disabled={loading}
                />
              </div>

              <div className="relative">
                <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type="text"
                  name="position"
                  placeholder="Müraciət edən şəxsin vəzifəsi"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 p-4 rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  disabled={loading}
                />
              </div>

              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Müraciət edən şəxsin əlaqə nömrəsi"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 p-4 rounded-xl bg-gray-900 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  disabled={loading}
                />
              </div>

              <div className="w-full rounded-xl p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold bg-black text-white hover:bg-gray-900 transition-all duration-300 flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      <span className="text-gradient mr-2">Easy</span> müraciət et
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex justify-center items-center h-full w-full flex-col">
            <img
              src={call}
              alt="Thank you"
              className="w-[50%] rounded-lg shadow-lg"
            />
            <Button />
          </div>
        )}
      </div>
    </section>
  );
};

export default Billing;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { logo, marsLogo } from '../assets';
import { FiHome, FiCreditCard, FiUser, FiBriefcase, FiPhone } from "react-icons/fi";
import AppStoreBanner from '../components/AppStoreBanner';
import Footer from '../components/Footer';

const PartnersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    voen: '',
    fullName: '',
    position: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const trimmedFullName = (formData.fullName || '').trim();
      const [firstName, ...restNames] = trimmedFullName.split(/\s+/);
      const lastName = restNames.join(' ');

      const payload = {
        companyName: formData.companyName,
        companyTin: formData.voen,
        userName: firstName || '',
        userSurname: lastName || '',
        userPosition: formData.position,
        userPhone: formData.phone,
      };

      const response = await fetch('https://back-easy-prod-apis.site/easy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let message = `Request failed (${response.status})`;
        try {
          const data = await response.json();
          if (data && (data.message || data.error)) {
            message = data.message || data.error;
          }
        } catch (_) {
          // ignore JSON parse errors and keep default message
        }
        throw new Error(message);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err?.message || 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSubmitted(false);
    setError(null);
    setFormData({
      companyName: '',
      voen: '',
      fullName: '',
      position: '',
      phone: ''
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
    setError(null);
  };

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <AppStoreBanner />
      
      {/* Navigation Header */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className='w-full flex py-6 justify-between items-center navbar'>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Easy Business loqosu" className="w-[50px] h-[50px] mx-4" />
              <h1 className="flex-1 font-poppins font-semibold text-[22px] ss:text-[35px] text-white leading-[32px] ss:leading-[48px]">
                <span className="text-gradient">Easy </span>Business
              </h1>
            </Link>
            <Link 
              to="/" 
              className="font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-gray-300 transition-colors"
            >
              ← Geri qayıt
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className={`${styles.paddingY}`}>
            <div className="w-full">
              <h2 className={styles.heading2}>
                <span className="text-gradient">Partnerlarımız</span>
              </h2>
              <p className={`${styles.paragraph} mt-5`}>
                <span className="text-gradient">Easy Business</span> platforması müxtəlif sahələrdə fəaliyyət göstərən 
                etibarlı və təcrübəli partnyorlarımızla əməkdaşlıq edir. Bu partnyorlarımız bizim xidmətlərimizin 
                keyfiyyətini və etibarlığını təmin edir.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    <span className="text-gradient">Əsas Partnyorlar</span>
                  </h3>
                  
                  <div className="flex justify-start gap-6">
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-600 max-w-md">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                          <img 
                            src={marsLogo} 
                            alt="Mars Overseas Logo" 
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <h4 className="text-2xl font-semibold text-white mb-4">Mars Overseas</h4>
                        <p className="text-gray-400 text-base leading-relaxed">
                          Qida və içki məhsulları sahəsində aparıcı şirkət. Distribütor şəbəkəsinin genişləndirilməsində mühüm rol oynayır. 
                          Keyfiyyətli məhsulların distribüsiyasında etibarlı partnyorluq münasibətləri qurur.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-600 max-w-md">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg">
                          <span className="text-white font-bold text-2xl">+</span>
                        </div>
                        <h4 className="text-2xl font-semibold text-white mb-4">Partner ol</h4>
                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                          Easy Business platformasına qoşulun və biznesinizi rəqəmsal dünyaya aparın. 
                          Etibarlı partnyorluq münasibətləri və geniş imkanlar sizi gözləyir.
                        </p>
                        <button 
                          onClick={openModal}
                          className="w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          Müraciət et
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    <span className="text-gradient">Partnyorluq Üstünlükləri</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Üzləşmələrin Asanlaşdırılması</h4>
                          <p className="text-gray-400 text-sm">Rəqəmsal platforma vasitəsilə üzləşmə proseslərinin tam avtomatlaşdırılması və sadələşdirilməsi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Canlı Dəstək Xidməti</h4>
                          <p className="text-gray-400 text-sm">24/7 canlı dəstək və texniki yardım xidməti ilə istənilən vaxt kömək alın</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Borcların Gələcəyinin Göstərilməsi</h4>
                          <p className="text-gray-400 text-sm">Gələcək ödənişlərin və borc balanslarının proqnozlaşdırılması və planlaşdırılması</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Müştəri Borcu və Kredit Limiti</h4>
                          <p className="text-gray-400 text-sm">Hər bir müştəri üçün fərdi borc balansı və kredit limitinin real vaxtda izlənməsi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Kampaniya və Endirimlər</h4>
                          <p className="text-gray-400 text-sm">Ekskluziv kampaniyalar, endirimlər və xüsusi təkliflərə çıxış imkanı</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Yeni Məlumatlar və Yeniliklər</h4>
                          <p className="text-gray-400 text-sm">Platforma yenilikləri, yeni funksiyalar və məhsul yeniləmələri haqqında dərhal məlumatlandırılma</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    <span className="text-gradient">Partnyor Olmaq</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Tələblər</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Qeydiyyatlı kommersiya şirkəti olmaq</li>
                        <li>• Distribüsiya sahəsində təcrübə</li>
                        <li>• Maliyyə sabitliyi və etibarlılıq</li>
                        <li>• Müştəri xidmətləri keyfiyyəti</li>
                        <li>• Texniki imkanlar və infrastruktur</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Proses</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Müraciət formasının doldurulması</li>
                        <li>• Sənədlərin təqdim edilməsi</li>
                        <li>• Qiymətləndirmə və yoxlama</li>
                        <li>• Müqavilə imzalanması</li>
                        <li>• Təlim və inteqrasiya</li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto modal-animation">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white">
                  <span className="text-gradient">Partner</span> müraciəti
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Şirkətin adı"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
                      className="w-full pl-12 p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
                      className="w-full pl-12 p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
                      className="w-full pl-12 p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
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
                      className="w-full pl-12 p-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                      disabled={loading}
                    />
                  </div>

                  {error && (
                    <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

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
              ) : (
                <div className="flex justify-center items-center h-full w-full flex-col space-y-6">
                  {/* Success Animation */}
                  <div className="relative">
                    {/* Animated Checkmark */}
                    <div className="success-checkmark">
                      <div className="check-icon"></div>
                    </div>
                    
                    {/* Confetti Animation */}
                    <div className="confetti-container">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className={`confetti confetti-${i}`}
                          style={{
                            '--delay': `${i * 0.1}s`,
                            '--duration': `${2 + Math.random() * 2}s`,
                            '--rotation': `${Math.random() * 360}deg`,
                            '--x': `${Math.random() * 200 - 100}px`,
                            '--y': `${Math.random() * 200 - 100}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Success Message */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      <span className="text-gradient">Təşəkkürlər!</span>
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Partner müraciətiniz uğurla göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                    </p>
                  </div>
                  
                  <button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Bağla
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnersPage;

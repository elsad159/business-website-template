import React from 'react';
import { Link } from 'react-router-dom';
import styles, { layout } from '../style';
import { 
  logo, 
  storeDetails, 
  register, 
  recancellations, 
  recancellationDetails, 
  onboarding, 
  leftmenu, 
  inventar, 
  home, 
  dovriyyə, 
  contracts, 
  campaigns, 
  applyforcompanies 
} from '../assets';
import AppStoreBanner from '../components/AppStoreBanner';
import Footer from '../components/Footer';

const AboutAppPage = () => {
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
                <span className="text-gradient">Easy Business</span> Tədbiqi haqqında
              </h2>
              <p className={`${styles.paragraph} mt-5`}>
                <span className="text-gradient">Easy Business</span> tədbiqi müasir biznes dünyasında 
                distribütor şirkətlərin işlərini asanlaşdırmaq üçün yaradılmış innovativ həll yoldur. 
                Bu tədbiq sayəsində inventar idarəetməsindən tutmuş müştəri münasibətlərinə qədər 
                bütün biznes proseslərini rəqəmsal şəkildə idarə edə bilərsiniz.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    <span className="text-gradient">Əsas Xüsusiyyətlər</span>
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Real vaxtda inventar izləməsi və idarəetməsi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Avtomatik hesabatların yaradılması və analizi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Müştəri məlumatlarının mərkəzləşdirilmiş idarəetməsi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>ERP sistemləri ilə asan inteqrasiya</span>
                    </li>
                  </ul>
                </div>


                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    <span className="text-gradient">Tədbiq Versiyaları</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-600 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">iOS Versiyası</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        iPhone və iPad cihazları üçün optimallaşdırılmış tədbiq
                      </p>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm">iOS 15.0+ dəstəyi</span>
                      </div>
                    </div>
                    <div className="border border-gray-600 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Android Versiyası</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Android telefon və planşetlər üçün hazırlanmış tədbiq
                      </p>
                      <div className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300 text-sm">Android 8.0+ dəstəyi</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    <span className="text-gradient">Tədbiq Screenshots</span>
                  </h3>
                  
                  {/* Horizontal Scrollable Gallery */}
                  <div className="overflow-x-auto pb-4">
                    <div className="flex space-x-6 min-w-max">
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={home} 
                          alt="Ana səhifə" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Ana səhifə</h4>
                        <p className="text-gray-400 text-sm">
                          Əsas dashboard və ümumi məlumatların görünüşü. Mağaza məlumatları, borc və kredit limiti göstərilir.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={inventar} 
                          alt="Inventar" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Inventar</h4>
                        <p className="text-gray-400 text-sm">
                          Məhsul inventarının idarəetməsi. Barkod skan etmə, məhsul məlumatları və PDF sənədlərin yüklənməsi.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={dovriyyə} 
                          alt="Dövriyyə" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Dövriyyə</h4>
                        <p className="text-gray-400 text-sm">
                          Maliyyə dövriyyəsinin izlənməsi. Alış məbləğləri, borc balansı və tarixçə məlumatları.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={contracts} 
                          alt="Müqavilələr" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Müqavilələr</h4>
                        <p className="text-gray-400 text-sm">
                          Müqavilə sənədlərinin idarəetməsi. Müqavilə nömrəsi, tarixi və PDF faylların yüklənməsi.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={campaigns} 
                          alt="Kampaniyalar" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Kampaniyalar</h4>
                        <p className="text-gray-400 text-sm">
                          Marketinq kampaniyalarının görünüşü. Endirimlər, təkliflər və kampaniya detalları.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={register} 
                          alt="Qeydiyyat" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Qeydiyyat</h4>
                        <p className="text-gray-400 text-sm">
                          İstifadəçi qeydiyyatı və daxil olma prosesi. Telefon nömrəsi və Asan İmza ilə autentifikasiya.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={onboarding} 
                          alt="Onboarding" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Onboarding</h4>
                        <p className="text-gray-400 text-sm">
                          Yeni istifadəçilər üçün tətbiq təqdimatı. Əsas funksiyaların izahı və istifadə təlimatları.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={leftmenu} 
                          alt="Sol menyu" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Sol menyu</h4>
                        <p className="text-gray-400 text-sm">
                          Əsas navigasiya menyusu. Söhbətlər, müraciətlər, məxfilik siyasəti və çıxış seçimləri.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={storeDetails} 
                          alt="Mağaza detalları" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Mağaza detalları</h4>
                        <p className="text-gray-400 text-sm">
                          Mağaza məlumatlarının ətraflı görünüşü. VÖEN, ünvan və əlaqə məlumatları.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={recancellations} 
                          alt="Ləğv etmələr" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Ləğv etmələr</h4>
                        <p className="text-gray-400 text-sm">
                          Ləğv edilmiş əməliyyatların siyahısı. Ləğv tarixi və səbəblərinin izlənməsi.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={recancellationDetails} 
                          alt="Ləğv detalları" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Ləğv detalları</h4>
                        <p className="text-gray-400 text-sm">
                          Ləğv edilmiş əməliyyatın ətraflı məlumatları. Səbəb, tarix və əlaqəli sənədlər.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 text-center w-64">
                        <img 
                          src={applyforcompanies} 
                          alt="Şirkətlər üçün müraciət" 
                          className="w-full h-80 object-contain rounded-lg mb-3 shadow-lg bg-gray-800"
                        />
                        <h4 className="text-white font-semibold mb-2">Şirkətlər üçün müraciət</h4>
                        <p className="text-gray-400 text-sm">
                          Distribütor şirkətlərin xidmətə qoşulması üçün müraciət forması və prosesi.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Scroll indicator */}
                  <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm">← Scroll to see more screenshots →</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-gradient">Tədbiqi yükləyin</span> və biznesinizi rəqəmsallaşdırın
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  Easy Business tədbiqi ilə biznes proseslərini asanlaşdırın və effektivliyinizi artırın
                </p>
                <Link 
                  to="/" 
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Ana səhifəyə qayıt
                </Link>
              </div>
            </div>

          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutAppPage;

import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => {
  const renderTitleWithGradient = (title) => {
    return title.split(/(Easy)/).map((part, idx) =>
      part === 'Easy' ? (
        <span key={idx} className="text-gradient">easy</span>
      ) : (
        <React.Fragment key={idx}>{part}</React.Fragment>
      )
    );
  };

  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img
          src={icon}
          alt='icon'
          className='w-[50%] h-[50%] object-contain'
        />
      </div>
      <div className='flex-1 flex flex-col ml-3 w-[100%]'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {renderTitleWithGradient(title)}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Distribütor şirkətləri üçün imkanlar</h2>
        <p className={`${styles.paragraph} max-w-[750px] mt-5}`}>
          İnventarların <span className="text-gradient">easy</span> izlənilməsi<br /><br />
          Web üzərindən hesabatlarının istənilən formada <span className="text-gradient">easy</span> əldə olunması<br /><br />
          Xərclərin azaldılması<br /><br />
          Daxili ERP sistemləri ilə <span className="text-gradient">easy</span> və təhlükəsiz inteqrasiya – 1C erp, SAP, Mikro ve s.<br /><br />
          CRM keyfiyyətinin artması<br /><br />
          Yeni müştərilərin <span className="text-gradient">easy</span> cəlb edilməsi<br /><br />
        </p>
        {/* <Button styles='mt-10' /> */}
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business

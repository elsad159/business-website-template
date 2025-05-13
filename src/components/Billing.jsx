import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Asanlıqla əvvəlki müqavilələrinizi <br className='sm:block hidden'/> yoxlaya bilərsiniz.</h2>
        <p className={`${styles.paragraph} max-w-[590px] mt-5`}>
          Şirkətdən götürdüyünüz avadanlıqları asanlıqla yoxlaya bilərsiniz.
          Hər zaman kredit limitinizi asanlıqla yoxlaya bilərsiniz.
          Sifariş verə, canlı ləğv edə bilərsiniz. Bütün bunları asanlıqla burada edə bilərsiniz.
        </p>
       
      </div>  
    </section>
  )
}

export default Billing

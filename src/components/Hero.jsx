import styles from '../style'
import GetStarted from './GetStarted'
import { sales1 } from '../assets'
import Button from './Button'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold text-[32px] xs:text-[36px] ss:text-[56px] md:text-[64px] xl:text-[72px] text-white leading-[40px] xs:leading-[44px] ss:leading-[64px] md:leading-[72px] xl:leading-[100.8px]'>
            Kiçik və orta  <br className='sm:block hidden' />
            <span className='text-gradient'>ticarət nöqtələri üçün imkanlar</span>
          </h1>
        </div>
        <Button />

      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={sales1}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  )
}

export default Hero

import './Hero.css'
import Lottie from "lottie-react";
import developer from "./../../../public/animation/developer3.json";
import { motion } from "motion/react";
import avatar from './../../assets/Yousef-modified-2.png';


export default function Hero() {
  return (<>
    <section className='flex hero' id='about'>
      <div className="left-section">
        
        <div className="parent p-relative">
          <motion.img initial={{transform:'scale(0)'}} animate={{transform:'scale(1)'}} transition={{damping:3 , type:'spring' , stiffness:100}} src={avatar} alt="img" className="avatar hidden" />
          <span className='icon-verified_user p-absolute'></span>
        </div>

        <h2 className='textAnimation'><span></span></h2>
        <p className='hidden'>I'm Youssef Saeed, a Front-End Developer based in Cairo. I specialize in building responsive and interactive user interfaces using modern technologies like HTML, CSS, JavaScript, React, and Next.js. I'm passionate about creating clean, efficient, and accessible web experiences.</p>
        <div className="icons-hero flex hidden">
          <a href="https://www.linkedin.com/in/yousef-saeed-57aa55278/" className='icon-linkedin-square icon' target='_block'></a>
          <a href="https://github.com/Jo-Plus" className='icon-github icon' target='_block'></a>
          <a href="https://wa.me/201010283262" className='icon-whatsapp icon' target='_block'></a>
          <a href="https://www.instagram.com/youssefaboyehia/" className='icon-instagram icon' target='_block'></a>
          <a href="https://www.facebook.com/youssef.aboyehia.1" className='icon-facebook-square icon' target='_block'></a>
        </div>

        <div className="cv hidden">
          <a href="/Youssef Saeed (React) CV.pdf" download="Youssef Saeed (React) CV.pdf" target="_blank" rel="noopener noreferrer">Download My CV <span className='icon-download3'></span></a>
        </div>
      </div>

      <div className="right-section hiddens">
      <Lottie className='contact-me hidden' animationData={developer} style={{height:400 , width:500}} />
      </div>
    </section>
    </>)
}

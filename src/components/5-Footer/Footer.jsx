import './Footer.css'

export default function Footer() {
  return (
    <footer className='flex hidden'>
      <ul className='flex g-2'>
        <a href="https://www.linkedin.com/in/yousef-saeed-57aa55278/" className='icon-linkedin-square icon' target='_block'></a>
        <a href="https://github.com/Jo-Plus" className='icon-github icon' target='_block'></a>
        <a href="https://wa.me/201010283262" className='icon-whatsapp icon' target='_block'></a>
        <a href="https://www.instagram.com/youssefaboyehia/" className='icon-instagram icon' target='_block'></a>
        <a href="https://www.facebook.com/youssef.aboyehia.1" className='icon-facebook-square icon' target='_block'></a>
      </ul>
      <p>© 2025 Spener Sharp. All rights reserved. <span>By Youssef Saeed</span></p>
    </footer>
  )
}

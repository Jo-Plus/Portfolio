import React from 'react'

export default function Location() {
  return (<>
  <section id='location'>
    <p className="headSection hidden">My <span>Location</span></p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55265.60544913989!2d31.22155230592654!3d30.033979058226286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1747096610272!5m2!1sen!2seg" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='hidden' />
  </section>
    </>)
}

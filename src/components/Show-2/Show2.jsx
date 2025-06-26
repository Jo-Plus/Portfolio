import React from 'react'
import './Show2.css';
import img1 from "./../../assets/img-1.png";
import img2 from "./../../assets/img-2.png";
import img3 from "./../../assets/img-3.png";
import img5 from "./../../assets/img-5.png";
import img15 from "./../../assets/img-15.png";
import img7 from "./../../assets/img-7.png";
import img11 from "./../../assets/ecommerce.png";
import img12 from "./../../assets/movies.png";
import img13 from "./../../assets/img-13.png";
import img14 from "./../../assets/img-14.png";

export default function Show2() {
  const images = [
    { src: img13, link: "https://musicvibe-flax.vercel.app/" },
    { src: img2, link: "https://jo-plus.github.io/HTML-CSS-Template-Two/" },
    { src: img3, link: "https://jo-plus.github.io/HTML-CSS-Template-Three/" },
    { src: img14, link: "https://saasify-puce.vercel.app/" },
    { src: img5, link: "https://jo-plus.github.io/Bondi-Template/" },
    { src: img15, link: "https://jo-plus.github.io/Codelander/" },
    { src: img7, link: "https://jo-plus.github.io/Appexy-Page/" },
    { src: img11, link: "https://ecommerce-app-1e793.web.app/" },
    { src: img12, link: "https://movies-app-528a2.web.app/" },
  ];

  return (
    <section id="slideshow">
      <div className="entire-content">
        <div className="content-carrousel">
          {images.map((image, index) => (
            <figure className="shadow" key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`Slide ${index + 1}`} />
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
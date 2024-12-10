//npm modules
import { useState, useEffect, useRef } from "react";

// css
import styles from "./Carousel.module.css"

import plantShop from '../../assets/Store_Front.jpg'
import def from '../../assets/DefaultMember.jpg'
const images = [plantShop, def]

const Carousel = () => {
  const [position, setPosition] = useState(0)
  const timeoutRef = useRef(null);
  const delay = 5000

  // const colors = ["#0088FE", "#00C49F", "#FFBB28"];

  function resetTimeout(){
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    resetTimeout()

    timeoutRef.current = setTimeout(() =>
      setPosition((prevPos) =>
        prevPos === images.length - 1 ? 0 : prevPos + 1), delay )
      return () => { resetTimeout() }
    }, [])


  return (
    <div className={styles.carousel_container}>
      <div className={styles.slider}
        style={{ transform: `translate3d(${-position * 100}%, 0, 0)`}} 
      >
      {images.map((image, i) =>(
        <img className={styles.slide} key={i} src={image} alt="Slide"/>
        // <div 
        // className={styles.slide}
        // key={i} style={{backgroundColor: color}}>{color}</div>
      ))}
      </div>

      <div className={styles.dots_container}>
        {images.map((_, i) =>
        <div className={`${styles.dot}${position === i ? ` ${styles.active}` : ""}`} 
        key={i}
        onClick={() =>{setPosition(i)}}
        ></div>)
      }
      </div>
    </div>
  );
}

export default Carousel;
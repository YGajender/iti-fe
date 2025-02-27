import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png" 
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1 className=''>PRAGATI SHEEL PVT INDUSTRIAL TRAINING INSTITUTE</h1>
            <p className=''>APPROVED BY DIRECTORATE OF TECHNICAL EDUCTION, GOVT. OF RAJASTHAN</p>
            <p className=''>SINCE 2009 AFFILIATED TO NCVT (DGEST) GOVT. OF INDIA S</p>
            <p className=''>DHANDHELA ROAD, PATAN, DISTT.- SIKAR</p>
            <button className="btn">Explore More <img src={dark_arrow} /></button>
        </div>
    </div>
  )
}

export default Hero
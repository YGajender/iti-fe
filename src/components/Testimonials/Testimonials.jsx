import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'
const Testimonials = () => {
const slider = useRef()
let tx = 0;
    const slideForward =() => {
        if (tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =() => {
        if (tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
      <img className='next-btn' src={next_icon} alt='' onClick={slideForward}/>
      <img className='back-btn' src={back_icon} alt='' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' />
                <div>
                  <h3>Nischal Maharjan</h3>
                  <span>Nischal Technologies, Australia </span>
                </div>
              </div>
              <p>
  
The curriculum&apos;s quality and depth truly empower students to excel in education, providing a strong foundation for success. Highly recommended for cutting-edge learning and growth.
</p>


            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='' />
                <div>
                  <h3>Sampada Tandan</h3>
                  <span>Nischal Technologies, Australia </span>
                </div>
              </div>
              <p>
              The team at Nischal Technologies has redefined the standard of excellence. Their innovative approaches and dedication are commendable.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='' />
                <div>
                  <h3>Veanisha Awale</h3>
                  <span>Nischal Technologies, Australia </span>
                </div>
              </div>
              <p>
              I am amazed at how well-organized and effective their programs are. They provide real-world knowledge that can be applied immediately.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='' />
                <div>
                  <h3>Veronica Awale</h3>
                  <span>Nischal Technologies, Australia </span>
                </div>
              </div>
              <p>
              Their commitment to delivering quality education and innovative solutions is unparalleled. Highly recommended!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials

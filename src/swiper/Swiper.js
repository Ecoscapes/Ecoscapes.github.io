import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
import './swiper.css';
// import styles from './swiper.module.css';

// Import Swiper styles
import 'swiper/swiper-bundle.css'


const imageUrls = [
  require('../Images/Gallery/1.jpg'),
  require('../Images/Gallery/2.jpg'),
  require('../Images/Gallery/3.jpg'),
  require('../Images/Gallery/4.jpg'),
  require('../Images/Gallery/5.jpg'),
  require('../Images/Gallery/6.jpg'),
  require('../Images/Gallery/7.jpg'),
  require('../Images/Gallery/8.png'),
  require('../Images/Gallery/9.jpg'),
  require('../Images/Gallery/10.jpg'),
  require('../Images/Gallery/11.jpg'),
  require('../Images/Gallery/12.jpg'),
  require('../Images/Gallery/13.jpg'),
  require('../Images/Gallery/14.jpg'),
  require('../Images/Gallery/15.jpg'),
  require('../Images/Gallery/16.jpg'),
  require('../Images/Gallery/17.jpg'),
  require('../Images/Gallery/18.jpg'),
  require('../Images/Gallery/19.jpg'),
  require('../Images/Gallery/20.jpg'),
  require('../Images/Gallery/21.jpg'),
  require('../Images/Gallery/23.JPG'),
  require('../Images/Gallery/24.JPG'),
  require('../Images/Gallery/25.JPG'),
  require('../Images/Gallery/26.JPG'),
  require('../Images/Gallery/27.JPG'),
  require('../Images/Gallery/28.JPG'),
  require('../Images/Gallery/A.jpg'),
  require('../Images/Gallery/B.jpg'),
  require('../Images/Gallery/C.jpg'),
  require('../Images/Gallery/D.jpg'),
  require('../Images/Gallery/E.jpg'),
  require('../Images/Gallery/F.jpg'),
  require('../Images/Gallery/G.jpg'),
  require('../Images/Gallery/H.jpg'),
  require('../Images/Gallery/I.jpg'),
  require('../Images/Gallery/homepage.jpg'),
  require('../Images/Gallery/homepage1.jpg'),
  require('../Images/Gallery/homepage2.jpg')

];

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={400}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="center">
                <img className="swiperimages" src={imageUrl} alt={`slide ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};





export default SwiperComponent
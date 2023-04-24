// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './swiper.module.css';
// import styles from './swiper.module.css';
import one from '../Images/Gallery/4.jpg';
import two from '../Images/Gallery/2.jpg';
import three from '../Images/Gallery/3.jpg';

// Import Swiper styles
import 'swiper/swiper-bundle.css'

export default () => {
  return (
    <Swiper
    //   className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable:true }}
      scrollbar={{ draggable:true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
            <div className={styles.center}>
                <img className={styles.swiperimages} src={one} alt="one" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className={styles.center}>
                <img className={styles.swiperimages} src={two} alt="two" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className={styles.center}>
                <img className={styles.swiperimages} src={three} alt="three" />
            </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
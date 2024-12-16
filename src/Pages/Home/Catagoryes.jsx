import SectionTitle from "../Shared/SectionTitle";
import slider1 from '../../../src/assets/home/slide1.jpg'
import slider2 from '../../../src/assets/home/slide2.jpg'
import slider3 from '../../../src/assets/home/slide3.jpg'
import slider4 from '../../../src/assets/home/slide4.jpg'
import slider5 from '../../../src/assets/home/slide5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import './styles.css';
import 'swiper/css';
const Catagoryes = () => {
    return (
    <section>
        <SectionTitle
        subHeading="---From 11:00am to 10:00pm---"
        heading="ORDER ONLINE"
        >
        </SectionTitle>

        <div>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
  <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
  
      </Swiper>
        </div>
    </section>
    );
};

export default Catagoryes;
import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Rating } from '@smastrom/react-rating'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonial = () => {
    const [reviews, setReview]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=>setReview(data))
    }, [])
    return (
       <section>
        <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS">

        </SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
         {
            reviews.map(review=><SwiperSlide
            key={review._id}>
                 <div className="flex mx-24 my-16 text-center items-center flex-col py-16 rounded bg-blue-600">
                 <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <p className="flex justify-center text-5xl"><BiSolidQuoteSingleLeft /><BiSolidQuoteSingleLeft /></p>
                    <p className="text-white p-4">{review.details}</p>
                    <h1 className="text-3xl font-bold text-yellow-500" >{review.name}</h1>
                 </div>

            </SwiperSlide>)
         }
      </Swiper>
       </section>
    );
};

export default Testimonial;
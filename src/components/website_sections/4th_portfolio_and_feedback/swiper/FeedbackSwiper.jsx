import { FeedbackCard } from './feedback_card/FeedbcakCard';
import { feedbacks } from "./constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import "./FeedbackSwiper.css";


export const FeedbackSwiper = () => {

    return (

        <div className="swiperContainer">

            <Swiper modules={[Navigation]} loop={true} navigation>

                {feedbacks.map((feedback) => (

                    <SwiperSlide className="swiperSlide" key={feedback.id}>
                        
                        <FeedbackCard name={feedback.name} comment={feedback.comment} />

                    </SwiperSlide>

                ))}

            </Swiper>

        </div>
        
    );
}
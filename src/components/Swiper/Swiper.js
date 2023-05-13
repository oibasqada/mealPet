import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";
import {useSelector} from "react-redux";



const CustomSwiper = () => {
    const meals = useSelector(state => state.meals)

    return (
        <>
            <div className={"swiper-box"}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3333500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <div>
                        {
                            meals.slice(0,4).map((meal, idx) =>
                                <Link key={idx + 1} to={`/`}>
                                    <SwiperSlide>
                                        <img src={meal.strMealThumb} alt=""/>
                                        <h3>{meal.strMeal}</h3>
                                    </SwiperSlide>
                                </Link>
                            )
                        }
                    </div>

                </Swiper>
            </div>
        </>
    );
}

export default CustomSwiper

import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
import {Link} from "react-router-dom";

const CustomSwiper = () => {

    const [meal, setMeal] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://themealdb.com/api/json/v2/1/randomselection.php?`)
            .then (({data}) => {
                setMeal((data.meals))
                // console.log(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return (
        <>
            <div className={"swiper-box"}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        loading ? <h2 className={'waiter'}>Wait...</h2> :
                            <div>
                                {
                                    meal.slice(0,3).map((meals, idx) =>
                                        <Link key={idx + 1} to={`/`}>
                                            <SwiperSlide >
                                                <img src={meals.strMealThumb} alt=""/>
                                            </SwiperSlide>
                                        </Link>
                                    )
                                }
                            </div>
                    }

                </Swiper>
            </div>
        </>
    );
}

export default CustomSwiper

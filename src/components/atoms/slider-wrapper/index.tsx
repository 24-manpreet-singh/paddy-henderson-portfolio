"use client"
import { TESTIMONIAL_DATA } from '@/constants/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const settings = {
    dots: true,
    infinite: true,
    speed: 2800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const SliderWrapper = () => {
    return (
        <Slider {...settings}>
            {TESTIMONIAL_DATA.map((item, index) => (
                <div className="portfolio-page-title-wrap" key={index}>
                    <div>
                        <div className="mt-4">
                            <p className="text-2xl font-bold  text-yellow-500 ">
                                {Array.from({ length: item.rating }).map((_, index) => (
                                    <i key={index} className="fas fa-star"></i>
                                ))}
                            </p>
                            <p className="mt-4 leading-relaxed ">{item.description}
                            </p>
                        </div>
                    </div>


                    <div className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                        &mdash; {item.author}
                    </div>
                </div>))}
        </Slider>
    )
}

export default SliderWrapper
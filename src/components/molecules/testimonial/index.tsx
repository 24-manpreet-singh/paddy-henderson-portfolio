import SliderWrapper from '@/components/atoms/slider-wrapper';

const Testimonial = () => {
    return (
        <div className="section-wrapper bg-light-white-2 pt-30 pb-60 pl-60 pr-60">
            <div className="portfolio-section-title-wrap text-center mb-20">
                <h3 className="text-xl md:text-2xl xl:text-4xl">Hear from My Happy Clients</h3>
            </div>
            <div className="portfolio-client-slider">
                <div className="swiper-container client_slide_active">
                    <div className="swiper-wrapper">

                        <div className="slickOne text-center px-2 ">
                            <SliderWrapper />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonial
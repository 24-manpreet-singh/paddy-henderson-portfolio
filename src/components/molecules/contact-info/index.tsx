import PHONE_IMAGE from '@/assets/images/icons/call-center-support-service.svg';
import LOCATION_IMAGE from '@/assets/images/icons/location-pin-3.svg';
import EMAIL_IMAGE from '@/assets/images/icons/mail-send-envelope.svg';
import ImageWrapper from '@/components/atoms/image';
import { memo } from 'react';

const ContactInfo = () => {
    return (

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                <div className="text-center px-6">
                    <div className="relative  text-transparent -m-3">
                        <i data-feather="hexagon" className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]" />
                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <ImageWrapper
                                src={PHONE_IMAGE}
                                alt={"phone"}
                                className='h-8'
                            />
                        </div>
                    </div>
                    <div className="content mt-7">
                        <h5 className="title text-lg font-medium">Phone</h5>
                        <p className="text-slate-400 dark:text-white/60 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                        <div className="mt-5">
                            <a href="tel:+152534-468-854" className="text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500">+152 534-468-854</a>
                        </div>
                    </div>
                </div>
                <div className="text-center px-6">
                    <div className="relative  text-transparent -m-3">
                        <i data-feather="hexagon" className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]" />
                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <ImageWrapper
                                src={EMAIL_IMAGE}
                                alt={"email"}
                                className='h-8'
                            />
                        </div>
                    </div>
                    <div className="content mt-7">
                        <h5 className="title text-lg font-medium">Email</h5>
                        <p className="text-slate-400 dark:text-white/60 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                        <div className="mt-5">
                            <a href="mailto:contact@example.com" className="text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500">contact@example.com</a>
                        </div>
                    </div>
                </div>
                <div className="text-center px-6">
                    <div className="relative  text-transparent -m-3">
                        <i data-feather="hexagon" className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]" />
                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                            <ImageWrapper
                                src={LOCATION_IMAGE}
                                alt={"location"}
                                className='h-8'
                            />
                        </div>
                    </div>
                    <div className="content mt-7">
                        <h5 className="title text-lg font-medium">Location</h5>
                        <p className="text-slate-400 dark:text-white/60 mt-3">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>
                        <div className="mt-5">
                            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="video-play-icon read-more lightbox text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500">View on Google map</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ContactInfo)
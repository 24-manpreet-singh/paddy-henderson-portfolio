import CONTACT_IMAGE from "@/assets/images/contact.svg";
import ImageWrapper from '@/components/atoms/image';
import React from 'react';

const ContactUS = () => {
    return (
        <React.Fragment>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <ImageWrapper
                        src={CONTACT_IMAGE}
                        alt={"contact-image"}
                        className=''
                    />
                    <div className="lg:ms-5">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 p-6">
                            <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>
                            <form method="get" name="myForm" id="myForm" >
                                <p className="mb-0" id="error-msg" />
                                <div id="simple-msg" />
                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <label htmlFor="name" className="form-label font-medium">Your Name:</label>
                                        <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2" placeholder="Name :" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="form-label font-medium">Your Email:</label>
                                        <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2" placeholder="Email :" />
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="subject" className="form-label font-medium">Your Question:</label>
                                        <input name="subject" id="subject" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2" placeholder="Subject :" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="comments" className="form-label font-medium">Your Comment:</label>
                                        <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2 textarea h-28" placeholder="Message :" defaultValue={""} />
                                    </div>
                                </div>
                                <button type="button" id="submit" name="send" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/*end container*/}

        </React.Fragment>
    )
}

export default ContactUS
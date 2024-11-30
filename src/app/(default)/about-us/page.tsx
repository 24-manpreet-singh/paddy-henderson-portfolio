"use client"
import ABOUT_IMAGE from '@/assets/images/about-paddy.png'
import ImageWrapper from '@/components/atoms/image'
import InformationDailog from "@/components/atoms/modal/information-dialog"
import VideoPlayer from '@/components/atoms/video-player'
import CustomerReview from '@/components/molecules/customer-review'
import HeroSection from '@/components/molecules/hero-section'
import Teammates from '@/components/molecules/teammates'
import WhatWeDo from '@/components/molecules/what-we-do'
import Link from 'next/link'
import { memo, useState } from 'react'

const AboutWrapper = () => {

  const [isInformationDailog, setInformationDailog] = useState<boolean>(false);

  return (
    <div>
      <HeroSection
        title="About Us"
        description="Crafting Stories, Sharing Truths – Passionate Writing, Impactful Journalism"
        name="paddy Henderson"
      />

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* End Hero */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <ImageWrapper
                  src={ABOUT_IMAGE}
                  alt={"author"}
                  className='rounded-lg shadow-lg relative overflow-hidden'
                />
                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                  <div data-type="youtube" className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-950 text-orange-500" onClick={() => setInformationDailog(true)}>
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                  </div>
                </div>
              </div>
            </div>{/*end col*/}
            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">About Us: Paddy Henderson</h3>
                <p className="text-slate-400 dark:text-white/60 max-w-2xl mx-auto">{`Start working with Paddy Henderson that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.`}</p>
                <div className="relative mt-8">
                  <a href="#" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Read More <i className="mdi mdi-arrow-right ms-2" /></a>
                </div>
              </div>
            </div>{/*end col*/}
          </div>{/*end grid*/}
        </div>{/*end container*/}

        <WhatWeDo />

        <CustomerReview />

        <Teammates />
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <span className="text-slate-400 dark:text-white/60 mb-4">Get in Touch With Me</span>
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">{`Contact me for writing, journalism, and more`}</h3>
            <div className="mt-6">
              <Link href="contact" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"><i data-feather="phone" className="h-[15px] w-[15px] me-2" /> Contact us</Link>
            </div>
          </div>{/*end grid*/}
        </div>{/*end container*/}
      </section>{/*end section*/}


      {isInformationDailog && (
        <InformationDailog
          isOpen={isInformationDailog}
          onCancel={() => setInformationDailog(false)}
        >
          <VideoPlayer
            url="https://www.youtube.com/watch?v=WI_Ma22D2Y8"
            controls={true}
            playing={true}
            volume={0.7}
            muted={false}
            width="100%"
            height="40rem"
          />
        </InformationDailog>
      )}
    </div>
  )
}

export default memo(AboutWrapper)
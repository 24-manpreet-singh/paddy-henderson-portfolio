import AboutUS from "@/components/molecules/about-us";
import BannerSection from "@/components/molecules/banner-section";
import BlogList from "@/components/molecules/blog-list";
import ContactUS from "@/components/molecules/contact-us";
import CustomerReview from "@/components/molecules/customer-review";
import Partners from "@/components/molecules/partners";
import Teammates from "@/components/molecules/teammates";
import WhatWeDo from "@/components/molecules/what-we-do";
import React from "react";




export default function Home() {
  return (
    <React.Fragment>
      <div>
        <BannerSection />
        <Partners />
        <AboutUS />
        <section className="relative overflow-hidden pt-1 pb-24">
          <WhatWeDo />
          <CustomerReview />
          <Teammates />
          <BlogList
            title="Blogs &amp; News"
            description="Discover my latest blogs and news stories that offer fresh perspectives, insightful analysis, and captivating narratives on current events"
          />
          <ContactUS />
        </section>

      </div>
    </React.Fragment>
  );
}

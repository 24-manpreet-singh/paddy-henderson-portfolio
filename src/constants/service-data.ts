import PORTFOLIO_1_IMAGE from "@/assets/images/portfolio/1.jpg";
import PORTFOLIO_2_IMAGE from "@/assets/images/portfolio/2.jpg";
import PORTFOLIO_3_IMAGE from "@/assets/images/portfolio/3.jpg";
import PORTFOLIO_4_IMAGE from "@/assets/images/portfolio/4.jpg";
import PORTFOLIO_5_IMAGE from "@/assets/images/portfolio/5.jpg";

import SERVICE_1_IMAGE from "@/assets/images/service/service-img-1.1.jpg";
import SERVICE_2_IMAGE from "@/assets/images/service/service-img-1.2.jpg";
import SERVICE_3_IMAGE from "@/assets/images/service/service-img-1.4.jpg";
import SERVICE_4_IMAGE from "@/assets/images/service/service-img-1.5.jpg";
import SERVICE_5_IMAGE from "@/assets/images/service/service-img-1.webp";
import SERVICE_6_IMAGE from "@/assets/images/service/service-img-10.webp";
import SERVICE_7_IMAGE from "@/assets/images/service/service-img-11.webp";
import SERVICE_8_IMAGE from "@/assets/images/service/service-img-12.webp";
import SERVICE_9_IMAGE from "@/assets/images/service/service-img-13.webp";
import SERVICE_10_IMAGE from "@/assets/images/service/service-img-14.webp";
import SERVICE_11_IMAGE from "@/assets/images/service/service-img-15.webp";
import SERVICE_13_IMAGE from "@/assets/images/service/service-img-2.webp";
import SERVICE_14_IMAGE from "@/assets/images/service/service-img-3.webp";
import SERVICE_15_IMAGE from "@/assets/images/service/service-img-4.webp";
import SERVICE_16_IMAGE from "@/assets/images/service/service-img-5.webp";
import SERVICE_17_IMAGE from "@/assets/images/service/service-img-6.webp";
import SERVICE_18_IMAGE from "@/assets/images/service/service-img-7.webp";
import SERVICE_19_IMAGE from "@/assets/images/service/service-img-8.webp";
import SERVICE_20_IMAGE from "@/assets/images/service/service-img-9.webp";

export interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
}

export enum ServiceCategories {
  ALL = "All",
  SPORTS = "Sports",
  BOOKS = "Books",
  TV_AND_FILM = "Tv and File",
  ACADEMIC = "Academic",
}

export const SERVICE_DATA = [
  {
    type: ServiceCategories.ACADEMIC || ServiceCategories.ALL,
    imageSrc: PORTFOLIO_1_IMAGE,
    imageAlt: "service-1",
    title: "Showfar Ride Hailling ",
    shortDescription: "Showfar is an application which allows",
    description:
      "Showfar is an application which allows passengers to hail a ride and drivers to charge fares and get paid. In this project we have build a feature-rich ride-hailing app that will allow users to submit a trip request that automatically sent to an showfar driver near to them, alerting the drive to the location. The accepting showfar driver will then come and pick rider and drive to requested destination. The app will use GPS technology to locate available drivers. User tab the screen to hail a cab and pay automatically on arrival with a credit/debit card",
    date: "November 2022",
    technologies: "Material-UI, React, Redux-Sage, Node, Postgresql",
  },

  {
    type: ServiceCategories.BOOKS || ServiceCategories.ALL,
    imageSrc: PORTFOLIO_2_IMAGE,
    imageAlt: "service-2",
    title: "Showfar Ride Hailling ",
    shortDescription: "Showfar is an application which allows",
    description:
      "Showfar is an application which allows passengers to hail a ride and drivers to charge fares and get paid. In this project we have build a feature-rich ride-hailing app that will allow users to submit a trip request that automatically sent to an showfar driver near to them, alerting the drive to the location. The accepting showfar driver will then come and pick rider and drive to requested destination. The app will use GPS technology to locate available drivers. User tab the screen to hail a cab and pay automatically on arrival with a credit/debit card",
    date: "November 2022",
    technologies: "Material-UI, React, Redux-Sage, Node, Postgresql",
  },
  {
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    imageSrc: PORTFOLIO_3_IMAGE,
    imageAlt: "service-3",
    title: "Showfar Ride Hailling ",
    shortDescription: "Showfar is an application which allows",
    description:
      "Showfar is an application which allows passengers to hail a ride and drivers to charge fares and get paid. In this project we have build a feature-rich ride-hailing app that will allow users to submit a trip request that automatically sent to an showfar driver near to them, alerting the drive to the location. The accepting showfar driver will then come and pick rider and drive to requested destination. The app will use GPS technology to locate available drivers. User tab the screen to hail a cab and pay automatically on arrival with a credit/debit card",
    date: "November 2022",
    technologies: "Material-UI, React, Redux-Sage, Node, Postgresql",
  },
  {
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    imageSrc: PORTFOLIO_4_IMAGE,
    imageAlt: "service-4",
    title: "Showfar Ride Hailling ",
    shortDescription: "Showfar is an application which allows",
    description:
      "Showfar is an application which allows passengers to hail a ride and drivers to charge fares and get paid. In this project we have build a feature-rich ride-hailing app that will allow users to submit a trip request that automatically sent to an showfar driver near to them, alerting the drive to the location. The accepting showfar driver will then come and pick rider and drive to requested destination. The app will use GPS technology to locate available drivers. User tab the screen to hail a cab and pay automatically on arrival with a credit/debit card",
    date: "November 2022",
    technologies: "Material-UI, React, Redux-Sage, Node, Postgresql",
  },
  {
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    imageSrc: PORTFOLIO_5_IMAGE,
    imageAlt: "service-5",
    title: "Showfar Ride Hailling ",
    shortDescription: "Showfar is an application which allows",
    description:
      "Showfar is an application which allows passengers to hail a ride and drivers to charge fares and get paid. In this project we have build a feature-rich ride-hailing app that will allow users to submit a trip request that automatically sent to an showfar driver near to them, alerting the drive to the location. The accepting showfar driver will then come and pick rider and drive to requested destination. The app will use GPS technology to locate available drivers. User tab the screen to hail a cab and pay automatically on arrival with a credit/debit card",
    date: "November 2022",
    technologies: "Material-UI, React, Redux-Sage, Node, Postgresql",
  },
];

export const SERVICE_IMAGE_DATA = [
  {
    type: ServiceCategories.ACADEMIC || ServiceCategories.ALL,
    imageSrc: SERVICE_5_IMAGE,
    imageAlt: "service-5",
  },
  {
    type: ServiceCategories.ACADEMIC || ServiceCategories.ALL,
    imageSrc: SERVICE_1_IMAGE,
    imageAlt: "service-1",
  },
  {
    type: ServiceCategories.BOOKS || ServiceCategories.ALL,
    imageSrc: SERVICE_2_IMAGE,
    imageAlt: "service-2",
  },
  {
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    imageSrc: SERVICE_3_IMAGE,
    imageAlt: "service-3",
  },
  {
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    imageSrc: SERVICE_4_IMAGE,
    imageAlt: "service-4",
  },
  {
    type: ServiceCategories.BOOKS || ServiceCategories.ALL,
    imageSrc: SERVICE_6_IMAGE,
    imageAlt: "service-6",
  },
  {
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    imageSrc: SERVICE_7_IMAGE,
    imageAlt: "service-7",
  },
  {
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    imageSrc: SERVICE_8_IMAGE,
    imageAlt: "service-8",
  },
  {
    type: ServiceCategories.ACADEMIC || ServiceCategories.ALL,
    imageSrc: SERVICE_9_IMAGE,
    imageAlt: "service-9",
  },
  {
    type: ServiceCategories.BOOKS || ServiceCategories.ALL,
    imageSrc: SERVICE_10_IMAGE,
    imageAlt: "service-10",
  },
  {
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    imageSrc: SERVICE_11_IMAGE,
    imageAlt: "service-11",
  },
  {
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    imageSrc: SERVICE_13_IMAGE,
    imageAlt: "service-13",
  },
  {
    type: ServiceCategories.ACADEMIC || ServiceCategories.ALL,
    imageSrc: SERVICE_14_IMAGE,
    imageAlt: "service-14",
  },
  {
    type: ServiceCategories.BOOKS || ServiceCategories.ALL,
    imageSrc: SERVICE_15_IMAGE,
    imageAlt: "service-15",
  },
  {
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    imageSrc: SERVICE_16_IMAGE,
    imageAlt: "service-16",
  },
  {
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    imageSrc: SERVICE_17_IMAGE,
    imageAlt: "service-17",
  },
  {
    type: ServiceCategories.ACADEMIC || ServiceCategories.ALL,
    imageSrc: SERVICE_18_IMAGE,
    imageAlt: "service-18",
  },
  {
    type: ServiceCategories.BOOKS || ServiceCategories.ALL,
    imageSrc: SERVICE_19_IMAGE,
    imageAlt: "service-19",
  },
  {
    type: ServiceCategories.SPORTS || ServiceCategories.ALL,
    imageSrc: SERVICE_19_IMAGE,
    imageAlt: "service-19",
  },
  {
    type: ServiceCategories.TV_AND_FILM || ServiceCategories.ALL,
    imageSrc: SERVICE_20_IMAGE,
    imageAlt: "service-20",
  },
];

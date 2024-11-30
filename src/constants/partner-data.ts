import Atlantic_image from "@/assets/images/partner/atlantic.svg";
import BbcNews_image from "@/assets/images/partner/bbc_news.png";
import BbbcSport_image from "@/assets/images/partner/bbcSport.svg";
import Guardian_image from "@/assets/images/partner/guardian-2.png";
import NewYork_image from "@/assets/images/partner/newYork.png";

export interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
}

export const PARTNER_DATA = [
  {
    imageSrc: Atlantic_image,
    imageAlt: "Atlantic",
    name: "Krista John",
    designation: "C.E.O",
  },
  {
    imageSrc: BbcNews_image,
    imageAlt: "bbcNews",
    name: "Roger Jackson",
    designation: "C.E.O",
  },
  {
    imageSrc: BbbcSport_image,
    imageAlt: "bbcSport",
    name: "Thomas Israel",
    designation: "C.E.O",
  },
  {
    imageSrc: Guardian_image,
    imageAlt: "guardian",
    name: "Barbara McIntosh",
    designation: "C.E.O",
  },

  {
    imageSrc: NewYork_image,
    imageAlt: "newYork",
    name: "Janisha Doll",
    designation: "C.E.O",
  },

  // {
  //   imageSrc: SPOTIFY_TEAM_IMAGE,
  //   imageAlt: "teammate-2",
  //   name: "Janisha Doll",
  //   designation: "C.E.O",
  // },
];

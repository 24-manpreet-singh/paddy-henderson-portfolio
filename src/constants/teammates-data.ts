import TEAM_THREE_IMAGE from "@/assets/images/team/03.jpg";
import TEAM_FOUR_IMAGE from "@/assets/images/team/04.jpg";
import TEAM_FIFTH_IMAGE from "@/assets/images/team/05.jpg";
import MANPREET_IMAGE from "@/assets/images/team/manpreet.jpg";

export interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
}

export const TEAMMATE_DATA = [
  {
    imageSrc: TEAM_FIFTH_IMAGE,
    imageAlt: "teammate-1",
    name: "Jack John",
    designation: "Designer",
    description: "This is just a simple text made ",
    twitterLink: "#",
    instaLink: "#",
    linkedinLink: "#",
  },

  {
    imageSrc: TEAM_FOUR_IMAGE,
    imageAlt: "teammate-2",
    name: "Krista John",
    designation: "Designer",
    description: "This is just a simple text made ",
    twitterLink: "#",
    instaLink: "#",
    linkedinLink: "#",
  },
  {
    imageSrc: TEAM_THREE_IMAGE,
    imageAlt: "teammate-3",
    name: "Roger Jackson",
    designation: "Designer",
    description: "This is just a simple text made ",
    twitterLink: "#",
    instaLink: "#",
    linkedinLink: "#",
  },
  {
    imageSrc: MANPREET_IMAGE,
    imageAlt: "manpreet singh",
    name: "Manpreet Singh",
    designation: "Developer",
    description: "This is just a simple text made ",
    twitterLink: "#",
    instaLink: "#",
    linkedinLink: "#",
  },
];

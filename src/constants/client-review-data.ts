import TEAM_ONE_IMAGE from "@/assets/images/team/01.jpg";
import TEAM_THREE_IMAGE from "@/assets/images/team/03.jpg";
import TEAM_FIFTH_IMAGE from "@/assets/images/team/05.jpg";

export interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
}

export const CLIENT_REVIEW_DATA = [
  {
    imageSrc: TEAM_ONE_IMAGE,
    imageAlt: "teammate-1",
    name: "Thomas Israel",
    designation: "C.E.O",
    company_name: "ABC ",
    description:
      "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
    twitterLink: "#",
    instaLink: "#",
    linkedinLink: "#",
  },

  {
    imageSrc: TEAM_FIFTH_IMAGE,
    imageAlt: "teammate-2",
    name: "Krista John",
    designation: "C.E.O",
    company_name: "ABC ",
    description:
      "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it",
    twitterLink: "#",
    instaLink: "#",
    linkedinLink: "#",
  },
  {
    imageSrc: TEAM_THREE_IMAGE,
    imageAlt: "teammate-3",
    name: "Roger Jackson",
    designation: "C.E.O",
    company_name: "ABC ",
    description:
      "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined",
    twitterLink: "#",
    instaLink: "#",
    linkedinLink: "#",
  },
  // {
  //   imageSrc: TEAM_FOUR_IMAGE,
  //   imageAlt: "teammate-3",
  //   name: "Barbara McIntosh",
  //   designation: "C.E.O",
  //   company_name: "ABC ",
  //   description:
  //     "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
  //   twitterLink: "#",
  //   instaLink: "#",
  //   linkedinLink: "#",
  // },

  // {
  //   imageSrc: TEAM_SIX_IMAGE,
  //   imageAlt: "teammate-2",
  //   name: "Janisha Doll",
  //   designation: "C.E.O",
  //   company_name: "ABC ",
  //   description:
  //     "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it",
  //   twitterLink: "#",
  //   instaLink: "#",
  //   linkedinLink: "#",
  // },
];

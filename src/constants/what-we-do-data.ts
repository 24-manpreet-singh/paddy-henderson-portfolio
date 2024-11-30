import COLOR_SWATCHES from "@/assets/images/icons/color-swatches.svg";
import DECENT_WORK_IMAGE from "@/assets/images/icons/decent-work-and-economic-growth.svg";
import FLIP_HOEIZONATL_IMAGE from "@/assets/images/icons/flip-horizontal-arrow-1.svg";
import LAYER_ONE_IMAGE from "@/assets/images/icons/layers-1.svg";
import PICTUER_FOLER_IMAGE from "@/assets/images/icons/pictures-folder-memories.svg";
import PRODUCTION_TIME_IMAGE from "@/assets/images/icons/production-belt-time.svg";

export interface ProjectProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
}

export const WHAT_WE_DO_DATA = [
  {
    imageSrc: COLOR_SWATCHES,
    imageAlt: "service-1",
    title: "Investigative Reporting",
    shortDescription: "",
    description:
      "I dig deep to uncover hidden truths, bringing light to important issues through thorough research and thoughtful analysis",
  },

  {
    imageSrc: DECENT_WORK_IMAGE,
    imageAlt: "service-2",
    title: "Feature Writing",
    shortDescription: "",
    description:
      "From human interest stories to in-depth features, I bring narratives to life that captivate and connect with readers.",
  },
  {
    imageSrc: FLIP_HOEIZONATL_IMAGE,
    imageAlt: "service-3",
    title: "Content Creation",
    shortDescription: "",
    description:
      "I produce original, engaging content tailored to your audience, whether it’s blog posts, articles, or marketing materials.",
  },
  {
    imageSrc: LAYER_ONE_IMAGE,
    imageAlt: "service-3",
    title: "Copywriting & Editing",
    shortDescription: "",
    description:
      "With a keen eye for detail, I create polished, clear copy and edit existing content for clarity, style, and accuracy.",
  },
  {
    imageSrc: PICTUER_FOLER_IMAGE,
    imageAlt: "service-4",
    title: "Web Writing ",
    shortDescription: "",
    description:
      "I optimize content for search engines while ensuring it’s informative and enjoyable for readers, improving visibility and engagement online.",
  },
  {
    imageSrc: PRODUCTION_TIME_IMAGE,
    imageAlt: "service-5",
    title: "Social Media Strategy",
    shortDescription: "",
    description:
      "I craft compelling social media content that resonates with followers, boosts engagement, and strengthens your brand's online presence.",
  },
];

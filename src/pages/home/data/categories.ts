import PictureOne from "../assets/images/pic_1.jpg";
import PictureTwo from "../assets/images/pic_2.jpg";
import PictureThree from "../assets/images/pic_3.jpg";

interface CategoriesDataTypes {
  blurHash: string;
  title: string;
  content: string;
  image: string;
}

export const categoriesData: CategoriesDataTypes[] = [
  {
    blurHash: "3POg1jS*_L~V",
    title: "Meet someone with R4M date",
    content: `
Find someone you actually want to date, then go ahead and Make the First Move. Make genuine connections, vibe over what you both love, and most importantly, have fun.`,
    image: PictureOne,
  },

  {
    blurHash: "3NHCTK00?^VW",
    title: "Find new friends on R4M for friends",
    content: `

Meet someone like you. Or unlike you. Make new friends and find new things to do together — whether you’re home or away`,
    image: PictureTwo,
  },

  {
    blurHash: "3EE_,JIV00~o",
    title: "Make career moves with R4M bizz",
    content: `

Find friends with work benefits. Connect with other business professionals to find your next job, a mentor or even a whole new career.`,
    image: PictureThree,
  },
];

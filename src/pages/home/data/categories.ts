import PictureOne from "../assets/images/pic_1.jpg";
import PictureTwo from "../assets/images/pic_2.jpg";
import PictureThree from "../assets/images/pic_3.jpg";

interface CategoriesDataTypes {
  title: string;
  content: string;
  image: string;
}

export const categoriesData: CategoriesDataTypes[] = [
  {
    title: "Meet someone with R4M date",
    content: `
Find someone you actually want to date, then go ahead and Make the First Move. Make genuine connections, vibe over what you both love, and most importantly, have fun.`,
    image: PictureOne,
  },

  {
    title: "Find new friends on R4M for friends",
    content: `

Meet someone like you. Or unlike you. Make new friends and find new things to do together — whether you’re home or away`,
    image: PictureTwo,
  },

  {
    title: "Make career moves with R4M bizz",
    content: `

Find friends with work benefits. Connect with other business professionals to find your next job, a mentor or even a whole new career.`,
    image: PictureThree,
  },
];

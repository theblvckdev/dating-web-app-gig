import SlideImageOne from "../assets/images/slide_1.jpg";
import SlideImageTwo from "../assets/images/slide_2.jpg";
import SlideImageThree from "../assets/images/pic_2.jpg";

interface SliderDataTypes {
  image: string;
  heading: string;
  linkUrl?: string;
  content: string;
  blurHash: string;
}

export const sliderData: SliderDataTypes[] = [
  {
    image: SlideImageOne,
    heading: "Hannah met her now-husband on R4M",
    content: "A few months later, she met one of her bridesmads there, too",
    blurHash: "LEE{az00?t%g?;8|OrM_00%OM~s8",
  },

  {
    image: SlideImageTwo,
    heading: "Brian and Kaci",
    content:
      "Brian and Kaci were stationed overseas together-But they met on R4M",
    blurHash: "LTJtYYRPE2XS_NozadsmJ:xts.WB",
  },

  {
    image: SlideImageThree,
    heading: "Carene and You-Liang",
    content:
      "Before building their tiny house together Carene and You-Liang met on R4M, where You-Liang was drawn in by Carene travel pics.",
    blurHash: "L9K-a.xu%$t7Y8D%D%IU=wM|Dhxv",
  },
];

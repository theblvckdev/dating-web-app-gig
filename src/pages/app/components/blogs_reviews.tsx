import BlogPostImage from "../assets/images/blog_post_image.jpg";

interface BlogPosts {
  image: string;
  title: string;
  date: string;
}

const blogPosts: BlogPosts[] = [
  {
    image: BlogPostImage,
    title: `How to Work From Home With Your Mental Health Intact, According to Experts`,
    date: "May 20, 2020",
  },

  {
    image: BlogPostImage,
    title: `How to Work From Home With Your Mental Health Intact, According to Experts`,
    date: "May 20, 2020",
  },

  {
    image: BlogPostImage,
    title: `How to Work From Home With Your Mental Health Intact, According to Experts`,
    date: "May 20, 2020",
  },

  {
    image: BlogPostImage,
    title: `How to Work From Home With Your Mental Health Intact, According to Experts`,
    date: "May 20, 2020",
  },

  {
    image: BlogPostImage,
    title: `How to Work From Home With Your Mental Health Intact, According to Experts`,
    date: "May 20, 2020",
  },

  {
    image: BlogPostImage,
    title: `How to Work From Home With Your Mental Health Intact, According to Experts`,
    date: "May 20, 2020",
  },
];

const BlogReviews = () => {
  return (
    <>
      <section className="md:py-[6rem] py-[3rem] bg-gray-100">
        <div className="mx-auto max-w-6xl xl:px-0 lg:px-10 md:px-10 px-3">
          <h1 className="text-secondary-0 font-oswald font-semibold lg:text-6xl md:text-5xl text-3xl capitalize text-center">
            From the Buzz
          </h1>

          <div className="my-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {blogPosts.map((data, index) => {
                const { date, image, title } = data;

                return (
                  <div key={index} className="w-full">
                    <div className="h-[300px] w-full overflow-hidden">
                      <img
                        src={image}
                        className="w-full overflow-hidden object-cover"
                        alt={title}
                      />
                    </div>

                    <div className="mt-3">
                      <h4 className="text-gray-900 font-poppins text-lg font-semibold">
                        {title}
                      </h4>

                      <div className="mt-2 text-gray-500">{date}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogReviews;

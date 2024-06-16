const Button = ({
  bgVariant = "bg-white",
  color = "text-gray-900",
  linkURL,
  text = "Button text",
}: {
  bgVariant?: string;
  color?: string;
  linkURL?: string;
  text: string;
}) => {
  return (
    <>
      <a href={linkURL} className="no-underline outline-none">
        <button
          className={`outline-none py-3 px-7 rounded-full font-poppins ${bgVariant} ${color}`}
        >
          {text}
        </button>
      </a>
    </>
  );
};

export default Button;

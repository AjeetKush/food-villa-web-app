// Footer component for footer section
// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-200 text-gray-800 py-4 text-center">
      <p>
        Created By{" "}
        <a
          href="https://www.linkedin.com/in/ajeet-kushwaha/"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Ajeet Kushwaha
        </a>{" "}
        &copy; {year}{" "}
        <strong className="font-bold">
          Food<span className="text-yellow-500">Villa</span>
        </strong>
      </p>
    </div>
  );
};

export default Footer;

import IconButton from "./IconButton";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <IconButton
            link="https://www.linkedin.com/in/angus-h-design/"
            icon="./LinkedIn.svg"
          />
          <IconButton
            link="mailto:howdy@angushenderson.design"
            icon="./Email.svg"
          />
        </div>
        <div className="footer-right">
          <p className="caption">Design & build by me.</p>
          <p className="caption">© 2025 Angus Henderson Design.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

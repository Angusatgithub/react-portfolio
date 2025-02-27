interface IconButtonProps {
  icon: string;
  link: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, link }) => {
  return (
    <div className="icon-button">
      <a href={link}>
        <img src={icon} alt="icon button" />
      </a>
    </div>
  );
};

export default IconButton;

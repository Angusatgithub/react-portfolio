import "../styles/components/divider.css";

interface DividerProps {
  className: "left" | "right";
}

const Divider = ({ className }: DividerProps) => {
  return <div className={className}>
    <img src="./Divider_Left.svg" alt="divider" />
    <div className="orange-line"></div>
  </div>;
};

export default Divider;
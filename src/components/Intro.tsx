import { Link } from "react-router-dom";
import ButtonGroup from "./ButtonGroup";
import Spacer from "./Spacer";
import Overline from "./Overline";
import PhysicsAnimation from "./PhysicsAnimation";

const Intro = () => {
  return (
    <>
      <section className="intro-section">
        <div className="intro-img">
          <PhysicsAnimation />
        </div>
        <div className="intro">
          <Overline />
          <Spacer size="xlarge" />
          <h1>Howdy, I'm Angus.</h1>
          <h4 className="intro-subheader">
            I used to roast coffee and sling espresso.
          </h4>
          <h4 className="intro-subheader">
            These days I work on digital products used by millions of
            Australians. I love exploring crazy ideas, shaping abstract concepts
            into simple executions, and{" "}
            <Link to="/Silly">building silly little websites</Link>.
          </h4>
          <h4 className="intro-subheader">
            Right <Link to="/Now">now</Link>, I'm designing at{" "}
            <Link to="https://up.com.au/" target="_blank">
              Up
            </Link>
            .
          </h4>
          <Spacer size="medium" />
          <ButtonGroup />
        </div>
      </section>
    </>
  );
};

export default Intro;

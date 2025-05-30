import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import SimpleMarquee from "@/fancy/components/blocks/simple-marquee";

const Home = () => {
  return (
    <>
      <Intro />
      <SimpleMarquee useScrollVelocity={true} scrollAwareDirection={true} repeat={4} direction="left">
        <Divider className="left" />
      </SimpleMarquee>
      <SimpleMarquee useScrollVelocity={true} scrollAwareDirection={true} repeat={4} direction="right">
        <Divider className="left" />
      </SimpleMarquee>
      <Projects />
      <Footer />
    </>
  );
};

export default Home;

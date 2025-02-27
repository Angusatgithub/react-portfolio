import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects">
      <Project
        image={"./projectimages/Luxe.jpg"}
        title="Luxe Listings: Best of REA"
        job="Product Designer"
        link="https://customer.realestate.com.au/luxe/"
        linkText="Check it out"
        details={[
          "Luxe is a bundle of features aimed at customers moving high value properties. Cumulatively, these features are designed to provide the best possible outcome for the campaign.",
          "It'll match your listing with highly engaged buyers, provide unique audience insights, and even put your listing on the homepage of an app that get's ~10mil unique visits a month (some caveats on that last one 😉).",
          "I can't take credit for final deliverables – my role in this was ideating, shaping and validating the features that would become Luxe. Once the teams we needed help from got involved, I handed over each feature to the relevant designer and was just there to provide guidance so they hit the mark.",
          "And so, what problem does this solve, other than making more money?",
          "We actually have a funny problem where most customers use our current top tier product - making it not very top tier.",
          "Given we only really deliver new value to this tier, it leaves a bunch of lower customers in the lurch. So, adding this new tier is the first step in creating a simpler and fairer product suite.",
          "Giving customers a way to go up a level allows us to retire a now mid-range product, merge a few lower value products and redistribute the value we provide at each tier more evenly.",
          "Tune in later to see if it worked!",
        ]}
        accentcolor="purple"
      />
    </section>
  );
};

export default Projects;

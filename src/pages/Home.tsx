import Projects from '../components/Projects';

const Home = () => {
    return (
      <div className="home">
        <section className="intro">
          <h1>Howdy, I'm Angus.</h1>
          <p>I used to roast coffee and sling espresso.</p>
          <p>These days I work on digital experiences used by millions of Australians. I love diving into tricky problems, boiling down abstract ideas into a clear direction, and using tech to make things easier.</p>
        </section>
        <Projects />
      </div>
    );
  };
  
  export default Home;
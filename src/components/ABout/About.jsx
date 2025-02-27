import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About ITI</h3>
        <h2>Shaping Skilled Professionals for the Future</h2>
        <p>
          ITI is committed to equipping individuals with industry-relevant
          skills and practical knowledge to excel in technical and vocational
          fields. Through hands-on training and expert-led instruction, we
          prepare students to meet the demands of a rapidly evolving job market.
        </p>
        <p>
          Our dynamic learning environment fosters innovation, problem-solving,
          and collaboration, ensuring that students gain both technical
          expertise and critical thinking skills necessary for career success.
        </p>
        <p>
          With a comprehensive curriculum, state-of-the-art facilities, and a
          focus on real-world applications, ITI empowers students to become
          skilled professionals and contribute meaningfully to their industries.
          Join us in building a skilled workforce for the future.
        </p>
      </div>
    </div>
  );
};

export default About;

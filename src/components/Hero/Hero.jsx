import "./Hero.style.css";

const Hero = () => {
  return (
    <div id="hero" className="heroBackgroundImage">
      <div className="container">
        <div className="hero">
          <h1>Focused</h1>
          <h2>
            Tennis <span></span> Coaching
          </h2>
         
          <p>
                      Tennis SkillPro Academy stands out as the leading tennis training center in Pune.
                      We offer programs for all ages and skill levels.
          </p>
        </div>
      </div>

      <div className="heroStatisticsBackground">
        <div className="statisticsContainer">
          <div className="statistic">
            <span className="number">325</span>
            <p>Course</p>
          </div>
          <div className="statistic">
            <span className="number">405</span>
            <p>Work Out</p>
          </div>
          <div className="statistic">
            <span className="number">305</span>
            <p>Working Hour</p>
          </div>
          <div className="statistic">
            <span className="number">705</span>
            <p>Happy Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

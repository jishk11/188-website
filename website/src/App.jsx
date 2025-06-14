import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* Header Section */}
      <header className="header">
        <h1>RoboStack</h1>
        <div className="members">
          <a href="https://www.linkedin.com/in/savio-joseph-3a82aa290/" target="_blank" rel="noopener noreferrer">Savio Joseph</a> | 
          <a href="https://www.linkedin.com/in/jishankharbanda2005/" target="_blank" rel="noopener noreferrer"> Jishan Kharbanda</a> | 
          <a href="https://www.linkedin.com/in/-aditya-rao/" target="_blank" rel="noopener noreferrer"> Aditya Rao</a>
        </div>
        <div className="links-bar">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="nav-btn">Report</a>
          <a href="https://github.com/aditya-r123/RoboStack" target="_blank" rel="noopener noreferrer" className="nav-btn">Code</a>
          <a href="https://drive.google.com/file/d/1saefkOZ7JMBsR7isyB3fwOs-rRb12ery/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-btn">Demo</a>
        </div>
      </header>

      {/* Overview Section */}
      <section className="section overview">
        <h2>Project Overview</h2>
        <p>
        The goal of this project is to develop a control
policy for a RoboSuite robot to autonomously detect and
manipulate colored blocks in a simulated environment,
stacking them into towers based on color. The robot must
identify individual blocks by color, select appropriate
base blocks for each color category, and stack remaining
blocks of the same color on top of their respective bases.
Additionally, the robot must navigate the workspace
carefully, avoiding collisions with existing towers and
moving naturally and efficiently.
        </p>
      </section>

      {/* Gallery Section */}

      <section className="section gallery">
      <h2>Project Images</h2>
        <div className="gallery-row">
          {[
            { id: 1, src: "/custom.png", alt: "Our Custom Environment" },
            { 
              id: 2, 
              src: "/milestone_2.png", 
              alt: "Differentiating blocks by color and selecting base blocks for each color" 
            },

            { 
              id: 3, 
              src: "/3-3.png", 
              alt: "3x3 stacking, one color per stack" 
            },
            { 
              id: 34, 
              src: "/2-5.png", 
              alt: "5x2 stacking, one color per stack" 
            },
            { 
              id: 5, 
              src: "/alternating.png", 
              alt: "2x4 stacking, red-green alternating" 
            }
          ].map((item) => (
            <div className="gallery-item" key={item.id}>
              <img src={item.src} alt={item.alt} />
              <div className="caption">{item.alt}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline Section */}
{/* Results Section (Replaces Pipeline Section) */}
{/* Results Section (Replaces Pipeline Section) */}
<section className="section results-summary">
  <h2>Experimental Results</h2>
  <p>
    We evaluated across multiple stacking scenarios to test <strong>generalization</strong>, <strong>precision</strong>, and <strong>robustness</strong>.
    In our <strong>baseline task</strong>, the robot successfully built <strong>three color-sorted towers</strong> using <strong>9 blocks</strong> in approximately <strong>48 seconds</strong>.
    For more complex tasks like <strong>alternating color stacks</strong> (2 towers, 8 blocks), the robot maintained stability and completed the task in <strong>47 seconds</strong>.
    It also performed well when building <strong>5 towers</strong> of <strong>2 blocks</strong> each, finishing in just <strong>29 seconds</strong>.
    The most challenging task was building a <strong>single 10-block tower</strong>, which exposed the system's limits, with success up to <strong>6–7 blocks</strong> before instability from minor misalignments led to collapse.
    These results highlight both the strengths and areas for improvement in our stacking policy.
  </p>
</section>



      {/* Results Section */}
      <section className="section results">
  <h2>Visual Results</h2>
  <p>
    Our experiments demonstrate the effectiveness of RoboStack in various assembly scenarios.
    Below are some of the visuals from the various experiments we ran.
  </p>

  <div className="video-row">
    <div className="video-col">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8q8GDTlBrT4"
        title="Demo: Task 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-caption">Demo: Task 1</div>
    </div>

    <div className="video-col">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/aTthydXvJUk"
        title="Demo: Task 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-caption">Demo: Task 2</div>
    </div>
  </div>

  <div className="video-row">
    <div className="video-col">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3"
        title="Demo: Task 3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-caption">Demo: Task 3</div>
    </div>

    <div className="video-col">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_4"
        title="Demo: Task 4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-caption">Demo: Task 4</div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <div>RoboStack &copy; 2025 | CS 188: Introduction to Robotics</div>
      </footer>
    </div>
  );
}

export default App;

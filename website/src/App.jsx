import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* Header Section */}
      <header className="header">
        <h1>TurboStack</h1>
        <div className="members">
          <a href="https://www.linkedin.com/in/savio-joseph-3a82aa290/" target="_blank" rel="noopener noreferrer">Savio Joseph</a> | 
          <a href="https://www.linkedin.com/in/jishankharbanda2005/" target="_blank" rel="noopener noreferrer"> Jishan Kharbanda</a> | 
          <a href="https://www.linkedin.com/in/-aditya-rao/" target="_blank" rel="noopener noreferrer"> Aditya Rao</a>
        </div>
        <div className="links-bar">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="nav-btn">Report</a>
          <a href="https://github.com/aditya-r123/RoboStack" target="_blank" rel="noopener noreferrer" className="nav-btn">Code</a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="nav-btn">Demo</a>
        </div>
      </header>

      {/* Overview Section */}
      <section className="section overview">
        <h2>Project Overview</h2>
        <p>
          Our project goal is for the RoboSuite robot to detect blocks based on their color, and stack them such that each tower contains only blocks of a certain color. We also aim to align each tower perfectly, such that each block is aligned based on rotation and position. When the robot arm is moving around the environment, we need to also ensure it doesn't knock any of the towers and moves in a natural yet careful way.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="section gallery">
        <div className="gallery-row">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div className="gallery-item" key={n}>
              <img src="/images/Flag_of_Mexico.svg" alt={`Example ${n}`} />
              <div className="caption">Example {n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="section pipeline">
        <h2>TurboStack Pipeline</h2>
        <img src="https://via.placeholder.com/600x180?text=Pipeline+Diagram" alt="Pipeline Diagram" className="pipeline-img" />
        <p>
          Overview of the TurboStack pipeline. This section describes the main steps in our approach, from perception to action execution, with modular components for easy adaptation.
        </p>
      </section>

      {/* Results Section */}
      <section className="section results">
        <h2>Results & Experiments</h2>
        <img src="https://via.placeholder.com/600x120?text=Results+Table" alt="Results Table" className="results-table" />
        <p>
          Our experiments demonstrate the effectiveness of TurboStack in various assembly scenarios. The table above summarizes key performance metrics.
        </p>
        <div className="video-row">
          <div className="video-col">
            <video width="320" height="180" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-caption">Demo: Task 1</div>
          </div>
          <div className="video-col">
            <video width="320" height="180" controls>
              <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-caption">Demo: Task 2</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>TurboStack &copy; 2025 | CS 188: Introduction to Robotics</div>
      </footer>
    </div>
  );
}

export default App;

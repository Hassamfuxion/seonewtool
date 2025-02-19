import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      {/* Add the SEO Ranking Heading */}
      <h1 style={{ textAlign: 'center', color: '#ffffff', marginBottom: '20px', fontFamily: 'Lato, sans-serif', fontSize: '35px', padding: '30px' }}>
        Monitor Your SEO Performance
      </h1>
      {/* Center-aligned and resized card */}
      <div className="container-card-charts" style={{ margin: '0 auto', width: '95%', height: '600px', }}>
        <div className="card-charts">
          {/* Main Texts Section */}
          <div className="main-texts">
            <div className="title">SEO Performance: Fluctuating</div>
            <div className="change">Up & Down Trends</div>
          </div>
          {/* Stock Exchange-like Animated Graph */}
          <div className="charts-lines">
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* Background Grid Lines */}
              <line x1="0" y1="50" x2="800" y2="50" stroke="#ffffff20" strokeWidth="1" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#ffffff20" strokeWidth="1" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#ffffff20" strokeWidth="1" />
              <line x1="0" y1="200" x2="800" y2="200" stroke="#ffffff20" strokeWidth="1" />
              <line x1="0" y1="250" x2="800" y2="250" stroke="#ffffff20" strokeWidth="1" />
              <line x1="0" y1="300" x2="800" y2="300" stroke="#ffffff20" strokeWidth="1" />
              <line x1="0" y1="350" x2="800" y2="350" stroke="#ffffff20" strokeWidth="1" />
              {/* Red Line (Going Down) */}
              <path
                d="M 0 50 C 100 100, 200 150, 300 200 S 400 250, 500 200 S 600 150, 700 100 S 800 50"
                fill="none"
                stroke="#ff4d4d"
                strokeWidth="2"
                strokeLinecap="round"
                className="animated-line-down"
              />
              {/* Green Line (Going Up) */}
              <path
                d="M 0 350 C 100 300, 200 250, 300 200 S 400 150, 500 200 S 600 250, 700 300 S 800 350"
                fill="none"
                stroke="#4dff4d"
                strokeWidth="2"
                strokeLinecap="round"
                className="animated-line-up"
              />
            </svg>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'); /* Import Lato Font */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
  font-family: 'Lato', sans-serif; /* Apply Lato Font Globally */
  .container-card-charts {
    position: relative;
    width: 95%; /* Increased width */
    height: 600px; /* Increased height */
    background: linear-gradient(
      to top,
      rgba(255, 255, 255),
      rgba(255, 255, 255, 0.1)
     
    );
    border-radius: 32px;
    padding: 30px; /* Increased padding for better spacing */
    box-shadow: 0 0px 80px -10px rgba(255, 255, 255, 0.15);
  
  }
  .container-card-charts::before {
    position: absolute;
    content: "";
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background-color: #777777;
    z-index: -10;
    filter: blur(70px);
  }
  .card-charts {
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, #1b1b1b, #000000);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 30px; /* Increased padding for better spacing */
  }
  .charts-lines {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .charts-lines svg {
    width: 100%;
    height: 100%;
    overflow: visible; /* Ensure lines are not clipped */
  }
  .main-texts {
    display: flex;
    flex-direction: column;
    font-weight: 500;
  }
  .main-texts .title {
    background-image: linear-gradient(to top left, #92400e, #f9d86d, #a6a6a6);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 32px; /* Increased font size */
    font-weight: 700; /* Bold title */
  }
  .main-texts .change {
    background-image: linear-gradient(to right, #8e1414, #ffffff, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 24px; /* Increased font size */
    margin-top: 15px; /* Space between title and change */
  }
  /* Animation for the red line (going down) */
  .animated-line-down {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw-down 6s ease-in-out infinite;
  }
  /* Animation for the green line (going up) */
  .animated-line-up {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw-up 6s ease-in-out infinite;
  }
  @keyframes draw-down {
    0% {
      stroke-dashoffset: 2000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes draw-up {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -2000;
    }
  }
  /* Grid Lines Styling */
  .charts-lines line {
    stroke: #ffffff20;
    stroke-width: 1;
  }
`;

export default Card;
import React from 'react';
import styled from 'styled-components';

const DashboardPage = () => {
  return (
    <StyledWrapper>
      {/* SEO Ranking Heading */}
      <h1 className="heading">Check Your SEO Rankings</h1>

      {/* Center-Aligned Card */}
      <div className="container-card-charts">
        <div className="card-charts">
          {/* Tags Section */}
          <div className="tags-card">
            <div className="radio">
              <input type="radio" id="1H" name="timeframe" />
              <label htmlFor="1H" className="name">1H</label>
            </div>
            <div className="radio">
              <input type="radio" id="1D" name="timeframe" />
              <label htmlFor="1D" className="name">1D</label>
            </div>
            <div className="radio">
              <input type="radio" id="1W" name="timeframe" />
              <label htmlFor="1W" className="name">1W</label>
            </div>
            <div className="radio">
              <input type="radio" id="1M" name="timeframe" />
              <label htmlFor="1M" className="name">1M</label>
            </div>
            <div className="radio">
              <input type="radio" id="ALL" name="timeframe" />
              <label htmlFor="ALL" className="name">ALL</label>
            </div>
          </div>

          {/* Main Texts Section */}
          <div className="main-texts">
            <div className="title">BTC 70K</div>
            <div className="change">-2.92%</div>
          </div>

          {/* Chart Lines Section */}
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

// Styled Components
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
  font-family: 'Lato', sans-serif;

  .heading {
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
    font-size: 48px;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .container-card-charts {
    position: relative;
    width: 80%;
    max-width: 1200px;
    height: 500px;
    background: linear-gradient(to top, rgba(255, 255, 255), rgba(255, 255, 255, 0.1));
    border-radius: 32px;
    padding: 30px;
    box-shadow: 0 0px 80px -10px rgba(255, 255, 255, 0.15);
    margin: 0 auto;
  }

  .card-charts {
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, #1b1b1b, #000000);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 30px;
  }

  .tags-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .tags-card .radio {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    border-radius: 12px;
    color: #a7a7a7;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  .tags-card .radio:hover {
    color: #ffffff;
  }

  .tags-card .radio input {
    display: none;
  }

  .tags-card .radio .name {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    z-index: 1;
  }

  .tags-card .radio input:checked + .name {
    color: #ffffff;
    background: linear-gradient(15deg, #898989, #181818, #000000);
    transform: scale(1.1);
  }

  .tags-card .radio input:checked + .name::before {
    position: absolute;
    background-color: #212121;
    content: "";
    inset: 1px;
    z-index: -1;
    border-radius: 12px;
  }

  .main-texts {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-weight: 500;
  }

  .main-texts .title {
    background-image: linear-gradient(to top left, #92400e, #f9d86d, #a6a6a6);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 24px;
    font-weight: 700;
  }

  .main-texts .change {
    background-image: linear-gradient(to right, #8e1414, #ffffff, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 18px;
    margin-top: 10px;
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
    overflow: visible;
  }

  .charts-lines line {
    stroke: #ffffff20;
    stroke-width: 1;
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

  /* Responsive Design */
  @media (max-width: 768px) {
    .container-card-charts {
      width: 90%;
      height: 400px;
    }

    .tags-card .radio {
      width: 50px;
      font-size: 10px;
    }

    .main-texts .title {
      font-size: 20px;
    }

    .main-texts .change {
      font-size: 16px;
    }

    .charts-lines {
      height: 200px;
    }
  }
`;

export default DashboardPage;
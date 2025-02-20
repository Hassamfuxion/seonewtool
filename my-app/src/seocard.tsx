import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper style={{background:'linear-gradient(744deg,rgb(42, 2, 117),rgb(0, 0, 0) 60%,rgb(0, 0, 0))',color:'white'}}>
      {/* SEO Ranking Heading */}
      <h1 style={{
        textAlign: 'center',
        color: '#ffffff', // White text
        marginBottom: '40px',
        fontFamily: 'Lato, sans-serif',
        fontSize: '30px',
     
        WebkitBackgroundClip: 'text',
        
      }}>
        Explore SEO New Tools
      </h1>

      {/* Center-Aligned Card */}
      <div className="container-card-charts" >
        <div className="outer">
          <div className="dot" />
          <div className="card" >
            <div className="ray" />
            {/* Updated Content */}
            <div className="main-texts">
              <div className="title">Keyword Tracker</div>
              <div className="subtitle">Monitor rankings in real-time</div>
            </div>
            <div className="line topl" />
            <div className="line leftl" />
            <div className="line bottoml" />
            <div className="line rightl" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'); /* Import Lato Font */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
  font-family: 'Lato', sans-serif;

  .container-card-charts {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px; /* Limit maximum width for responsiveness */
    margin: 0 auto; /* Center the card horizontally */
  }

  .outer {
    width: 80%; /* Increased width for horizontal layout */
    max-width: 800px; /* Limit maximum width */
    height: 400px; /* Fixed height */
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #444444,rgb(13, 12, 13));
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
  }

  
  .main-texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }

  .main-texts .title {
    font-weight: bolder;
    font-size: 3rem; /* Adjusted font size */
    background: linear-gradient(45deg,rgb(83, 0, 238) 4%, #fff, rgb(83, 0, 238));
    background-clip: text;
    color: transparent;
    margin-bottom: 10px;
  }

  .main-texts .subtitle {
    font-size: 1.5rem;
    color: #a7a7a7;
    margin-top: 0;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }

  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }

  .bottoml {
    bottom: 6%;
  }

  .leftl {
    left: 0%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }

  .rightl {
    right: 0%;
    width: 1px;
    height: 100%;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .outer {
      width: 90%; /* Reduce width on smaller screens */
      height: 300px; /* Reduce height */
    }

    .main-texts .title {
      font-size: 2rem; /* Reduce font size */
    }

    .main-texts .subtitle {
      font-size: 1rem; /* Reduce font size */
    }

    .ray {
      width: 350px; /* Reduce ray width */
      height: 70px; /* Reduce ray height */
    }
  }
`;

export default Card;
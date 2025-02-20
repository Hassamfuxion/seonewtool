import React from 'react';
import styled from 'styled-components';

// Card Component
const Card = ({ title, role, icon }: { title: string; role: string; icon: string }) => {
  return (
    <StyledWrapper >
      <div className="e-card playing">
        {/* Waves */}
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />

        {/* Content */}
        <div className="infotop">
          {/* Icon */}
          <div className="icon-container">
            <img src={icon} alt="Icon" className="icon" />
          </div>

          {/* Title */}
          <div className="title">{title}</div>

          {/* Role */}
          <div className="role">{role}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled Wrapper
const StyledWrapper = styled.div`
  .e-card {
    margin: 100px auto;
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    width: 300px; /* Increased width */
    height: 400px; /* Increased height */
    border-radius: 16px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 600px; /* Slightly larger wave */
    height: 800px; /* Slightly larger wave */
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
  }

  .icon-container {
    display: flex;
    justify-content: center; /* Center the icon horizontally */
    align-items: center; /* Center the icon vertically */
    height: 100px; /* Fixed height for the icon container */
    margin-bottom: 20px; /* Space between icon and title */
  }

  .icon {
    width: 80px; /* Set a fixed size for the GIF */
    height: 80px; /* Set a fixed size for the GIF */
    object-fit: cover; /* Ensure the GIF scales properly */
  }

  .infotop {
    text-align: center;
    position: absolute;
    top: 30%; /* Adjusted positioning */
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
  }

  .title {
    font-size: 24px; /* Larger font size for title */
    font-weight: 600;
    margin-bottom: 10px; /* Space between title and role */
  }

  .role {
    font-size: 18px; /* Font size for role */
    color: lightgray;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 250px; /* Adjusted wave positioning */
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Cards Page
const CardsPage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#5580E9] to-[#8860D0] text-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-12">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <Card
            title="Keyword Tracking"
            role="Monitor rankings in real-time."
            icon="assets/icongif46.gif" // First icon
          />
          {/* Card 2 */}
          <Card
            title="Device Analysis"
            role="Optimize for mobile, tablet, and desktop."
            icon="assets/icongif47.gif" // Second icon
          />
          {/* Card 3 */}
          <Card
            title="Location Insights"
            role="Get location-specific ranking data."
            icon="assets/icongif45.gif" // Third icon
          />
        </div>
      </div>
    </section>
  );
};

export default CardsPage;
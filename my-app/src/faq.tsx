import React, { useState } from 'react';
import styled from 'styled-components';

// Define the type for FAQ data
interface FAQItemProps {
  question: string;
  answer: string;
}

// FAQ Data (Demo Details)
const faqData: FAQItemProps[] = [
  {
    question: "What is Highlight Curation?",
    answer:
      "Highlight Curation works autonomously through artificial intelligence and hundreds of micro-services.",
  },
  {
    question: "How does it work?",
    answer:
      "It uses advanced algorithms to analyze data and provide insights into your content performance.",
  },
  {
    question: "Is it customizable?",
    answer:
      "Yes, you can customize the curation process based on your specific needs and preferences.",
  },
  {
    question: "Can I integrate it with my website?",
    answer:
      "Absolutely! Highlight Curation provides seamless integration options for websites and apps.",
  },
];

const FAQPage = () => {
  return (
    <StyledWrapper>
      {/* FAQ Heading */}
      <h1 style={{
  textAlign: 'center',
  marginBottom: '40px',
  fontFamily: 'Lato, sans-serif',
  fontSize: '48px',
  background: 'linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)', // Gradient background
  WebkitBackgroundClip: 'text', // Clip the gradient to the text
  backgroundClip: 'text', // Standard property for modern browsers
  color: 'transparent', // Make the text transparent to show the gradient
}}>
  Frequently Asked Questions
</h1>
       

      {/* FAQ Section */}
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </StyledWrapper>
  );
};

// FAQ Item Component
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledFAQItem onClick={() => setIsOpen(!isOpen)}>
      <div className="question">
        <span>{question}</span>
        <span className="icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="answer">{answer}</p>}
    </StyledFAQItem>
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
  background: linear-gradient(to bottom-right, #C1C8E4, #F9FAFB); /* Gradient Background */
  font-family: 'Lato', sans-serif;

  .faq-container {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    gap: 20px; /* Space between items */
    width: 90%; /* Full width of the container */
    max-width: 1200px; /* Limit maximum width */
  }
`;

const StyledFAQItem = styled.div`
  --transparent-bg: rgba(255, 255, 255, 0.8);
  --text-color: #333333;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  width: 100%; /* Full width */
  background-color: var(--transparent-bg);
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* Frosted glass effect */
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    color: var(--text-color);
    font-weight: bold;
  }

  .icon {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color);
  }

  .answer {
    font-size: 0.9rem;
    color: var(--text-color);
    line-height: 1.5;
    margin-top: 0.5rem;
  }
`;

export default FAQPage;
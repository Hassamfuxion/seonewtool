import React from "react";
import styled from "styled-components";

// Styled Input Component (for URL)
export const StyledInput = ({ placeholder, type = "text", value, onChange, name }) => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input
          placeholder={placeholder}
          type={type}
          required
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </StyledWrapper>
  );
};

// Styled Textarea Component (for Keywords)
export const StyledTextarea = ({ placeholder, rows = 3, value, onChange, name }) => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <textarea
          placeholder={placeholder}
          rows={rows}
          required
          value={value}
          onChange={onChange}
          name={name}
          className="styled-textarea"
        />
      </div>
    </StyledWrapper>
  );
};

// Styled Select Component (for Location)
export const StyledSelect = ({ options, value, onChange, name }) => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <select
          value={value}
          onChange={onChange}
          name={name}
          className="styled-select"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  /* From Uiverse.io by Smit-Prajapati */
  .input-container {
    display: flex;
    align-items: center;
    background: linear-gradient(173deg, rgb(0, 0, 0) 0%, #14161a 100%);
    border-radius: 1rem;
    box-shadow:
      10px 10px 20px rgb(112, 1, 177),
      -10px -10px 40pxrgb(163, 0, 228);
    padding: 0.3rem;
    gap: 0.3rem;
  }

  .input-container input,
  .input-container textarea,
  .input-container select {
    border-radius: 0.8rem;
    background:rgb(1, 36, 100);
    box-shadow:
      inset 5px 5px 10px #0e1013,
      inset -5px -5px 10px #383e4b;
    width: 100%;
    padding: 1rem;
    border: none;
    color: white;
    transition: all 0.2s ease-in-out;
    resize: none; /* Prevent resizing for textarea */
  }

  .input-container input:focus,
  .input-container textarea:focus,
  .input-container select:focus {
    border: 1px solid rgb(132, 0, 255);
    outline: none;
    box-shadow:
      inset 0px 0px 10px rgba(114, 89, 255, 0.5),
      inset 0px 0px 10px rgba(202, 88, 255, 0.5);
  }
`;
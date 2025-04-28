// Purpose: Make an error message that pops up when the entered dates are invalid.
// Created by: Erin Cheng

"use client"; // Ensures this component is treated as a client component in Next.js

import React from 'react';
import styled from 'styled-components';

// Define the props expected by the ErrorMessage component
interface ErrorMessageProps {
    message: string; // The error message text to display
    onClose?: () => void; // Optional callback to close/dismiss the error message
}

// Styled component for the error message container
const ErrorContainer = styled.div`
   background-color: #ffe5e5;
   color: #b00020;
   border: 1px solid #b00020;
   border-radius: 4px;
   padding: 12px 40px 12px 16px;
   margin: 12px 0;
   position: relative;
   font-family: Tahoma, serif;
`;

// Styled component for the close ("×") button
const CloseButton = styled.button`
   position: absolute;
   right: 8px;
   top: 8px;
   background: transparent;
   border: none;
   color: #b00020;
   font-size: 16px;
   cursor: pointer;
   font-family: Tahoma, serif;
`;

// Functional component to render an error message with an optional close button
// Display the error message. If onClose is provided, render the close button
// Includes unicode multiplication sign for close.
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => (
    <ErrorContainer>
        <span>{message}</span>
        {onClose && (
            <CloseButton onClick={onClose} aria-label="Close error message">
                ×
            </CloseButton>
        )}
    </ErrorContainer>
);

// Export the component for use elsewhere
export default ErrorMessage;
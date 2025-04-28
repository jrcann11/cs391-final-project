"use client";

import React from 'react';
import styled from 'styled-components';


interface ErrorMessageProps {
    message: string;
    onClose?: () => void;
}


const ErrorContainer = styled.div`
   background-color: #ffe5e5;
   color: #b00020;
   border: 1px solid #b00020;
   border-radius: 4px;
   padding: 12px 16px;
   margin: 12px 0;
   position: relative;
   font-family: Tahoma, serif;
`;


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


export default ErrorMessage;
import styled from "styled-components";

export const TimeDisplay = styled.p`
    font-size: 18px;
    color: #444;
    text-align: center;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    background: linear-gradient(45deg, #ff7e5f, #feb47b);
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 250px;
    margin: 24px auto 0;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 480px) {
        font-size: 16px;
        padding: 8px 15px;
        max-width: 80%;
    }
`

import styled from "styled-components";

export const Container = styled.div`
    background:linear-gradient(135deg, #e3f2fd, #ffffff);
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    width: 320px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #dee2e6;

    &:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        transform: translateY(-4px);
    }

    @media (max-width: 400px) {
        width: 90%;
    }
`

export const NextTrainsText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    margin: 20px 0;
`

import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px 0;
    font-size: 16px;
    color: #333;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: 400px;

    li {
        padding: 0 16px;
        border-bottom: 1px solid #dee2e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease-in-out;
        background: #ffffff;

        &:nth-child(even) {
            background: #f1f3f5;
        }

        &:hover {
            background: #e3f2fd;
            transform: scale(1.05)
        }
    }

    li:last-child {
        border-bottom: none;
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`


export const TrainDestination = styled.p`
    display: flex;
    justify-content: space-between;
    flex: 50%;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
`

export const TrainArrival = styled.p`
    flex: 50% ;
    text-align: right;  
    font-family: 'Arial', sans-serif;
    font-weight: bold; 
`

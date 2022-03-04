import styled from "styled-components";

export const Spinner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: auto;
    border-width: 10px;
    border-style: solid double solid;
    border-color: #d34a43;
    animation: spin 1s linear infinite;
    position: relative;

    @keyframes spin {
        0% {
            transform: rotate(0deg) scale(1);

        }
        50% {
            transform: rotate(180deg) scale(1.2);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }
`

import Styled from "styled-components";

export const Container = Styled.div`
    position: absolute;
    width: 400px;
    display: flex;
    flex-direction: column;
    top: ${({ position }) =>
      `${position.top + document.scrollingElement.scrollTop - 100}px;`};
    left: ${({ position }) => `${position.left - 30}px;`};
    z-index: 2;
    cursor: pointer;
    box-shadow: 1px 1px 20px 0px black;
    animation: slide-up .3s ease;
    & video{
        border-radius: 8px 8px 0 0;
        width: 100%;
        margin: 0;
    }
    @keyframes slide-up {
        0%{
            ${({ position }) => `${position.top}px;`};
            transform: scale(.9);
        }
        100% {
            transform: scale(1);
        }
    }
`;

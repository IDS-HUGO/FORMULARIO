import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #0308a3;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: 700;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:hover {
        background-color: #ff0000;
    }
`;

function Button({title, onClick}){
    return(
        <ButtonStyled onClick={onClick}>{title}</ButtonStyled>
    )
}

export default Button;
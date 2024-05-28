import styled from "styled-components";

const TextStyled = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: #000000; 
    font-size: 18px;
`;

function Text(props){
    return (
        <TextStyled>{props.text}</TextStyled>
    );
}

export default Text;

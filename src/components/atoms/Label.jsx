import styled from "styled-components";

const LabelStyled = styled.label`
    font-weight: 600;
    font-size: 15px;
    text-align: center;
`;

function Label(props) {
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;
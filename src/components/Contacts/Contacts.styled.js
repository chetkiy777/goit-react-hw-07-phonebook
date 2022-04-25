import styled from "@emotion/styled";

export const ContactsList = styled.ul`
    margin-right: 40px;
`

export const ContactsItem = styled.li`
    margin-top: 10px;

    button {
        margin-left: 10px;
        border: none;
        background-color: #000;
        color: #fff;

        :hover,
        :focus {
            background-color: #fff;
            color: #000;
            border: 2px solid magenta;
        }
    }
`
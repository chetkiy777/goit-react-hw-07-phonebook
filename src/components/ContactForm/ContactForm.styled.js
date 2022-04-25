import styled from "@emotion/styled";

export const AddContactForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #000;
    width: 250px;

    label {
        display: block;
        font-size: 20px;
    }

    input {
        display: block;
        margin-top: 10px;
        margin-bottom: 20px;
    }
`

export const ContactFormSubmitButton = styled.button`
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 3px;
    display: inline-block;
    height: 20px;
    width: 90px;
`
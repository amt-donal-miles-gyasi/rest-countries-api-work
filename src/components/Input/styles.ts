import styled from "styled-components";

export const InputArea = styled.section<{theme: string}>`
    display: flex;
    width: 1024px;
    margin: auto;
    justify-content: space-between;
    padding: 40px 0px;
    transition: all ease 0.2s;

    input {
        height: 50px;
        width: 450px;
        border-radius: 2px;
        padding: 0px 30px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0;
        font-size: 14px;
        background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 52%)' : '#FFF'};
        

        ::placeholder {
            color: #ccc;
            /* padding-left: px; */
        }
        
    }
    .icon{
        height: 15px;
        width: 15px;
        /* margin-right:-20px ; */
        position: relative;
        bottom: -32px;
        left: 7px;
    }
    

        select {
            border-radius: 2px;
            padding: 0px 20px;
            border: none;
            width: 180px;
            height: 50px;
            box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
            outline: none; 
            margin-top: 10px;
            font-size: 14px;
            appearance: none;
            background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
            color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
            order: 1;
            
            option :hover{
                background-color: blue;
            }
        }
        .down{
            height: 5px;
            width: 5px;
            position: relative;
            position: absolute;
            right: 200px;
            top: 155px;

        }  
    

    @media(max-width: 1024px) {
        & {
            width: auto;
            padding: 20px;
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            input {
                width: 97%
            }
            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }
`
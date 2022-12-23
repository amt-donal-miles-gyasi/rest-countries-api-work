import styled from "styled-components";

export const CountryPage = styled.main`
    min-height: calc(100vh - 90px);
    background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 98%)' : 'rgb(32, 45, 54)'};
    transition: all ease 0.2s;
    .container {
        width: 1024px;
        margin: auto;
        padding: 40px 0px;

        .loading {
            min-height: 100vh;
            color: ${props => props.theme === 'light' ? '' : '#FFF'};
        }
    }

    .back--button {
        text-decoration: none;
        color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
        background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        width: 120px;
        height: 40px;
        box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
        
        .back{
            padding-right: 7px;
            margin-bottom: -4px;
        }
    }

    @media(min-width: 768px) and (max-width: 1023px){
        & {
            padding: 20px;
        }
        .container {
            width: auto
        }
    }

    @media(max-width: 767px) {
        & {
            padding: 20px;
        }
        .container {
            width: auto;
            padding: 20px 0px;
        }
        .back--button{
            width: 80px;
            height: 30px;
            font-size: small;
            margin-bottom: 20px;
        }
    }

`
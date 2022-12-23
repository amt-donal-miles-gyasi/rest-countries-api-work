import styled from "styled-components";

export const Header = styled.header<{theme: string}>`
    height: 90px;
    background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
    color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
    transition: all ease 0.2s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: all ease 0.2s;
    
    .container {
        display: flex;
        width: 1024px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        .theme{
            cursor: pointer;
            font-size: 16px;
        }
        
        .moon{
            padding: 0px 10px;
            margin-bottom: 2px;
        }
        
    }

    @media(max-width: 1024px) {
        &{
            padding: 0px 20px;

            .container {
                width: auto
            }
        }
    }

    @media(max-width: 767px) {
        
        .container {
            height: 100%;
            h1 {
                font-size: 17px;
            }
            p {
                font-size: 14px
            }
        }
    }
`
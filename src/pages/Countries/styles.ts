import styled from "styled-components";

export const CountriesArea = styled.main<{theme: string}>`
    min-height: calc(100vh - 90px);
    background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};
    transition: all ease 0.2s;
    .countries {
        display: grid;
        width: 1024px;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;

        .loading {
            color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
        }
    }

    
    

    @media(max-width: 1024px) {
        .countries {
            width: auto;
            padding: 0px 20px;
        }
    }

    @media(max-width: 768px) {
        .countries {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 440px) {
        .countries {
            grid-template-columns: 1fr;
        }
    }
`
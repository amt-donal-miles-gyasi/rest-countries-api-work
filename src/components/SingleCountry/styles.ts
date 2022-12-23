import styled from "styled-components";

export const CountryData = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
    transition: all ease 0.2s;

    img {
        width: 440px;
        height: 300px;
    }

    .data--area {
        /* display: flex;
        flex-direction: column;
        justify-content: center; */


        h1 {
            margin: 0px;
        }
    
        .data--firstArea {
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            .left{
                justify-content: flex-start;
                flex-wrap: wrap;
                padding-right: 60px;
            }
            .right{
                justify-content: flex-start;
                flex-wrap: wrap;
            }
            
            p {
                margin: 5px 0px;
                span {
                    font-weight: bold
                }
            }
            
            .language {
                font-weight: normal;
                margin-right: 5px
            }
        }

        .border--area {
            margin-top: 20px;
            p {
                font-weight: bold;
                width: 200px;
                margin-top: 33px;
                
            }
            display: flex;

            .borders {
                display: grid;
                grid-template-columns: repeat(3, auto);
                grid-gap: 5px;
                width: 100%;
                margin-top: 30px;
                a {
                    text-decoration: none;
                    color: ${props => props.theme === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'};
                    background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
                    display: flex;
                    min-height: 25px;
                    max-height: 30px;
                    border-radius: 3px;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    font-size: 13px;
                    flex: 1;
                    font-weight: 300;
                    box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
                }
            }
        }
    }

    @media(min-width: 740px) and (max-width: 1023px) {
        & {
            img {
                width: 340px;
                height: 200px;
            }

            .data--area {
                h1 {
                    font-size: 28px
                }

                .data--firstArea {
                    p, span {
                        font-size: 14px;
                    }
                    .left{
                        padding-right: 30px;
                    }
                }

                .border--area {
                    p, span, a {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media(min-width: 618px) and (max-width: 739px) {
        img {
            width: 280px;
            height: 180px;
        }
        .data--area {
            h1 {
                font-size: 28px
            }

            .data--firstArea {
                p, span {
                    font-size: 14px;
                }
            }

            .border--area {
                p, span, a {
                    font-size: 14px;
                }
            }
        }
    }

    @media(min-width: 441px) and (max-width: 617px) {
        & {
            grid-template-columns: 1fr;

            img {
                width: 280px;
                height: 180px;
                margin: auto;
            }

            .data--area {
                width: 280px;
                margin: auto;
                margin-top: 30px;

                .data--firstArea {
                    grid-template-columns: 1fr;

                    .topLevel {
                        margin-top: 40px
                    }
                }

                .border--area {
                    display: block;
                    .borders {
                        grid-template-columns: repeat(3, 1fr)
                    }
                }
            }
        }
    }

    @media(max-width: 440px) {
        & {
            grid-template-columns: 1fr;

            img {
                width: 280px;
                height: 180px;
                margin: auto;
            }

            .data--area {
                width: 280px;
                margin: auto;
                margin-top: 30px;

                h1 {
                    font-size: 17px
                }

                .data--firstArea {
                    display: block;
                    p, span {
                        font-size: 12px;
                    }
                    

                    .topLevel {
                        margin-top: 40px
                    }
                }

                .border--area {
                    display: block;
                    .borders {
                        grid-template-columns: repeat(3, 1fr)
                    }
                    p, span, a {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`
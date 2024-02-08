import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #f00, #00f);
    color: white;


    .container {
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }
        .logo {
            flex: 1;
            img {
                height: 50px;
            }
        }
    
        nav{
            display: flex;


            ul {
                display: flex;
            }
                li {
                    list-style: none;
                    margin-left: 20px;        
                    a {
                        color: white;
                        text-decoration: none;   

                        &:hover {
                            color: #F5BB00;
                    }     
                }
            }

            .avatar {
                display: flex;
                align-items: center;
                img {
                    width: 35px;                    
                    border-radius: 20px;
                    margin-left: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                }
                label {
                    font-size: 14px;
                    cursor: pointer;
                    color: #ccc;
                }

                @media (max-width: 600px) {
                    label {
                        display: none;
                    }
                }
            }
        
        }
    `;
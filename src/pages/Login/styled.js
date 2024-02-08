import styled from 'styled-components';

export const LoginContainer = styled.div`
    
    background-color: #fff;
    text-align: center;
    padding: 30px;
    border-radius: 5px;
    margin: auto;
    max-width: 300px;
    margin-top: 20px;
    box-shadow: 0px 0px 10px #ccc;   

    h1 {
        font-size: 24px;
    }
    .organize {
        display: flex;

        a {
          color: #000;
        }
    }

    p {
        font-size: 13px;
        color: #9c9c9c;
    }
    .form--input {
        text-align: left;
        
        label {
            display: block;
        }

        input {
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:hover {
                border: 1px solid #7d2ae8;
            }
        }
    }

    .loginFooter {
        font-size: 13px;

        a {
            font-weight: bold;
            margin-left: 5px;
            color: #007bff;
            transition: 0.3s;
            cursor: pointer;

            &:hover {
                color: #0056b3;
            }
        }
    }
`;
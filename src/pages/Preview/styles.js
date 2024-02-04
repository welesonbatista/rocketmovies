import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
  padding: 0px 123px;
  max-height: 65vh;
position: fixed;
  margin: 40px auto;

  svg {
      color: ${({ theme }) => theme.COLORS.RED};
      font-size: 16px;   
        
    }
    
  .back {
      color: ${({ theme }) => theme.COLORS.RED};
      padding: 0 8px;  
     
  }
`;

export const Content = styled.div`
  max-height: 95vh;
  overflow-y: auto;

  &&::-webkit-scrollbar {
    width: .5rem;
    -webkit-appearance: none;
  }

  &&::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.RED};
    border-radius: .8rem;
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
  p {
    text-align: start;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items:center;
  > img {
    width: 16px;
    height: 16px;
    margin-top: 18px;
  
    border-radius: 35px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  > div {   
    flex-direction: column;
    line-height: 18px;
    padding: 16px 9px 0 ;
   

   

    pre {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      display: flex;
      justify-content: center;
  
    }

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Title = styled.div`
  font-size: 36px;
  display: flex;
  gap: 19px;

  div {
    margin-top: 18px;
    height: 20px;

    svg{

    }
  }
`;
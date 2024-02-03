import styled from "styled-components";
import { Link } from 'react-router-dom'



export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
  padding: 0px 123px;

`;

export const Content = styled.div`
  max-height: 70vh;
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
`;

export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color:${({ theme }) => theme.COLORS.BACKGROUND};
  font-size: 16px;
  border-radius: 8px;
  border: none;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: right;
  > svg {
    width: 16px;
    height: 16px;
  }
`
export const Title = styled.div`
  display: flex;
  padding: 50px 0 40px;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 32px;
    font-weight: 400;
  }
`
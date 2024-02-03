import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;


  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_100};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
  
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    svg {
      width: 22px;
      height: 22px;
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  > input {
    
    height: 56px;
    width: ${({ $isnew }) => ($isnew ? '10.0rem' : '7.0rem')};
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      /* estilos para o placeholder, se necessário */
    }
  }`
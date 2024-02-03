import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;
  margin-top: 0;
  padding-right:10px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 32px;
    font-weight: 400;
    font-size: 20px;
    font-weight: 400; 
  }
`
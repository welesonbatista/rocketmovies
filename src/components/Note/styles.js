import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECTION};


  border: none;
  border-radius: 10px;
  margin-top: 0;
  padding: 22px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.COLORS.RED};


  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    text-align: left;
    line-height: 18.75px;
    color: #999591;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    
  }
`;
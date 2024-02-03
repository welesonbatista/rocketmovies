import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_100};

  resize: none;
  border: none;
  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color:  ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
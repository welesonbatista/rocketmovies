import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
`

export const Brand = styled.div`
    display: flex;
    align-items: center;
    padding: 0 64px 0 0;
    > h1 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.RED};
    }
  `
export const Search = styled.div`
    display: flex;
    width: 630px;
    align-items: center;
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin: 0 0 0 9px;
  }

  > div {
    display: flex;
    text-align: end;
    flex-direction: column;
    line-height: 24px;

    strong {
      font-size: 18px;
      padding: 0 0 0 64px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
>span{
    font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
}`


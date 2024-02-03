import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
 position: fixed;
`

export const Form = styled.form`
  padding: 0 123px;
  margin: 38px auto;
 
  max-height: calc(100vh - 150px);


  a{
  color:${({ theme }) => theme.COLORS.RED};
  display: flex;
  align-items: center;
  }

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

  >h1 {
        font-weight: 500;
        font-size: 36px;     
    }
  span {
   padding: 0 8px;
  } 
 
  .inputs{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 36px;

    span:nth-child(2){
    padding-left: 36px;
    }
    span:nth-child(2){
    padding-left: 36px;
    }
    span{
      width: 50%;
      padding: 0;      
    }
  }

  Section {
    margin-top: 26px;
    
   >div {
    margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      padding: 16px;
      gap: 24px;
 
      background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
      border-radius: 10px;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;

    span {
      width: 50%;
    }
  }

`
export const Content = styled.div`
  max-height: 100vh;
  padding: 0 16px 16px 0;

   h1 {
    margin: 24px 0 40px;
  }
`
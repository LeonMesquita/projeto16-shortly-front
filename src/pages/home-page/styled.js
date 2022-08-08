import styled from 'styled-components';






export const HomePage = styled.div`


  
  width: 1000px;
  margin: auto;
  margin-top: 130px;

  span{
    display: flex;
    justify-content: center;
    
  }

  input{
    margin-right: 40px;
  }

  @media(max-width: 1020px) {
    width: 90%;
  }
`

export const UrlsDiv = styled.div`
    height: 60px;
   display: flex;
   margin-top: 42px;

   span{
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
   }

   p{
    overflow: hidden;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
   }

    div{
        width: 85%;
        background: #80CC74;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
    }

    button{
        width: 15%;
        height: 60px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    @media(max-width: 640px) {
        p{
            font-size: 8px;
        }
     
  }
`


export const NotFoundMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15vh;
    font-size: 25px;
    color: grey;
    font-weight: 700;
`
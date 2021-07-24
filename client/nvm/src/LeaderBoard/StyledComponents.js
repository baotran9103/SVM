import styled from "styled-components";
import {theme} from '../utils/Theme'

export const PageContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  color: #d3d3d3
`;

export const PoolStat = styled.div`
  display: flex;

  justify-content: space-around;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const PoolStatValueWrapper = styled.div`
  flex: 1 0;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.3;
`;

export const LeaderBoardTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: grid;
  font-weight: bold;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr;
  margin: 2rem 0;
  justify-items: flex-start;
  column-gap:1.5rem;
  
      @media screen and (max-width:768px){
        grid-template-columns: 1fr 4fr 1fr 1fr ;
        .leaderboard_hidden{
          display: none;
        }      
  }
`;

export const TableItem = styled.div`
  display: grid;
  font-weight: bold;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr;
  /* margin:2rem 0; */
  border-top: 1px solid #d3d3d3;
    column-gap:1.5rem;
    text-overflow: ellipsis;
    
  div{
      
    display: flex;
    align-items: center;
    justify-items: flex-start;
    overflow: hidden;
    padding: 1.5rem 0;
  }
  a{
      align-items: center;
      display: flex;
      text-decoration:none;
      color:${({Darkmode})=> Darkmode ? theme.colors.green :theme.colors.white };
      color:${theme.colors.green};
      padding: 0.75rem 0;
      text-overflow: ellipsis;
      overflow: hidden;
    max-width: 500px;
    :hover{
        opacity: 0.8
    }
    

  }

  @media screen and (max-width:768px){
        grid-template-columns: 1fr 4fr 1fr 1fr ;
        .leaderboard_hidden{
          display: none;
        }  }    
`;

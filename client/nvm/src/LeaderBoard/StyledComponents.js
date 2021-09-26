import styled from "styled-components";
import { theme } from "../utils/Theme";

export const PageContainer = styled.div`
  display: flex;
  color: ${({Darkmode})=> Darkmode ? theme.colors.white:theme.colors.black};
  position: relative;
  /* background:red; */
  padding:2rem 4rem;
  
  flex-direction: column;

  align-items: center;
  max-width: 1280px;
  margin: 4rem auto;

  .leaderboard-header{
    top:-70px;
    z-index: 2;
    /* background:gray; */
    padding:10px 2rem;
    border-radius:10px;
    position: absolute;
  }
  
`;

export const PoolStat = styled.div`
  display: flex;
  color: ${({Darkmode})=> Darkmode ? theme.colors.white:theme.colors.black};
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
  color: ${({Darkmode})=> Darkmode ? theme.colors.white:theme.colors.black};
`;

export const TableHeader = styled.div`
  display: grid;
  font-weight: bold;
  grid-template-columns: 1fr 8fr 1fr 1fr 1fr ;
  margin: 2rem 0;
  padding:0 1rem;
  justify-items: flex-start;
  column-gap: 1.5rem;
  color: ${({Darkmode})=> Darkmode ? theme.colors.white:theme.colors.black};
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr 1fr;
    padding: 0 0.5rem;

    .leaderboard_hidden {
      display: none;
    }
  }
`;

export const TableItem = styled.div`
  display: grid;
  font-weight: bold;
  grid-template-columns: 1fr 8fr 1fr 1fr 1fr ;
  /* margin:2rem 0; */
  border-top: 1px solid #d3d3d3;
  column-gap: 1.5rem;
  text-overflow: ellipsis;
  padding:0 1rem;
  cursor: pointer;
  /* transition: 0.1s ease-in all; */
  :hover{
    background:rgba(0,0,0,0.05);
  }
  div {
    display: flex;
    align-items: center;
    justify-items: flex-start;
    overflow: hidden;
    padding: 1.5rem 0;
  }
  a {
    align-items: center;
    display: flex;
    text-decoration: none;
    /* color: ${({ Darkmode }) =>
      Darkmode ? theme.colors.primary : theme.colors.black}; */
    color: ${theme.colors.primary};
    padding: 0.75rem 0;
    text-overflow: ellipsis;
    overflow: hidden;
    /* max-width: 500px; */
    :hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr 1fr;
    padding: 0 0.5rem;
    column-gap: 0.25rem;

    div {
      text-overflow: auto;
      width: 100%;
    }
    .leaderboard_hidden {
      display: none;
    }
  }
`;

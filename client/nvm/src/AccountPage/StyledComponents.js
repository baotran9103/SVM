import styled from "styled-components";


export const CardsRow = styled.div`
margin:1rem 0 ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-around;
`


export const Sectionheader = styled.h2`
    margin:48px;
`

export const Table = styled.div`
display:flex;
width:100%;
`

export const TableColumn = styled.div`

  
    flex-shrink: 1;
  
    flex-grow: 1;
    overflow: hidden;
`
export const ColumnHeader = styled.div`
    border-bottom: 2px solid #d3d3d3;
    font-weight: 700;
    overflow: hidden;
    padding: 12px 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
width:100%;

`
export const ColumnValue = styled.div`
    padding-right: 24px;
    overflow: hidden;
    padding: 12px 5px;
    text-overflow: ellipsis;
    white-space: nowrap;

width:100%;
@media screen and (max-width:768px){
    max-width:60px;
}


`
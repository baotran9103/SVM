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
    padding-right: 12px;
    overflow: hidden;
    padding: 12px 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    position:relative;
    min-height:40px;

    width:100%;
   border-bottom:1px solid ${({DarkMode})=>DarkMode?'rgba(255,255,255,0.2)':'rgba(0,0,0,0.2)'} ;
.Coint_amount{
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    /* align-items:center; */
    font-size:0.9rem;
}
@media screen and (max-width:768px){
    max-width:60px;
}


`
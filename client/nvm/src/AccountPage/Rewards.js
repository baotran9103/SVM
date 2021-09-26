import React from 'react'
import styled from 'styled-components'
import RewardsChart from './RewardChart'
import  {useSelector} from 'react-redux'

function Rewards({data,conversion, chartData}) {
    const DarkMode = useSelector(state => state.Utils.Darkmode)

    return (
        <Container>
            <h2>Your Rewards</h2>
            <Table>
                <TableItem DarkMode={DarkMode} className='table_header'>
                    <div>Period</div>
                    <div>XCH</div>
                    <div>USD</div>
                </TableItem >
                {
                    data.map((item,id)=>(
                        <TableItem DarkMode={DarkMode} key={id}>
                            <div>{item.period}</div>
                            <div>{(item.amount/(10**12)).toFixed(5)}</div>
                            <div>${(item.amount/(10**12)*conversion).toFixed(2)}</div>
                        </TableItem>
                    ))
                }
            </Table>
            <RewardsChart data={chartData}/>
            
        </Container>
    )
}

export default Rewards
const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:4rem;
    @media screen and (max-width:768px){
        margin:0.25rem;
    }
`

const Table = styled.div`
    display:flex;
    flex-direction:column;
    margin:1rem;
    .table_header{
    font-weight:bold;
    font-size:1.25rem;
}
`

const TableItem = styled.div`
display:grid;
column-gap:0.25rem;
grid-template-columns:repeat(3,1fr);
font-size:1rem;
padding:1rem ;
border-bottom:1px solid black;
:hover{
    background:  ${({DarkMode})=>DarkMode?' rgba(0,0,0,1)':'rgba(0,0,0,0.1)'}  ;
}
`
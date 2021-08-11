import React from 'react'
import styled from 'styled-components'
import {Sectionheader,Table,TableColumn,ColumnHeader,ColumnValue} from './StyledComponents'

function Payout(props) {
    const data = props.data.slice(0,50)
    return (
        <div style={{padding:'0 1rem'}}>
            <Sectionheader> Payout History</Sectionheader>
            <Table>
              
                    <TableColumn>
                    <ColumnHeader>Date</ColumnHeader>
                    {
                        data.map((item,id)=>(
                            <ColumnValue key={id}> {new Date(item.payDate).toLocaleString()}</ColumnValue>
                        ))
                    }
                    
                    </TableColumn>
                    <TableColumn>
                    <ColumnHeader>CoinID</ColumnHeader>
                    {
                        data.map((item,id)=>(
                            <ColumnValue key={id}> {item.parentCoin}</ColumnValue>
                        ))
                    }
                   
                    </TableColumn>
                    <TableColumn>
                    <ColumnHeader>Block</ColumnHeader>
                    {
                        data.map((item,id)=>(
                            <ColumnValue key={id}> {item.confirmedAtHeight}</ColumnValue>
                        ))
                    }
                   
                    </TableColumn>
                    <TableColumn>
                    <ColumnHeader>Amount</ColumnHeader>
                    {
                        data.map((item,id)=>(
                            <ColumnValue key={id}> {`${(item.amount/(10**12)).toFixed(2)} XCH`} </ColumnValue>
                        ))
                    }
                   
                    </TableColumn>
                   


            </Table>
        </div>
    )
}

export default Payout

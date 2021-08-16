import React from 'react'
import {Sectionheader,Table,TableColumn,ColumnHeader,ColumnValue} from './StyledComponents'
import  {useSelector} from 'react-redux'
function Payout(props) {
    const data = props.data.slice(0,50)
    const DarkMode = useSelector(state => state.Utils.Darkmode)
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
                            <ColumnValue DarkMode={DarkMode} key={id} > 
                            <div className="Coint_amount">
                            <div>
                            {`${(item.amount/(10**12)).toFixed(2)} XCH`}
                            </div>
                            <div className='USD_ammount'>{`$${(item.amount/(10**12)*props.price).toFixed(2)}`}</div>
                            </div>
                           
                             </ColumnValue>
                        ))
                    }
                   
                    </TableColumn>
                   


            </Table>
        </div>
    )
}

export default Payout

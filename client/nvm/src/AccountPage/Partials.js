import React from 'react'
import {Sectionheader,Table,TableColumn,ColumnHeader,ColumnValue} from './StyledComponents'
function Partials(props) {
    const data = props.data.slice(0,50)
    return (
        <div style={{padding:'0 1rem'}}>
            <Sectionheader> Partial History</Sectionheader>
            <Table>
              
                    <TableColumn>
                    <ColumnHeader>Date</ColumnHeader>
                    {
                        data.map((item,id)=>(
                            <ColumnValue key={id}> {new Date(item.timestamp*1000).toLocaleString()}</ColumnValue>
                        ))
                    }
                    
                    </TableColumn>
                    <TableColumn>
                    <ColumnHeader>ID</ColumnHeader>
                    {
                        data.map((item,id)=>(
                            <ColumnValue key={id}> {item.id}</ColumnValue>
                        ))
                    }
                   
                    </TableColumn>
                    <TableColumn>
                    <ColumnHeader>Difficulty</ColumnHeader>
                    {
                        data.map((item,id)=>(
                            <ColumnValue key={id}> {item.difficulty}</ColumnValue>
                        ))
                    }
                   
                    </TableColumn>
                   


            </Table>
        </div>
    )
}

export default Partials

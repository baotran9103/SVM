import React from 'react'
import styled from 'styled-components'
import Content from './Content/Content'
function PageContent() {
    return (
        <PageContainer >
            <Content/>
            
        </PageContainer>
    )
}

export default PageContent


const PageContainer = styled.div`
height: 100%;
    min-height: 952px;
    min-width: 480px;
    padding: 0 5%;
    position: relative;
    transition: background-color .2s ease-out;
`
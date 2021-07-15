import React from 'react'
import {ContentContainer,ContentImage,Content as Cont,ButtonBound,ButtonGroup,ImageButton} from './StyledComponents'
function Content() {
    return (
        <ContentContainer>
            <ContentImage src='/hero.png' alt="" />
            <Cont>
                <h4>
                    Welcome to                     <span >SVM Pool</span>

                </h4>
                <h4>
                Join forces to take back control of predictable Chia farming winnings with the official Chia Pooling Protocol
                </h4>
                <ButtonGroup>
                    <ButtonBound>How to join</ButtonBound>
                    <img src="/download-ios-app.png" alt=""/>
                    <img src="/download-android-app.png" alt=""/>

                </ButtonGroup>
            </Cont>
            
        </ContentContainer>
    )
}

export default Content

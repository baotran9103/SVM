import React from 'react'
import {ContentContainer,ContentImage,Content as Cont,ButtonBound,ButtonGroup,ImageButton,RecentlyFarmButton} from './StyledComponents'
import RecentlyFarm  from './RecentlyFarm'
import data from '../data/MOCK_DATA.json'
function Content() {
    console.log(data)
    return (
        <div>
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
        <RecentlyFarm data = {data}/>
        <div style={{display:'flex',justifyContent:'center',margin:'2rem 0'}}>
        <RecentlyFarmButton to='/'> View More</RecentlyFarmButton>

        </div>
        </div>
    )
}

export default Content

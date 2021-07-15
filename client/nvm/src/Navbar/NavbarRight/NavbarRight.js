import React from 'react'
import Toggle from './Toggle'
import {NavContainer,StickerInfo,StickerInfoData,StickerPercent,LauncherinputContainer,LauncherInput,SearchButton} from './StyledComponents'
function NavbarRight() {
    return (
        <NavContainer>
            <Toggle />
            <StickerInfo>
                <StickerInfoData> XCH $231.79</StickerInfoData>
                <StickerPercent ispositive={1.16>0}>1.16%</StickerPercent>
                
                
            </StickerInfo>
            <LauncherinputContainer>
                <LauncherInput  type='text' placeholder='Launcher Id or alias'/>

            </LauncherinputContainer>
            <SearchButton> Search</SearchButton>
            
        </NavContainer>
    )
}

export default NavbarRight

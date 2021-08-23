import React from 'react'
import {FooterContainer,FooterLinks,FooterLink} from './StyledComponents'
import {useSelector} from 'react-redux'

function Footer() {
    const Darkmode = useSelector(state=> state.Utils.Darkmode)

    const Links = [
        {Link:'/',title:'Terms'},
        {Link:'/',title:'Privacy'},
        {Link:'/',title:'News'},
        {Link:'/',title:'About'},
        {Link:'/',title:'Service Status'},
        {Link:'/',title:'FAQ'},
    ]
    return (
        <FooterContainer Darkmode={Darkmode}>
            <FooterLinks>
                {
                    Links.map((link,id)=> (
                        <FooterLink key={id} to={link.Link}>{link.title}</FooterLink>

                    ))
                }
                
            </FooterLinks>
        </FooterContainer>
    )
}

export default Footer

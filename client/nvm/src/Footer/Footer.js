import React from 'react'
import {FooterContainer,FooterLinks,FooterLink} from './StyledComponents'
function Footer() {
    const Links = [
        {Link:'/',title:'Terms'},
        {Link:'/',title:'Privacy'},
        {Link:'/',title:'News'},
        {Link:'/',title:'About'},
        {Link:'/',title:'Service Status'},
        {Link:'/',title:'FAQ'},
    ]
    return (
        <FooterContainer>
            <FooterLinks>
                {
                    Links.map((link,id)=> (
                        <FooterLink to={link.Link}>{link.title}</FooterLink>

                    ))
                }
                
            </FooterLinks>
        </FooterContainer>
    )
}

export default Footer

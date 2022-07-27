import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.p`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
font-size: 25px;
border-radius: 50%;
color:white;
background-color: #${props => props.color};
display: flex;
  align-items: center;
  justify-content: center; 
  margin-right: 20px;
`
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none" })}
`

const Title= styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
  align-items: center;
`

const Payment = styled.img``

export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>CLICK.</Logo>
            <Desc>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque ad amet nam laudantium. Illo distinctio consequuntur aperiam possimus facilis consectetur placeat voluptates eveniet nulla debitis? Impedit iusto molestiae recusandae!
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FontAwesomeIcon icon={faTwitter}/>
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <FontAwesomeIcon icon={faFacebook}/>
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <FontAwesomeIcon icon={faGithub}/>
                </SocialIcon>
                <SocialIcon color="3B5999">
                    <FontAwesomeIcon icon={faYoutube}/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
        <List>
            <Title>                
            Useful Links 
            </Title> 
                    
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Keyboards</ListItem>
            <ListItem>Keycaps</ListItem>
            <ListItem>Cables</ListItem>
            <ListItem>Supplies</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Pre-Orders</ListItem>
            <ListItem>Group Buy</ListItem>
            <ListItem>Terms and Conditions</ListItem>
                
            
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <FontAwesomeIcon icon={faMapLocationDot} style={{marginRight:"10px"}}/>707 Alexander Drive, Leander Texas 78641
            </ContactItem>
            <ContactItem>
            <FontAwesomeIcon icon={faPhone} style={{marginRight:"10px"}}/>303-653-4746
            </ContactItem>
            <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"10px"}}/>admin@click.com
            </ContactItem>
            <Payment src="https://i/ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

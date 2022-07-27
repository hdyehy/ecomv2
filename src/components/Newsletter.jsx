import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    height: 35vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
border:none;
flex: 8;
font-size: 18px;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: pink;
color: white;
cursor: pointer;
`


export default function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Subscribe to never miss another group buy!</Description>
        <InputContainer>
            <Input placeholder='keyboard@click.com'/>
            <Button>
                <FontAwesomeIcon icon={faPaperPlane}/>
            </Button>
        </InputContainer>
    </Container>

  )
}

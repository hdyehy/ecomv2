import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding : 10px;

`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: pink;
    cursor: pointer;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

export default function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                
                <Agreement>By logging in, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
//left side stuff
const Left = styled.div`
  flex: 1;
  display: flex;

  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
// center logo stuff
const Centered = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: pink;
  ${mobile({ fontSize: "24px" })}
  text-decoration: none;
`;

//right side stuff
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: "12px" })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "gray", fontSize: 16 }}
            />
          </SearchContainer>
        </Left>

        <Centered>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>CLICK.</Logo>
          </Link>
        </Centered>

        <Right>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>SIGNIN</MenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <MenuItem>
              <FontAwesomeIcon icon={faCartShopping} />
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

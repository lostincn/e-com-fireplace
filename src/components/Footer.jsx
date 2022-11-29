import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  Telegram,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  ${mobile({ fontSize: "20px" })}
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 0.5s ease;
  color: white;
  background-color: #${(props) => props.color};
  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
  margin: 20px;
  padding: 0;
  display: flex;
  align-items: с;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ВОСХОД</Logo>
        <Description> Наша Компания </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Полезные Ссылки</Title>
        <List>
          <ListItem>Главная</ListItem>
          <ListItem>Корзина</ListItem>
          <ListItem>Электрические Камины</ListItem>
          <ListItem>Аксессуары</ListItem>
          <ListItem>Дизайнерам</ListItem>
          <ListItem>Мой Аккаунт</ListItem>
          <ListItem>Доставка</ListItem>
          <ListItem>Контакты</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Контакты </Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Люблино
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +7 930 965 60 82
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          aidaroffski@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

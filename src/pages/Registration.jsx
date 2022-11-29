import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  border: 1px solid green;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ width: "80%" })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "50%" })}
`;
const Registration = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Регистрация нового аккаунта</Title>
        <Form>
          <Input placeholder="Имя" />
          <Input placeholder="Фамилия" />
          <Input placeholder="Аккаунт" />
          <Input placeholder="Email" />
          <Input placeholder="Пароль" />
          <Input placeholder="Повторите пароль" />
          <Agreement>
            Согласие на обработку персональных данных. Нажав зарегистрироваться
            вы подтверждаете ваше согласие на обработку персональных данных.
          </Agreement>
          <Button>Зарегистрироваться</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Registration;

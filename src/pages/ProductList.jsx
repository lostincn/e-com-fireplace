import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
const Container = styled.div`
  /* display: flex; */
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px", width: "80%" })}
`;

const Option = styled.option`
  ${mobile({ width: "50px" })}
`;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Камины</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Отфильтровать товары:</FilterText>
          <Select>
            <Option disabled selected>
              Цвет
            </Option>
            <Option>Белый</Option>
            <Option>Чёрный</Option>
            <Option>Красный</Option>
            <Option>Синий</Option>
            <Option>Зелёный</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Отсортировать товары:</FilterText>
          <Select>
            <Option selected>Новое</Option>
            <Option>Цене: От низкой к Высокой</Option>
            <Option>Цене: От Высокой к Низкой</Option>
            <Option>Названию: А до Я</Option>
            <Option>Названию: Я до А</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

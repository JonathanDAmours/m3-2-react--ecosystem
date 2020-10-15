import React from "react";
import { items } from "../data.js";
import ListingGrid from "./ListingGrid.js";
import styled from "styled-components";

const Intro = styled.p`
  margin: 0 30px 20px;
  font-family: sans-serif;
`;

const List = styled.h1`
  margin: 0 30px 40px;
  font-family: sans-serif;
  font-size: 120%;
`;

const Home = (props) => {
  let itemList = Object.values(items);
  return (
    <div>
      <Intro>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Intro>
      <List>Browse items:</List>
      <ListingGrid itemList={itemList} />
    </div>
  );
};

export default Home;

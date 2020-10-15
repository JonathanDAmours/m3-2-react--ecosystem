import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  width: 270px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  padding-top: 160px;
  border-radius: 40px;
  margin: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

const Image = styled.img`
  width: 180px;
  border-radius: 20px;
  position: absolute;
  top: -20px;
`;

const Name = styled.h1`
  color: black;
  text-align: center;
  font-family: sans-serif;
  font-size: 28px;
  padding: 0 25px;
  text-decoration: underline;
  text-decoration-color: orange;
`;

const LatinName = styled.h2`
  color: grey;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  margin: 0 0 40px 0;
  opacity: 0.5;
`;

const ListingGrid = ({ itemList }) => {
  console.log(itemList);
  return (
    <Grid>
      {itemList.map((item) => {
        return (
          <StyledLink to={`/items/${item.id}`}>
            <Image src={item.imageSrc} alt="" />
            <Name>{item.name}</Name>
            <LatinName>{item.latinName}</LatinName>
          </StyledLink>
        );
      })}
    </Grid>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;

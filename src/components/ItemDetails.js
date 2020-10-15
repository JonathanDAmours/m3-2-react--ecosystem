import React from "react";
import styled from "styled-components";
import { items, sellers } from "../data.js";
import { useParams } from "react-router-dom";

const Grid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 30px;
`;

const ImageSection = styled.div`
  ///////
`;

const Image = styled.img`
  width: 400px;
  border-radius: 30px;
`;

const InfoSection = styled.div`
  width: 600px;
  margin: 0 0 0 40px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Name = styled.h1`
  font-family: sans-serif;
  margin: 0;
  opacity: 0.8;
`;

const LatinName = styled.h2`
  font-family: sans-serif;
  font-style: italic;
  font-weight: 400;
  color: grey;
  opacity: 0.7;
  margin: 0 0 40px 0;
`;

const Description = styled.p`
  font-family: sans-serif;
  line-height: 1.4em;
  font-size: 110%;
  margin: 0;
`;

const Origin = styled.h3`
  font-family: sans-serif;
  font-style: italic;
  color: black;
  font-weight: 200;
  opacity: 0.7;
  margin-right: 6px;
`;

const Country = styled.h3`
  font-family: sans-serif;
  font-style: italic;
  font-weight: bold;
  color: black;
  opacity: 0.8;
  margin-bottom: 40px;
`;

const Provenance = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  background-color: #4700e0;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 15px;
`;

const Out = styled.p`
  font-family: sans-serif;
  font-size: 1.3rem;
  color: red;
  text-transform: uppercase;
`;

const SellerSection = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const SoldBy = styled.p`
  font-family: sans-serif;
`;

const StoreId = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  margin-left: 6px;
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  let itemArray = Object.values(items);
  let sellerArray = Object.values(sellers);
  return itemArray
    .filter((item) => {
      if (item.id === itemId) {
        return true;
      }
    })
    .map((element) => {
      return (
        <Grid>
          <ImageSection>
            <Image src={element.imageSrc} alt="" />
          </ImageSection>
          <InfoSection>
            <Name>{element.name}</Name>
            <LatinName>{element.latinName}</LatinName>
            <Description>{element.description}</Description>
            <Provenance>
              <Origin>Product of </Origin>
              <Country>{element.countryOfOrigin}</Country>
            </Provenance>
            {element.quantity > 0 && (
              <Button>${element.price} - Buy now</Button>
            )}
            {element.quantity == 0 && <Out>Out of stock</Out>}
            {sellerArray
              .filter((seller) => {
                if (seller.id === element.sellerId) {
                  return true;
                }
              })
              .map((person) => {
                return (
                  <SellerSection>
                    <Avatar src={person.avatarSrc} />
                    <SoldBy>Sold by: </SoldBy>
                    <StoreId>
                      {person.storeName}, by {person.id}
                    </StoreId>
                  </SellerSection>
                );
              })}
          </InfoSection>
        </Grid>
      );
    });
};

export default ItemDetails;

////filter (true or false)
/////map

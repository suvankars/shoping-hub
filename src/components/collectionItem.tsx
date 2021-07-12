import React from "react";
import styled from "styled-components";

interface CollectionItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
const CollectionItem = ({ id, name, imageUrl, price }: CollectionItemProps) => {
  return (
    <CollectionItemWraper key={id}>
      <ImageWraper img={imageUrl}></ImageWraper>
      <CollectionFooterWraper>
        <NameWraper>{name}</NameWraper>
        <PriceWraper>{price}</PriceWraper>
      </CollectionFooterWraper>
    </CollectionItemWraper>
  );
};

const CollectionItemWraper = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

interface ImageWraperProps {
  img: string;
}
const ImageWraper = styled.div<ImageWraperProps>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${(props) => props.img});
`;

const CollectionFooterWraper = styled.span`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const NameWraper = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

const PriceWraper = styled.div`
  width: 10%;
`;
export default CollectionItem;

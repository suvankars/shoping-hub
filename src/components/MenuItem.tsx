import React from "react";
import styled from "styled-components";

interface Items {
  title: String;
  key: number;
  imageUrl: string;
}

export default function MenuItem(props: Items) {
  console.log(props.imageUrl);
  return (
    <MenuItemWraper imageUrl={props.imageUrl}>
      <ContentWrapper>
        <TitleWrapper>{props.title}</TitleWrapper>
        <SubTitleWrapper>SHOP NOW</SubTitleWrapper>
      </ContentWrapper>
    </MenuItemWraper>
  );
}

interface WraperProps {
  imageUrl: string;
}

const MenuItemWraper = styled.div<WraperProps>`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-image: url(${(props) => props.imageUrl})
`;

const ContentWrapper = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 70%;
`;

const TitleWrapper = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const SubTitleWrapper = styled.div`
font-weight: lighter;
font-size: 16px;`;
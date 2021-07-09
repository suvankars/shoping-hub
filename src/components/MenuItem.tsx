import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";

interface Items extends RouteComponentProps<any> {
  title: String;
  key: number;
  imageUrl: string;
  linkUrl: string;
}

const MenuItem = ({imageUrl, history, linkUrl, title, match}: Items) =>{
  return (
    <MenuItemWraper imageUrl={imageUrl}>
      <ContentWrapper onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
        <TitleWrapper>{title}</TitleWrapper>
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

export default withRouter(MenuItem);
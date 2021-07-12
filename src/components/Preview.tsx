import React from "react";
import styled from "styled-components";
import CollectionItem from "./collectionItem";

interface ItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface PreviewProps {
  title: string;
  items: Array<ItemProps>;
  key: number;
}

const Preview = ({ key, title, items }: PreviewProps) => {
  const collection_size = 4;
  return (
    <CollectionPreviewWraper key={key}>
      <TitleWrapper>{title}</TitleWrapper>
      <PreviewWrapper>
        {items.slice(0, collection_size).map((item) => {
          return <CollectionItem {...item} />;
        })}
      </PreviewWrapper>
    </CollectionPreviewWraper>
  );
};

const CollectionPreviewWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  font-size: 28px;
  margin-bottom: 25px;
`;

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Preview;

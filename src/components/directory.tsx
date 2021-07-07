import React, { useState } from "react";
import styled from "styled-components";
import sectionsData from '../constant/data'
import MenuItem
 from "./MenuItem";
const DirectoryWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Directory = () => {
    const [sections, setSections] = useState(sectionsData)
    console.log(sections);
    return (
        <DirectoryWrapper>
        {sections.map( ({title, id, imageUrl}) => (
            <MenuItem title={title} key={id} imageUrl={imageUrl}></MenuItem>
        ))}
      </DirectoryWrapper>
    )
}

export default Directory



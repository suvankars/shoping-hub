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
    const [sections] = useState(sectionsData)
    return (
        <DirectoryWrapper>
        {sections.map( ({id, ...otherSections}) => (
            <MenuItem {...otherSections} key={id} ></MenuItem>
        ))}
      </DirectoryWrapper>
    )
}

export default Directory

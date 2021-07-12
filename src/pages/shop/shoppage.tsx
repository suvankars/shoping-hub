import React, { useState } from "react";
import Preview from "../../components/Preview";
import SHOP_DATA from "../../constant/collection";

const Shoppage = () => {
  const [collections] = useState(SHOP_DATA);
  
   
  return (
    <div>
      {collections.map(({id, ...otherCollection}) => {
        return <Preview key={id} {...otherCollection}/>;
      })}
    </div>
  );
};

export default Shoppage;

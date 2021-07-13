import { RouteComponentProps, withRouter } from "react-router";

export interface ItemProps extends RouteComponentProps<any> {
  id: number;
  name: String;
  imageUrl: String;
  price: number;
}

const Item = ({ id, name, imageUrl, price, match, history }: ItemProps) => {
  return (
    <div>
      {name}
      {price}
    </div>
  );
};

export default withRouter(Item);

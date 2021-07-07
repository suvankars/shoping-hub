import styled from "styled-components";

const Button = styled.button<{ primary: boolean }>`
  background-color: rgb(33, 206, 140);
  font-size: larger;
  color: ${(props) => (props.primary ? "white" : "black")};
`;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:20px 80px;
`;

export default function home() {
  return (
    <HomePageWrapper>
      <Button primary>Click me</Button>
    </HomePageWrapper>
  );
}

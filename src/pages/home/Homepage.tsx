import styled from "styled-components";
import Directory from "../../components/directory";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:20px 80px;
`;

export default function home() {
  return (
    <HomePageWrapper>
      <Directory/>
    </HomePageWrapper>
  );
}

import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/crown.svg'

const Header = () => {
  return (
    <HeaderWraper>
      <LogoWraper>
          <Link to="/">
          <img src={logo} alt="Logo" />;
          </Link>
      </LogoWraper>
      <LinkOptionWraper>
        <OptionWraper>
            <Link to="/shop">SHOP</Link>
        </OptionWraper>
        <OptionWraper>
            <Link to="/contact">CONTACT</Link>
        </OptionWraper>
      </LinkOptionWraper>
    </HeaderWraper>
  );
};

const HeaderWraper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoWraper = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const LinkOptionWraper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionWraper = styled.div`
  padding: 10px 15px;
`;
export default Header;

import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles/styleUtil';
import CommentoLogo from '../atoms/Logo';

// type HeaderProps = {
//   children?: React.ReactNode;
// };

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`;

const WhiteBackground = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 8rem;
  padding-left: 8rem;
  @media {
    width: 992px;
  }

  @media {
    width: 100%;
  }
`;

const Logo = styled.div`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ;
  font-family: ;
`

const Spacer = styled.div`
  flex-grow: 1;
`;

function Header({ children }: {children: React.ReactNode}) {
  return(
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo>Commento</Logo>
          <Spacer />
            {children}
        </HeaderContents>
      </WhiteBackground>
    </Positioner>
  );
}

export default Header;

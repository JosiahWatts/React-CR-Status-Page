import React from 'react';
import styled from 'styled-components';
import logo from '../CRLogo.svg';

import ContactPopover from './ContactPopover';

const Header = ({ handleClick, show, target }) => {

  return (
    <HeaderContainer>
      <div>
        <a href="https://www.callrevu.com/" target="_blank" rel="noopener noreferrer"><Logo alt="CallRevu Logo" src={logo}/></a>
      </div>
      <LinkContainer>
        <span>Have an Issue?</span>
        <ReportButton onClick={handleClick}>CONTACT SUPPORT</ReportButton>
        <ContactPopover show={show} target={target} />
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  span {
    color: #707070;
    margin-right: 1.5em;
    font-size: 1.75vh;
  }

  @media (max-width: 999px){
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 3.5vh;
  width: auto;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: baseline;
  
  @media (max-width: 999px){
    margin-top: 6vh;
    width: 100%;
    justify-content: center;
  }
`;

const ReportButton = styled.div`
  font-size: 1.5vh;
  letter-spacing: 3px;
  color: #ffff;
  background-color: #0B79BF;
  display: inline;
  padding: 1em 2em;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;

  &:hover{
    background-color: #096cab;
  }
  &:active{
    background-color: #096cab;
  }
`;

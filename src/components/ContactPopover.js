import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ContactPopover = ({ show, target }) => {
  
  const ref = useRef();
  const [dropDownWidth, setDropDownWidth] = useState(0);

  useEffect(() => {
    setDropDownWidth(ref.current.offsetWidth);
  }, []);

  return (
      <PopoverContainer
        ref={ref}
        top={target.offsetTop + target.offsetHeight - 4}
        left={target.offsetLeft - (dropDownWidth - target.offsetWidth)}
        className={ show ? 'open' : '' }
      >
        <Arrow arrowLeftPosition={(target.offsetWidth / 2) + (dropDownWidth - target.offsetWidth)} ></Arrow>
        <DropdownListItem>
            <p>Call Us:</p>
            <a href="tel:844-311-3329" rel="noopener noreferrer">(844)-311-3329</a>
        </DropdownListItem>
        <Divider></Divider>
        <DropdownListItem>
            <p>Email Us:</p>
            <a href="mailto:support@callrevu.com" rel="noopener noreferrer">support@callrevu.com</a>
        </DropdownListItem>
      </PopoverContainer>
  );
}

export default ContactPopover;

const Arrow = styled.span`
  position: absolute;
  width: 1em;
  height: 1em;
  display: block;
  background-color: white;
  transform: translateY(-50%) rotate(45deg);
  border-top: 1px solid #bcd3de;
  border-left: 1px solid #bcd3de;
  left: ${props => props.arrowLeftPosition}px;
`;

const Divider = styled.div`
  margin-left: 1em;
  margin-right: 1em;
  height: 1px;
  background-color: #D6D6D6;
`;

const PopoverContainer = styled.ul`
  top: ${props => props.top }px;
  left: ${props => props.left }px;
  font-size: 2vh;
  position: absolute;
  visibility: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #bcd3de;
  opacity: 0;
  transition: all .1s ease-in-out;
  z-index: 10;
  background-color: #FFFFFF;
  border-radius: 1em;
  margin-top: 1em;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  width: 14em;
  transform: translateY(-0.5em);

  &.open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0%);
  }
`;

const DropdownListItem = styled.li`
    padding: 1.5em;
    transition: all 0.3s ease;
    
    a {
      color: #707070;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
    }
    a:hover {
      color: #096cab;
      font-size: 1.05em;
    }
    
    p {
      margin: 0;
      padding-bottom: .5em;
    }

    &:nth-last-child(2) {
      border: none;
    }
    
`;

// #errorImage {
//   height: 30vh;
//   width: auto;
//   align-self: flex-start;
// }

// .content-container span {
//   padding-top: 1rem;
// }

// #support-img {
//   transform: scale(0.9);
//   transition: transform .3s ease-in-out;
// }

// #support-img:hover {
//   transform: scale(1.05);
// }

// .dropdown-list {
  // font-size: 2vh;
  // position: absolute;
  // visibility: hidden;
  // list-style: none;
  // margin: 0;
  // padding: 0;
  // border: 1px solid #bcd3de;
  // opacity: 0;
  // transition: all .1s ease-in-out;
  // z-index: 10;
  // background-color: #FFFFFF;
  // border-radius: 1em;
  // margin-top: 1em;
  // box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  // width: 14em;
  // transform: translateY(-0.5em);
// }




// .livechat-container {
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
// }
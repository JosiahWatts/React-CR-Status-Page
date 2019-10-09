import React from 'react';
import styled from 'styled-components';

const SubHeader = ({ title, desc, subtitle }) => {
  return (
    <div>
      <SubHeaderContainer>
        <p className="title">{title}</p>
        <p className="description">{desc}</p>
        <p className="subtitle">{subtitle}</p>
      </SubHeaderContainer>
    </div>
  );
};

const SubHeaderContainer = styled.div`
  margin-top: 9vh;
  margin-bottom: 1em;
  font-size: 1.25em;

  @media (max-width: 999px){
    margin-top: 5vh;
  }

  p {
    margin: 0 0 15px 0;
  }

  .title {
    font-size: 2.5vh;
    color: #1279C2;
  }

  .description {
    font-size: 5vh;
    color: #707070;
  }

  .subtitle {
    color: #A0A0A0;
    width: auto;
    font-size: 2.5vh;
  }
`;

export default SubHeader;
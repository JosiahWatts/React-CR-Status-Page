import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const IncidentListItem = ({ incident }) => {
  return (
    <IncidentListItemContainer>
      <IncidentListHeading>{incident.name}</IncidentListHeading>
      <li>
        <IncidentListLine></IncidentListLine>
        <span>{format(new Date(incident.dateCreated), 'MMMM DD, YYYY')} AT {format(new Date(incident.dateCreated), 'hA')}</span>
        <p>{incident.comment}</p>
      </li>
    </IncidentListItemContainer>
  );
}

export default IncidentListItem;

const IncidentListHeading = styled.h1`
  font-size: 3vh;
  font-weight: 400;
  font-style: italic;
  color: #707070;
  margin-bottom: 20px;
  margin-top: 4vh;
  flex-basis: 100%;
`;

const IncidentListLine = styled.div`
  height: 7px;
  width: 100%;
  background-color: #61A5D5;
`;

const IncidentListItemContainer = styled.div`
  li {
    font-size: 2.5vh;
    color: #707070;
    border: solid 1px;
    border-color: #BCD3DE;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #FFFF;
    list-style: none;
    padding: 0;
  }

  p {
    white-space: pre-wrap;
    margin: 0;
    padding: 1vh 4.25vh 4.25vh 4.25vh;
  }

  span {
    font-weight: 700;
    display: block;
    padding: 4.25vh 4.25vh 2vh 4.25vh;
  }

  li:last-child {
    margin-bottom: 10vh;
  }
`;
import React from 'react';
import styled from 'styled-components';

import IncidentListItem from './IncidentListItem';

const IncidentList = ({ openIncidents }) => {
  return (
    <ListWrapper>
      <IncidentListFlexContainer>
        <IncidentListContainer>
          <OpenIncidentList>
            {
              (openIncidents.length > 0) ?
                openIncidents.map(incident => <IncidentListItem key={incident.id} incident={incident}/>)
                : <NoAvailIncidentItemsHeading>There is no upcoming maintenance.</NoAvailIncidentItemsHeading>
            }
          </OpenIncidentList>
        </IncidentListContainer>
      </IncidentListFlexContainer>
    </ListWrapper>
  );
}

export default IncidentList;

const ListWrapper = styled.div`
  width: 100%;
`;

const IncidentListFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const IncidentListContainer = styled.div`
  width: 100%;
`;

const OpenIncidentList = styled.ul`
  padding: 0;
`;

const NoAvailIncidentItemsHeading = styled.h1`
  font-size: 3vh;
  font-weight: 400;
  font-style: italic;
  color: #707070;
  margin-bottom: 20px;
  margin-top: 4vh;
  flex-basis: 100%;
  margin-bottom: 10vh;
`;

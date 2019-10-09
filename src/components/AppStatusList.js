import React from 'react';
import styled from 'styled-components';

import AppListItem from './AppListItem';

const AppStatusList = ({ listOfApps, getAppHealthStatus, health, listTitle }) => {
  return (
    <AppListContainer>
      <ListHeading>{listTitle} - {health.tagline}</ListHeading>
      <AppList>
        <HealthLine lineColor={getAppHealthStatus(health.health)}></HealthLine>
        {
          listOfApps.map((app, i, arr) => (
            <AppListItem key={i} app={app} i={i} arr={arr} getAppHealthStatus={getAppHealthStatus}/> ))
        }
      </AppList>
    </AppListContainer>
  );
}

export default AppStatusList;

const ListHeading = styled.h1`
  font-size: 3vh;
  font-weight: 400;
  font-style: italic;
  color: #707070;
  margin-bottom: 0;
  margin-top: 4vh;
  flex-basis: 100%;
`;

const AppListContainer = styled.div`
  width: 48%;
  @media (max-width: 999px){
    width: 100%;
  }
`;

const AppList = styled.ul`
  border: solid 1px;
  border-color: #BCD3DE;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #FFFF;
  list-style: none;
  padding: 0;
  flex-shrink: .5;

`;

const HealthLine = styled.div`
  height: 7px;
  width: 100%;
  background-color: ${ props => props.lineColor};
`;

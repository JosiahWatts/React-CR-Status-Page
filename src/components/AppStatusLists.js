import React from 'react';
import styled from 'styled-components';

import AppStatusList from './AppStatusList';

const AppStatusLists = ({ listOfApps, getAppHealthStatus, webHealth, apiHealth }) => {
  return (
    <ListWrapper>
      <AppListFlexContainer>
        <AppStatusList listTitle={'Websites'} getAppHealthStatus={getAppHealthStatus} 
          listOfApps={listOfApps.websiteApps} health={webHealth} /> 
        <AppStatusList listTitle={'API'} getAppHealthStatus={getAppHealthStatus} 
          listOfApps={listOfApps.apiApps} health={apiHealth} />
      </AppListFlexContainer>
    </ListWrapper>
  );
};

export default AppStatusLists;

const ListWrapper = styled.div`
  width: 100%;
`;

const AppListFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

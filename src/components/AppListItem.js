import React from 'react';
import styled from 'styled-components';

const AppListItem = ({ app, i, arr, getAppHealthStatus}) => {
  return (
    <AppListItemLi key={app.id}>
      <ListItemFlexContainer>
        <HealthBubble healthColor={getAppHealthStatus(app.health)}></HealthBubble>
        <span>{app.name.toUpperCase()}</span>
      </ListItemFlexContainer>
      {(i !== arr.length - 1) ? <Line></Line> : ''}
    </AppListItemLi>
  )
}

export default AppListItem;

const AppListItemLi = styled.li`
  padding: 4.25vh 4.25vh 0 4.25vh;
  font-size: 2.5vh;
  font-weight: 700;
  color: #707070;

  &:last-child {
    margin-bottom: 4vh;
  }
`;

const HealthBubble = styled.div`
  display: inline-block;
  width: 2vh;
  height: 2vh;
  border-radius: 1vh;
  background-color: ${props => props.healthColor};
  margin-right: 1.5vh;
  flex-shrink: 0;
`
export const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 4vh;
  background-color: #D6D6D6;
`;

const ListItemFlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

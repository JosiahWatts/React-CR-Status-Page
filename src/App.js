import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import AppStatusLists from './components/AppStatusLists';
import IncidentList from './components/IncidentList';
import Loading from './components/Loading';

const FETCH_RATE = 30000;

class App extends Component {
  
  state = {
    crApps: {
      websiteApps: [],
      apiApps: [],
    },
    isLoading: false,
    webHealth: {},
    apiHealth: {},
    openIncidents: [],
    contactPopoverVisibility: false,
    contactPopoverTarget: {},
  };

  fetchAppDataAndHealth = async () => {
    const appUrl = 'https://api.happyapps.io/api/dashboard';
    
    this.setState({ isLoading: true });
    try {
      const appResponse = await fetch(appUrl, {
        method: 'GET',
        headers: {
          Authorization: ACCESS_KEY,
        }
      });
      const appJsonResponse = await appResponse.json();
      const websiteApps = appJsonResponse.appList.filter( app => app.description === 'web');
      const apiApps = appJsonResponse.appList.filter( app => app.description === 'api');
      const openIncidents = appJsonResponse.openIncidents.filter( incident => incident.severity === 'info');

      await this.setState({
        crApps: { websiteApps, apiApps },
        webHealth: this.calculateAppGroupStatus(websiteApps),
        apiHealth: this.calculateAppGroupStatus(apiApps),
        isLoading: false,
        contactPopoverVisibility: false,
        openIncidents,
      });

    } catch (err) {
      console.log(err);
    }
  }
  
  getAppHealthStatus = (crAppHealth) => {
    if(crAppHealth === 10)
      return '#87C03F';
    if(crAppHealth === 0)
      return '#E04A1D';
    else
      return '#EEA01D';
  }

  calculateAppGroupStatus = (appList) => {
    let warningApps = 0;
    let criticalApps = 0;
    let appGroupHealth = {};

    for(let app of appList){
      if(app.health !== 0 && app.health < 10)
        warningApps++;
      if(app.health === 0)
        criticalApps++;
    }
    
    if(warningApps > 0 && criticalApps < 1) {
      appGroupHealth.health = 1;
      appGroupHealth.tagline = 'Houston, We Have a Problem';
    }
    if(criticalApps > 0) {
      appGroupHealth.health = 0;
      appGroupHealth.tagline = 'Emergency Situation';
    }
    if(warningApps < 1 && criticalApps < 1) {
      appGroupHealth.health = 10;
      appGroupHealth.tagline = 'All Systems Operational';
    }
    
    return appGroupHealth;
  }

  handleClick = ({ target }) => {
    this.setState( s => ({
      contactPopoverVisibility: !s.contactPopoverVisibility,
      contactPopoverTarget: target
    }));
  }
  
  async componentDidMount() {
    this.fetchAppDataAndHealth();
    this.timer = setInterval(() => this.fetchAppDataAndHealth(), FETCH_RATE); 
  }
  
  render(){
    const { crApps, isLoading, webHealth, apiHealth, openIncidents } = this.state;

    if(!isLoading) {
      return (
          <AppContainer>
            <Header handleClick={this.handleClick} 
              show={this.state.contactPopoverVisibility} 
              target={this.state.contactPopoverTarget}
            />
            <SubHeader title={statusHeaderText.title} 
              desc={statusHeaderText.desc} 
              subtitle={statusHeaderText.subtitle}
            />
            <AppStatusLists isLoading={isLoading} 
              webHealth={webHealth} apiHealth={apiHealth} listOfApps={crApps} 
              calculateAppGroupStatus={this.calculateAppGroupStatus} 
              getAppHealthStatus={this.getAppHealthStatus}
            />
            <SubHeader title={incidentHeaderText.title} 
              desc={incidentHeaderText.desc} 
              subtitle={incidentHeaderText.subtitle}
            />
            <IncidentList openIncidents={openIncidents} />
          </AppContainer>
      );
    }
    else {
      return <Loading />
    }
  }
}

export default App;

const AppContainer = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 5%;
`;

const statusHeaderText = {
  title: `CallRevu's Status Page`,
  desc: `Current Status for Websites & API`,
  subtitle: `Check here for updates about CallRevu’s service availability and the status of software.`,
};

const incidentHeaderText = {
  title: `Upcoming Maintenance`,
  desc: `Current Information on Our Upcoming Maintenance`,
  subtitle: `Check here for updates so you’ll know ahead of time about potential service disruptions.`
};

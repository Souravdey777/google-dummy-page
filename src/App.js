import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import GoogleSearchSection from './components/googleSearchSection/googleSearchSection';
import Footer from './components/footer/footer';
import SettingsModal from './components/footer/bottomfooter/settingsModal/settingsModal';
import GoogleAppsModal from './components/header/googleApps/googleAppsModal/googleAppsModal';
class App extends Component {
  state={
    Settings:false,
    GoogleApps:false
  }

  SettingsHandler=()=>{
    this.setState({Settings:!this.state.Settings})
  }
  GoogleAppsHandler=()=>{
    this.setState({GoogleApps:!this.state.GoogleApps})
  }

  render() {
    const settingsModal=this.state.Settings?<SettingsModal clicked={this.SettingsHandler} show={this.state.Settings}/>:null;
    const googleAppsModal=this.state.GoogleApps?<GoogleAppsModal appsLogoClicked={this.GoogleAppsHandler} showApps={this.state.GoogleApps}/>:null;
    return (
      <div className="App">
        <Header appsLogoClicked={this.GoogleAppsHandler}/>
        {googleAppsModal}
        <GoogleSearchSection />
        <Footer clicked={this.SettingsHandler}/>
        {settingsModal}
      </div>
    );
  }
}

export default App;

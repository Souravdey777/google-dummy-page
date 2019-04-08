import React from 'react';
import Classnames from './googleSearchSection.module.css';
import GoogleLogo from '../../components/googleLogo/googleLogo';
import SearchingInput from './searchingInput/searchingInput';
import ButtonDiv from './buttomDiv/buttonDiv';
import Languages from './languagesDiv/languagesDiv';


class GoogleSearchSection extends React.Component {
    state = {
        query: "",
        url: ''
    }
    
    handleChange = (event) => {
        this.setState({ query: event.target.value }, () => {
            this.setState({ url: `https://www.google.com/search?q=${this.state.query}` }, () => {
                
            });
        });
    }
    keyPressed=(event)=> {
        if (event.key === 'Enter') {
            this.setState({ url: `https://www.google.com/search?q=${this.state.query}` }, () => {
                window.location.href = this.state.url;
            });
        }
      }
    render() {
        return (
            <div className={Classnames.SearchingSection}>
                <GoogleLogo />
                <SearchingInput keyPressed={this.keyPressed} value={this.state.query} handleChange={this.handleChange}  />
                <ButtonDiv url={this.state.url}/>
                <Languages />
            </div>)
    }
}
export default GoogleSearchSection;
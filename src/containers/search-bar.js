import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/weather-action';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {serchTerm: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({serchTerm:e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    console.log("Submitted search term" +this.state.serchTerm);
    this.props.fetchWeather(this.state.serchTerm);
    this.setState({searchTerm:''});
  }

  render(){
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
              placeholder="Get a 5 day forcast in your favorite cities"
              className="form-control"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    )}

}

function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, matchDispatchToProps)(SearchBar);

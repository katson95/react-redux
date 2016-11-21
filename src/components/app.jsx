import React, { Component } from 'react';
import logo from '../../public/logo.svg';
import '../../public/css/app.css';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import DataTable from './dataTable';
import SearchBar from '../containers/search-bar';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import WeatherList from '../containers/weather_list'

class App extends Component {


  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;

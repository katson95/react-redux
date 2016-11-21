import React, { Component } from 'react';
import logo from '../../public/logo.svg';
import '../../public/css/app.css';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import DataTable from './dataTable';
import SearchBar from '../containers/search-bar';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import WeatherList from '../containers/weather_list'

class Main extends Component {


  render() {
    return (
      <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>

              <Panel header="Go Joe" bsStyle="info">
                    <Grid>
                     <Row className="show-grid">
                       <Col md={6} mdPush={6}>
                          <BookDetail />
                       </Col>
                       <Col md={6} mdPull={6}>
                          <BookList />
                       </Col>
                     </Row>
                   </Grid>
            </Panel>
          <Panel header="REST" bsStyle="info">
                <SearchBar />
                <WeatherList />
                {this.props.children}
        </Panel>
      </div>
    );
  }
}

export default Main;

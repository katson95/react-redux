import React, { Component } from 'react';

//import { Panel, Grid, Row, Col } from 'react-bootstrap';




class DataTable extends Component {


  render() {
    return (

        <div>
          <h3 id="js-basic-example">A Simple Example</h3>
          <p>The most basic implementation of ReactDataGrid requires 4 properties; an array of columns, a rowGetter function to retrive a row for a given index, the number of rows the grid expects and the minimum height of the grid.</p>
          <p>The columns property is an array of object that has at a minimum key and name properties</p>

        </div>
    );
  }
}

export default DataTable;

import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){

    if(!this.props.book){
      return <div>Select a book.</div>;
    }

    return(
      <div>
        <h4>{this.props.book.title}</h4>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book:state.selectedBook,
  };
}

export default connect(mapStateToProps)(BookDetail);

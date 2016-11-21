import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

class BookList extends Component{

  renderList(){
    return this.props.books.map((book) => {
      return (
        <ListGroup fill>
          <ListGroupItem
            onClick={()=>this.props.selectBook(book)}
            key={book.title}
            className="list-group col-sm-4">
            {book.title}
          </ListGroupItem>
        </ListGroup>
      );
    });
  }

  render(){
    return (
        <ul>
          {this.renderList()}
        </ul>
    )}

}

function mapStateToProps(state){
  return{
    books:state.books
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BookList);

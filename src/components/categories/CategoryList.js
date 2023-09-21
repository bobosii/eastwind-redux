import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

// ReduxThunk aslında bir middlewaredir iki operasyon arası düzenleyici gibi düşünebilirsin

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories(); // Uygulama açıldığında getCategoriesi bir kere çağır demek
  }
  selectCategory = (categories) => {
    this.props.actions.changeCategory(categories);
  };

  render() {
    return (
      <div>
        <h3>
          <Badge>
            Categories
          </Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map((categories) => (
            <ListGroupItem
              active={
                categories.id === this.props.currentCategory.id ? true : false
              }
              onClick={() => this.selectCategory(categories)}
              key={categories.id}
            >
              {categories.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

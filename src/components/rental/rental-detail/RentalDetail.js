import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";

class RentalDetail extends React.Component {
  componentWillMount() {
    //Dispatch action
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }
  render() {
    const rental = this.props.rental;
    if (rental.id) {
      return (
        <div>
          <h3>{rental.title}</h3>
          <h3>{rental.city}</h3>
          <h3>{rental.category}</h3>
          <h3>{rental.street}</h3>
        </div>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

function mapStateToProps(state) {
  return { rental: state.rental.data };
}

export default connect(mapStateToProps)(RentalDetail);

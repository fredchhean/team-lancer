import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import {getProfiles} from "../../actions/profileActions";

class Profiles extends Component {

  componentDidMount(){
    this.props.getProfiles();
  }

  render() {
    const{profiles,loading} = this.props.profile;
    let profileItems;

    if(profiles === null || loading){
      profileItems = <Spinner />;
    } else {
      if(profiles.length > 0){
        profileItems = <h1>profiles here</h1>;
      } else {
        profileItems = <h4>no profiles found... </h4>;
      }
    }

    return (
      <div>
        <div>
          <div>
            <div>
              <h1>Fastlancer Profiles</h1>
              <p>Look at what we got!</p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired, 
}

const mapStateToProps = state => ({
  profile: state.profile

});


export default connect(mapStateToProps, {getProfiles})(Profiles);
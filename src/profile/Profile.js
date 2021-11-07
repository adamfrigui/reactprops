import React from 'react';
import PropTypes from 'prop-types';

const Profile = (props) => {
    Profile.defaultProps ={
        
    }
    
    const handleName = () =>{
        props.handleName(props.fullName);
    }
    return (
        <div>
            {props.fullName}
            <br/>
            {props.bio}
            <br/>
            {props.profession}
            <br/>
            {props.children}
            <br/>
            <button onClick={handleName}>click me </button>
        </div>
    )
}
    Profile.defaultProps = {
        fullName: "anonymous",
        bio: "nothing to put in here",
        profession: "no profession"
    }
    Profile.propType ={
        fullName :PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.string
    }

export default Profile

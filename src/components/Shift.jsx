import React, { Component } from 'react'
class Shift extends Component {
    state = { 
        apps: 0
     }

     applicationCounter = (count) => {
         console.log("SOMEONE APPLIED")
         this.setState({apps: count + 1})
     }
    render() { 
        console.log(this.props.shift)
        return ( 
            <div className="shiftCard">
                <h4 className="shiftHeader">{this.props.shift.practice.name}</h4>
                <p><strong>Clock-in:</strong> {new Date(this.props.shift.startDatetime).toLocaleString([], {dateStyle: 'short', timeStyle: 'short'})}</p>
                <p><strong>Clock-out:</strong> {new Date(this.props.shift.endDatetime).toLocaleString([], {dateStyle: 'short', timeStyle: 'short'})}</p>
                <p className="rate"><strong>Rate:</strong> GBP {this.props.shift.hourlyRate} per hour</p>
                <p>No. Applications: {this.state.apps}</p>
                {/* Needs more sophisticated application counter, potentially tracking id's of applicants and storing them in an array checking if applicants are unique and displaying the length of that array */}
                <button className="CTA" onClick={() => this.applicationCounter(this.state.apps)}>Apply</button>
            </div>
         );
    }
}
 
export default Shift;
import React, { Component } from 'react'
import Shift from "./Shift"
class ShiftList extends Component {
    state = { 
        shifts: [],
        locum: {
            id: '1234',
            firstName: 'John',
            lastName: 'Doe',
            staffType: 'gp',
            staffTypeId: '1',
           }
     }
    endpoint = "https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions"
    
    componentDidMount = () => { 
        this.getData();
    }

    getData = () => {
        fetch(this.endpoint)
        .then(response => response.json())
        .then(data => this.cleanData(data.data))
    }

    cleanData = async (data) => {
        let shiftHolder = [];
        let rightNowUNIX = new Date().getTime();
        await data.map(shift => 
            (shift.status.toUpperCase() === "POSTED" 
                && !shift.locum 
                && shift.staffType === this.state.locum.staffType 
                && new Date(shift.startDatetime).getTime() > rightNowUNIX) 
                && shiftHolder.push(shift)
            )
        this.setState({shifts: shiftHolder})
    }
    
    greetingCalculator = () => {
        let rightNow = new Date();
        console.log(rightNow.getHours())
        if( 4 < rightNow.getHours() && rightNow.getHours() <= 11) {
            return "morning"
        } else if (11 < rightNow.getHours() && rightNow.getHours() <= 16 ) {
            return "afternoon"
        } else if (16 < rightNow.getHours() && rightNow.getHours() <= 19) {
            return "evening"
        } else {
            return "night"
        }
    }
    render() { 
        console.log(this.state.shifts)
        return ( 
        <div className="mainHolder">
        <h2 className="greeting">Good {this.greetingCalculator()} {this.state.locum.firstName} {this.state.locum.lastName}</h2>
        <h3>Here are the latest shift openings for you:</h3>
        <div className="shiftContainer">
        
        {this.state.shifts.map(shift => <Shift shift={shift}/>)}
        </div> 
        </div>
        );
    }
}
export default ShiftList;
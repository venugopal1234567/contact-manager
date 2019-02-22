import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "../layouts/TextInputGroup"
import uuid from 'uuid'
class Addcontact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''

    }
    submitted = (dispatch,e) => {
        e.preventDefault();
        // console.log("haoooooo")
        const {name, email, phone} = this.state
        const newContact = {
            id:uuid(),
            name,
            email,
            phone
        }

        dispatch({type:'ADD_CONTACT', payload: newContact})
    }
    onchange = e => this.setState({[e.target.name]: e.target.value})
    render() {
        const  {name, email, phone} = this.state
        return(
            <Consumer>
                {value =>{
                    const {dispatch} = value;
                    return(
                        <div className='card'>
                            <div className='card-header'>
                                Add Contact
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.submitted.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name"> Name</label>
                                        <input
                                            name="name"
                                            type = "text"
                                            className="form-control"
                                            placeholder="Enter name..."
                                            value={
                                                name
                                            }
                                            onChange={this.onchange}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"> Email</label>
                                        <input
                                            type="text"
                                            name = "email"
                                            className="form-control"
                                            placeholder="Enter email..."
                                            value = {email}
                                            onChange={this.onchange}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone"> Phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Enter Phone number..."
                                            value={phone}
                                            onChange={this.onchange}
                                        />

                                    </div>
                                    <div>
                                        <input type="submit" value="Add Contact"  className="btn btn-light btn-block"/>
                                    </div>
                                </form>

                            </div>

                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default Addcontact;
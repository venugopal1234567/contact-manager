import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "../layouts/TextInputGroup"
import uuid from 'uuid'
import axios from 'axios'
class Editcontact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}

    }

     async componentDidMount() {
        const {id} = this.props.match.params;
         const response = await  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
         this.setState({
             name: response.data.name,
             email: response.data.email,
             phone:response.data.phone
         })
    }

    submitted = async (dispatch,e) => {
        e.preventDefault();
        // console.log("haoooooo")
        const {name, email, phone} = this.state
        if(name === ''){
            this.setState({errors: {name:'Name is Required'}})
            return
        }
        if(email === ''){
            this.setState({errors: {email:'Email is Required'}})
            return
        }
        if(phone === ''){
            this.setState({errors: {phone:'Phone is Required'}})
            return
        }
        const newContact = {
            name,
            email,
            phone
        }

        const {id} = this.props.match.params
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact)
        dispatch({type:'UPDATE_CONTACT', payload: response.data})


        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/')
    }
    onchange = e => this.setState({[e.target.name]: e.target.value})
    render() {
        const  {name, email, phone, errors} = this.state
        return(
            <Consumer>
                {value =>{
                    const {dispatch} = value;
                    return(
                        <div className='card'>
                            <div className='card-header'>
                                Edit Contact
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.submitted.bind(this,dispatch)}>
                                    <TextInputGroup label="Name" placeholder="Enter name..."  onchange= {this.onchange} error ={errors.name}  name="name" value={name}/>
                                    <TextInputGroup label="Email" placeholder="Enter Email..."  onchange= {this.onchange} error = {errors.email} name="email" value={email} type = "email"/>
                                    <TextInputGroup label="Phone" placeholder="Enter Phone..."  onchange= {this.onchange} error={errors.phone} name="phone" value={phone}/>

                                    <div>
                                        <input type="submit" value="Update Contact"  className="btn btn-light btn-block"/>
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

export default Editcontact;
import React, {Component} from 'react';
import Header from "../layouts/Header";
import PropType from 'prop-types';
import  {Consumer} from "../../context";
import './contact.css'
import axios from 'axios'
import {Link} from "react-router-dom";

class Contact extends Component {

    static propTypes ={
        contact: PropType.object.isRequired


    }

    state = {

        showContact :false

    }



    // OnClickShow(name, e){
    //  //   console.log(name)
    //  //   console.log(e)
    //  //   console.log(this.state)
    //  //   console.log(this.state.showContact)
    //     this.setState({showContact : !this.state.showContact})
    //     console.log(this.state.showContact)
    // }
    async onDelete (id, dispatch) {
        //  console.log('In delete')
        // this.props.deleteStateFunction()
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({type: 'DELETE_CONTACT', payload: id})
    }


    render() {
        const {id, name, email, phone } = this.props.contact;
        const {showContact} = this.state
        return (
            <Consumer>
                {value =>{
                    const {dispatch} = value
                    return(
                        <div className="card card-body mb-3">
                            {/*<h4> {name} <i onClick={ this.OnClickShow.bind(this, name)}*/}

                            {/*className=" fas fa-caret-down" /> </h4>*/}
                            <h4> {name} <i onClick={ ()=> this.setState({showContact : !this.state.showContact})}

                                           className=" fas fa-caret-down"
                                           style={{cursor : 'pointer'}}/>
                                <i  className="fas fa-times" style={{cursor:'pointer', float: 'right', color:'red'}} onClick={this.onDelete.bind(this, id, dispatch)}/>
                                <Link to={`/contact/edit/${id}`}> <i class="fas fa-pencil-alt" style={{cursor:'pointer', float:'right', marginRight:'2rem'}}></i> </Link>
                            </h4>
                            <h5>
                                {
                                    showContact ? <ul className="list-group">
                                        <li className="list-group-item">{id}</li>
                                        <li className="list-group-item">{email}</li>
                                        <li className="list-group-item">{phone}</li>
                                    </ul> : null
                                }

                            </h5>
                        </div>
                    )
                }}
            </Consumer>


        );
    }
}

//Contact.propType ={
//    name: PropType.string.isRequired,
//    email: PropType.string.isRequired,
//    phone: PropType.string.isRequired,


//}

export default Contact;
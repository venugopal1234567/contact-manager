import React, {Component} from 'react';

class Addcontact1 extends Component {
    constructor(props){
        super(props);
        this.nameInput =  React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    submitted = e => {
        e.preventDefault();
        //console.log(this.state)
        const contact = {
            name: this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact)
    }

    static defaultProps ={
        name : 'venugopal Hegde',
        email: 'venuhegde6@gmail.com',
        phone:'99-000-99999'

    }

    render() {
        const  {name, email, phone} = this.props
        return (
            <div className='card'>
                <div className='card-header'>
                    Add Contact
                </div>
                <div className='card-body'>
                    <form onSubmit={this.submitted}>
                        <div className="form-group">
                            <label htmlFor="name"> Name</label>
                            <input
                                name="name"
                                type = "text"
                                className="form-control"
                                placeholder="Enter name..."
                                defaultValue={
                                    name
                                }
                                ref = {this.nameInput}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Email</label>
                            <input
                                type="text"
                                name = "email"
                                className="form-control"
                                placeholder="Enter email..."
                                defaultValue = {email}
                                ref={this.emailInput}

                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"> Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Enter Phone number..."
                                defaultValue={phone}
                                ref={this.phoneInput}

                            />

                        </div>
                        <div>
                            <input type="submit" value="Add Contact"  className="btn btn-light btn-block"/>
                        </div>
                    </form>

                </div>

            </div>
        );
    }
}

export default Addcontact1;
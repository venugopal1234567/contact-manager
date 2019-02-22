import React, { Component } from 'react';
import Contacts from './components/contact/Contacts';
import Header from './components/layouts/Header'
import Addcontact from './components/contact/Addcontact'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from './context'
import About from './components/pages/about'
import NotFound from './components/pages/NotFound'
import Test from './components/test/Test'
import EditContact from './components/contact/EditContact'

class App extends Component {
  render() {

   return (
       <Provider>
           <Router>
      <div className="App">
          <Header branding ="Contact Manager"/>
          <div className="container">

              {/*<Addcontact/>*/}
             {/*<Contacts/>*/}
             <Switch>
                 <Route exact path ='/' component= {Contacts}/>
                 <Route exact path="/about" component={About}/>
                 <Route exact path="/contact/add" component={Addcontact}/>
                 <Route exact path="/test" component={Test}/>
                 <Route exact path="/contact/edit/:id" component={EditContact}/>
                 <Route component={NotFound}/>

             </Switch>
          </div>


      </div>
           </Router>
       </Provider>
    );
  }
}

export default App;

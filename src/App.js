import React from 'react';
import './App.css';
import VideoBanner from './VideoBanner';
import Brands from './Brands';
import Features from './Features';
// import Content from './Content';
// import Projects from './Projects';
// import Category from './Category';
import Portfolio from './Portfolio';
// import JobCategory from './JobCategory';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add_Proposal from './Add_Proposal';
import Problem from './Problem';
import Proposal from './Proposal';
import Dashboard from './Dashboard';
import EditUser from './EditUser';
import View from './View';
import Signup_User from './Signup_User';
import Signup_Service from './Signup_Service';
import Header_inner from './Header_inner';
import Header_Outer from './Header_Outer';
import Dashboard_service from './Dashboard_service';
import View_service from './View_service';
import Proposal_service from './Proposal_service';
import Assigned from './Assigned';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/signup_user" component={Signup_User}>
            <Signup_User />
          </Route>

          <Route exact path="/signup_Service" component={Signup_Service}>
            <Signup_Service />
          </Route>

          <Route exact path="/dashboard/:email" component={Dashboard}>

            < Dashboard />
            <Footer />
          </Route>
          <Route exact path="/dashboard/service/:profession" component={Dashboard_service}>
            < Dashboard_service />
            <Footer />
          </Route>


          <Route exact path="/problem/:email" component={Problem}>

            < Problem />
            <Footer />
          </Route>


          <Route exact path="/service/add_proposal" component={Problem}>
            <Add_Proposal />
            <Footer />
          </Route>

          <Route exact path="/editUser/:ProblemId" component={EditUser}>
            <Header_inner />
            < EditUser />
            <Footer />
          </Route>
          <Route exact path="/problem/view/:id" component={View}>

            < View />
            <Assigned/>
            < Proposal />
            
            <Footer />
          </Route>
          <Route exact path="/dashboard_service/view/:id" component={View}>
            < View_service />
            <Proposal_service />
            <Footer />
          </Route>


          <Route exact path="/">
            <Header_Outer />
            <VideoBanner />
            <Brands />
            <Features />
            {/* <Content /> */}
            {/* <Projects /> */}
            {/* <Category /> */}
            <Portfolio />
            {/* <JobCategory /> */}
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
    // <><Projects/></>
  );
}

export default App;

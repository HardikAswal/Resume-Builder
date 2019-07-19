import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GetInfo from './getinfo.js';
import landingPage from './landingpage.js';
import GetInfo2 from './getinfo2.js';
import GetInfo3 from './getinfo3.js';
import Tab from './chooseTemp.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this.state.db={
      firstname:"",
      lastname:"",
      address:"",
      city:"",
      state:"",
      email:"",
      phone:"",
      position:"",
      description:"",
      org1:"",
      org2:"",
      job1:"",
      job2:"",
      loc1:"",
      loc2:"",
      start1:"",
      start2:"",
      job1desc:"",
      job2desc:"",
      edu1:"",
      edu2:"",
      edu3:"",
      adr1:"",
      adr2:"",
      adr3:"",
      deg1:"",
      deg2:"",
      deg3:"",
      dur1:"",
      dur2:"",
      dur3:"",
      pjt1:"",
      pjt2:"",
      pjtd1:"",
      pjtd2:"",
      int:"",
      skl1:"",
      skl2:"",
      skl3:"",
      skl4:"",
      skl1value:[],
    }
  }

  AddInfo(info){
    let db=this.state.db;
    db.firstname=info.firstname;
    db.lastname=info.lastname;
    db.address=info.address;
    db.city=info.city;
    db.state=info.state;
    db.email=info.email;
    db.phone=info.phone;
    db.position=info.position;
    db.description=info.description;
    db.org1=info.org1;
    db.org2=info.org2;
    db.loc1=info.loc1;
    db.loc2=info.loc2;
    db.job1=info.job1;
    db.job2=info.job2;
    db.start1=info.start1;
    db.start2=info.start2;
    db.job1desc=info.job1desc;
    db.job2desc=info.job2desc;
    db.edu1=info.edu1;
    db.edu2=info.edu2;
    db.edu3=info.edu3;
    db.adr1=info.adr1;
    db.adr2=info.adr2;
    db.adr3=info.adr3;
    db.deg1=info.deg1;
    db.deg2=info.deg2;
    db.deg3=info.deg3;
    db.dur1=info.dur1;
    db.dur2=info.dur2;
    db.dur3=info.dur3;
    db.pjt1=info.pjt1;
    db.pjt2=info.pjt2;
    db.pjtd1=info.pjtd1;
    db.pjtd2=info.pjtd2;
    db.int=info.int;
    db.skl1=info.skl1;
    db.skl2=info.skl2;
    db.skl3=info.skl3;
    db.skl4=info.skl4;
  
  
    this.setState({
      db:db
    })
    console.log(this.state.db);
  }

  render(){
    
    return (
      <div className="body">
      <Router>
      <Route path="/" exact component={landingPage}/>
      <Route path="/chooseTemp" exact component={Tab}/>
      <Route path="/getInfo" render={()=><GetInfo AddInfo={this.AddInfo.bind(this)}  db={this.state.db}></GetInfo>}/>
      <Route path="/getInfo2" render={()=><GetInfo2 AddInfo={this.AddInfo.bind(this)}  db={this.state.db}></GetInfo2>} />
      <Route path="/getInfo3" render={()=><GetInfo3 AddInfo={this.AddInfo.bind(this)}  db={this.state.db}></GetInfo3>} />
      </Router>
      <div>
      </div>
    </div>
    )
  }
}

export default App;


































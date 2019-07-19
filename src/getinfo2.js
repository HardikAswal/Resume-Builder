import React from 'react';
import './getinfo2.css';
import './App.css';

function GetInfo2(props){

    let firstname=props.db.firstname;
    let lastname=props.db.lastname;
    let address=props.db.address;
    let phone=props.db.phone;
    let city=props.db.city;
    let state=props.db.state;
    let email=props.db.email;
    let position=props.db.position;
    let description=props.db.description;
    let org1=props.db.org1;
    let org2=props.db.org2;
    let job1=props.db.job1;
    let job2=props.db.job2;
    let loc1=props.db.loc1;
    let loc2=props.db.loc2;
    let start1=props.db.start1;
    let start2=props.db.start2;
    let job1desc=props.db.job1desc;
    let job2desc=props.db.job2desc;
    let edu1=props.db.edu1;
    let edu2=props.db.edu2;
    let edu3=props.db.edu3;
    let adr1=props.db.adr1;
    let adr2=props.db.adr2;
    let adr3=props.db.adr3;
    let deg1=props.db.deg1;
    let deg2=props.db.deg2;
    let deg3=props.db.deg3;
    let dur1=props.db.dur1;
    let dur2=props.db.dur2;
    let dur3=props.db.dur3;
    let pjt1=props.db.pjt1;
    let pjt2=props.db.pjt2;
    let pjtd1=props.db.pjtd1;
    let pjtd2=props.db.pjtd2;
    let int=props.db.int;
    let skl1=props.db.skl1;
    let skl2=props.db.skl2;
    let skl3=props.db.skl3;
    let skl4=props.db.skl4;  
    let skl1val=props.db.skl1val;

    return (
      <div>
      <div className="infoWrapper">
        <div className="info">
          <h2>Profile</h2>
          <div><input type="text" placeholder="First Name" onChange={(e)=>{firstname=e.target.value}}/></div>
          <div><input type="text" placeholder="Last Name" onChange={(e)=>{lastname=e.target.value}}/></div>
          <div><input type="text" placeholder="Address" onChange={(e)=>{address=e.target.value}}/></div>
          <div><input type="text" placeholder="Phone" onChange={(e)=>{phone=e.target.value}}/></div>
          <div><input type="email" name="Email" placeholder="Email" onChange={(e)=>{email=e.target.value}}/></div>
      </div>
      
      <div  className="info">
        <h2>About</h2>
        <div><input type="text" placeholder="Position" onChange={(e)=>{position=e.target.value}}></input></div>
        <div>
          <textarea className="textarea" rows='5' cols='20' placeholder="Description" onChange={(e)=>{description=e.target.value}}/>
        </div>
      </div>

      <div className="info">
        <h2>Work Experience</h2>
        <div><input type="text" placeholder="Organisation" onChange={(e)=>{org1=e.target.value}}/></div>
        <div><input type="text" placeholder="Job Title" onChange={(e)=>{job1=e.target.value}}/></div>
        <div><input type="text" placeholder="Job Description" onChange={(e)=>{job1desc=e.target.value}}/></div>
        <div><input type="text" placeholder="Location" onChange={(e)=>{loc1=e.target.value}}/></div>
        <div><input type="text" placeholder="Duration" onChange={(e)=>{start1=e.target.value}}/></div>
        
        <div className="Separator"></div>
        <div><input type="text" placeholder="Organisation" onChange={(e)=>{org2=e.target.value}}/></div>
        <div><input type="text" placeholder="Job Title" onChange={(e)=>{job2=e.target.value}}/></div>
        <div><input type="text" placeholder="Job Description" onChange={(e)=>{job2desc=e.target.value}}/></div>
        <div><input type="text" placeholder="Location" onChange={(e)=>{loc2=e.target.value}}/></div>
        <div><input type="text" placeholder="Duration" onChange={(e)=>{start2=e.target.value}}/></div>
      </div> 
  
      <div className="info">
      <h2>Education</h2>
      <div><input type="text" placeholder="School Name" onChange={(e)=>{edu1=e.target.value}}/></div>
      <div><input type="text" placeholder="Location" onChange={(e)=>{adr1=e.target.value}}/></div>
      <div><input type="text" placeholder="Degree" onChange={(e)=>{deg1=e.target.value}}/></div>
      <div><input type="text" placeholder="Duration" onChange={(e)=>{dur1=e.target.value}}/></div>

      <div className="Separator"></div>

      <div><input type="text" placeholder="School Name" onChange={(e)=>{edu2=e.target.value}}/></div>
      <div><input type="text" placeholder="Location" onChange={(e)=>{adr2=e.target.value}}/></div>
      <div><input type="text" placeholder="Degree" onChange={(e)=>{deg2=e.target.value}}/></div>
      <div><input type="text" placeholder="Duration" onChange={(e)=>{dur2=e.target.value}}/></div>

      <div className="Separator"></div>

      <div><input type="text" placeholder="School Name" onChange={(e)=>{edu3=e.target.value}}/></div>
      <div><input type="text" placeholder="Location" onChange={(e)=>{adr3=e.target.value}}/></div>
      <div><input type="text" placeholder="Degree" onChange={(e)=>{deg3=e.target.value}}/></div>
      <div><input type="text" placeholder="Duration" onChange={(e)=>{dur3=e.target.value}}/></div>
      </div>

      <div className="info">
        <h2>Projects</h2>
        <div><input type="text" placeholder="Project 1" onChange={(e)=>{pjt1=e.target.value}}/></div>
        <div><input type="text" placeholder="Project 1 Description" onChange={(e)=>{pjtd1=e.target.value}}/></div>
        <div><input type="text" placeholder="Project 2" onChange={(e)=>{pjt2=e.target.value}}/></div>
        <div><input type="text" placeholder="Project 2 Description" onChange={(e)=>{pjtd2=e.target.value}}/></div>
      </div>
  
      <div className="info">
        <h2>Skills</h2>
        <div><input type="text" placeholder="Skill" onChange={(e)=>{skl1=e.target.value}}/></div>
        <div><input type="text" placeholder="Skill" onChange={(e)=>{skl2=e.target.value}}/></div>
        <div><input type="text" placeholder="Skill" onChange={(e)=>{skl3=e.target.value}}/></div>
        <div><input type="text" placeholder="Skill" onChange={(e)=>{skl4=e.target.value}}/></div>
      </div>

      <button type="Submit" onClick={()=>{props.AddInfo({firstname,lastname,address,phone,city,state,email,
        position,description,org1,org2,job1,job2,loc1,loc2,start1,start2,job1desc,job2desc,edu1,edu2,edu3,adr1,
        adr2,adr3,deg1,deg2,deg3,dur1,dur2,dur3,pjt1,pjt2,pjtd1,pjtd2,int,skl1,skl2,skl3,skl4,skl1,skl1val})}}>BUILD!</button>
      </div>


    <div className="tempWrapper">
    <button type="submit" style={{float:"right"}} onClick={window.print}><i className="fa fa-print"></i></button>
    <div className="rela-block page">
    <div className="rela-block top-bar">
        <div className="caps rela-name"><div className="abs-center">{props.db.firstname} {props.db.lastname}</div></div>
    </div>
    <div className="side-bar">
        <div className="mugshot">
            <div className="logo">
                <svg viewbox="0 0 80 80" className="rela-block logo-svg">
                    <path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" stroke-width="2.5" fill="none"/>
                </svg>
                <p className="logo-text">{props.db.firstname[0]}{props.db.lastname[0]}</p>
            </div>
        </div>
     
        <p>{props.db.address}</p>
        <p>{props.db.phone}</p>
        <p>{props.db.email}</p>
        <br></br>
        <p className="rela-block caps side-header">Skills</p>
        <p className="rela-block list-thing">{props.db.skl1}</p>
        <p className="rela-block list-thing">{props.db.skl2}</p>
        <p className="rela-block list-thing">{props.db.skl3}</p>
        <p className="rela-block list-thing">{props.db.skl4}</p>

        <div className="gap"></div>

        <p className="rela-block caps side-header">Education</p>
        <p className="rela-block bold list-thing">{props.db.edu1}</p>
        <p className="rela-block list-thing">{props.db.adr1}</p>
        <p className="rela-block list-thing">{props.db.deg1}</p>
        <p className="rela-block list-thing">{props.db.dur1}</p>

        <div className="Separator"></div>

        <p className="rela-block bold list-thing">{props.db.edu2}</p>
        <p className="rela-block list-thing">{props.db.adr2}</p>
        <p className="rela-block list-thing">{props.db.deg2}</p>
        <p className="rela-block list-thing">{props.db.dur2}</p>

        <div className="Separator"></div>

        <p className="rela-block bold list-thing">{props.db.edu3}</p>
        <p className="rela-block list-thing">{props.db.adr3}</p>
        <p className="rela-block list-thing">{props.db.deg3}</p>
        <p className="rela-block list-thing">{props.db.dur3}</p>
      </div>
    
    <div className="rela-block content-container">
        <h2 className="rela-block caps title">{props.db.position}</h2>
        <div className="rela-block rela-separator"></div>
        <div className="rela-block caps greyed">Profile</div>
        <p className="long-margin">{props.db.description}</p>
        <div className="rela-block caps greyed">Experience</div>

        <h3>{props.db.org1}</h3>
        <p className="light">Job title |<b> {props.db.job1}</b></p>
        <p className="light">Location |<b> {props.db.loc1}</b></p>
        <p className="light">Duration |<b> {props.db.start1}</b></p>
        <p className="justified">{props.db.job1desc}</p>
        
        <div className="Separator"></div>

        <h3>{props.db.org2}</h3>
        <p className="light">Job title |<b> {props.db.job2}</b></p>
        <p className="light">Location |<b> {props.db.loc2}</b></p>
        <p className="light">Duration |<b> {props.db.start2}</b></p>
        <p className="justified below">{props.db.job2desc}</p> 
</div>
</div>
    </div>
    </div>
    )
  }

  export default GetInfo2;
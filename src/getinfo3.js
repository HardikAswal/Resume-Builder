import React from 'react';
import './getinfo3.css';
import './App.css';

function GetInfo3(props){

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
    <div class="container">
  <div class="word_split wrapper">
  <span class="word word1">{props.db.firstname}</span>
  <span class="word word2">{props.db.lastname}</span>
  <div className="Separator"></div>
  <span class="word word3">Personal</span>
  <span class="word word4">Details</span>
  <div className="Separator"></div>
  <span class="word word8">About</span>
  <div className="Separator"></div>
  <span class="word word5">Employment</span>
  <span class="word word6">History </span>
  <div className="Separator"></div>
  <span class="word word7">Education</span>
  <div className="Separator"></div>
  <span class="word word9"></span>
  <div className="Separator"></div>
  {/* <span class="word word10">Technical</span> */}
  <span class="word word11">Skills </span>
  <div className="Separator"></div>
  {/* <span class="word word12">Projects</span> */}
  <span class="word word13">Projects</span>
    
    <div class="bubble1">
     <span class="the-arrow1"></span>
      HI! <br/> I AM..
   </div>
  
  <div class="bubble3">
     <span class="the-arrow3"></span>
    LOCATION | {props.db.address}<br/>
    PHONE | {props.db.phone} <br/>
    EMAIL | {props.db.email}<br/>
    
   </div>
  <div class="bubble4">
     <span class="the-arrow4"></span>
     {props.db.org1}<br/>
    {props.db.job1} | Duration {props.db.start1} | Location {props.db.loc1}<br/>
    {props.db.job1desc}<br/><br/>
    {props.db.org2}<br/>
    {props.db.job2} | Duration {props.db.start2} | Location {props.db.loc2}<br/>
    {props.db.job2desc}
    
   </div>
  <div class="bubble5">
     <span class="the-arrow5"></span>
    {props.db.position}<br/><br/>
    {props.db.description}<br/>

   </div>
  <div class="bubble6">
     <span class="the-arrow6"></span>
    {props.db.skl1}<br/>
    {props.db.skl2}<br/>
    {props.db.skl3}<br/>
    {props.db.skl4}<br/>
   </div>
  <div class="bubble7">
     <span class="the-arrow7"></span>
    {props.db.edu1}<br/>
    {props.db.adr1}<br/>
    {props.db.deg1}<br/>
    {props.db.dur1}<br/><br/>
    {props.db.edu2}<br/>
    {props.db.adr2}<br/>
    {props.db.deg2}<br/>
    {props.db.dur2}<br/><br/>
    {props.db.edu3}<br/>
    {props.db.adr3}<br/>
    {props.db.deg3}<br/>
    {props.db.dur3}<br/>
   </div>
  <div class="bubble8">
     <span class="the-arrow8"></span>
    {props.db.pjt1}<br/>
    {props.db.pjtd1}<br/><br/>
    {props.db.pjt2}<br/>
    {props.db.pjtd2}<br/>
   </div>   
</div>
   
</div>
 
    </div>
    </div>
    )
  }

  export default GetInfo3;
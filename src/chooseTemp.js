import React from 'react';
import './chooseTemp.css';
import { Card,Button,CardDeck} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function callback(key) {
  console.log(key);
}

function Tab(){
  return(
    <div className="tab">
      <h1 className="text">Resume Templates</h1>
<CardDeck className="CardDeck">
  <Card>
    <Card.Img variant="top" src="https://freefrontend.com/assets/img/html-resume-templates/Sample-Resume.png" />
    <Card.Body>
      <Card.Title >Basic</Card.Title>
      <Card.Text >
      Easily personalize this basic resume layout that can be completed in under
       ten minutes through our intuitive process.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/getInfo"><Button className="button">Go</Button></Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://freefrontend.com/assets/img/html-resume-templates/CSS3-Creative-Resume.png" />
    <Card.Body>
      <Card.Title>Designer</Card.Title>
      <Card.Text>
      A professional resume sample that has been approved by various recruiters and 
      helped numerous people get their dream job.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/getInfo3"><Button className="button">Go</Button></Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://freefrontend.com/assets/img/html-resume-templates/resume-stuff.png" />
    <Card.Body>
      <Card.Title>Professional</Card.Title>
      <Card.Text>
      Creative Resume template for people that are applying for jobs in young companies or start-ups 
      where creativity and innovation are highly valued.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/getInfo2"><Button className="button">Go</Button></Link>
    </Card.Footer>
  </Card>
</CardDeck> 
</div> 
  );
}

export default Tab;
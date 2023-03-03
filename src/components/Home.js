import React, {Component} from "react";
import Header from "./Navbar";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faDollar, faGraduationCap, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import '../styles.css';


class Hero extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(       
            <div className="container">
                <Header />

                <div className="row">
                    <Col className="d-flex">
                        <Card id="card1" style={{ width: '220px', border:'0'}}>
                        <Card.Body style={{ width: '200px' }} className="mx-auto">
                            <span className='fa-6x offset-1'><FontAwesomeIcon icon={faGraduationCap} className="5x spin" /></span>                       
                            <Card.Text id='card1text' className="offset">UNDERGRADUATE</Card.Text>
                        </Card.Body>
                        </Card>
                        <Card id="card2" style={{ width: '220px', border:'0' }}>
                        <Card.Body style={{ width: '200px' }} className="mx-auto">
                            <span className='fa-6x offset-1'><FontAwesomeIcon icon={faBriefcase} className="5x spin" /></span>                       
                            <Card.Text id='card2text' className="offset-1">GRADUATE</Card.Text>
                        </Card.Body>
                        </Card >
                        <Card id="card3" style={{ width: '220px', border:'0' }}>
                        <Card.Body style={{ width: '200px' }} className="mx-auto">
                            <span className='fa-6x offset-1'><FontAwesomeIcon icon={faPaperPlane} className="5x spin" /></span>                       
                            <Card.Text id='card3text' className="offset-1">TRANSFER</Card.Text>
                        </Card.Body>
                        </Card>
                        <Card id="card4" style={{ width: '220px', border:'0' }}> 
                        <Card.Body style={{ width: '200px' }} className="mx-auto">
                            <span className='fa-6x offset-3'><FontAwesomeIcon icon={faDollar} className="5x spin" /></span>                       
                            <Card.Text id='card4text' className="">FINANCIAL AID</Card.Text>
                        </Card.Body>
                        </Card>
                        <Card id="card5" style={{ width: '220px', border:'0' }}>
                        <Card.Body style={{ width: '200px' }} className="mx-auto">
                            <span className='fa-6x offset-2'><FontAwesomeIcon icon={faLocationDot} className="5x spin" /></span>                       
                            <Card.Text id='card5text' className="offset-3">VISIT</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        );
    }


}
export default Hero;
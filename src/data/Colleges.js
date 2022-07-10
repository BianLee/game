import React from "react"
import OhioStateUniversity from "./colleges/OhioStateUniversity";
import UniversityOfMaryland from "./colleges/UniversityOfMaryland";
import LouisianaStateUniversity from "./colleges/LouisianaStateUniversity"
import UniversityOfMississippi from "./colleges/UniversityOfMississippi"
import UniversityOfFlorida from "./colleges/UniversityOfFlorida"
import UniversityOfTexasAtAustin from "./colleges/UniversityOfTexasAtAustin"
import UniversityOfWyoming from "./colleges/UniversityOfWyoming"
import UniversityOfArizona from "./colleges/UniversityOfArizona"
import UniversityOfColoradoBoulder from "./colleges/UniversityOfColoradoBoulder"
import UniversityOfSouthDakota from "./colleges/UniversityOfSouthDakota"
import UniversityOfAlabama from "./colleges/UniversityOfAlabama"
import IndianaUniversity from "./colleges/IndianaUniversity"
import UniversityOfMissouri from "./colleges/UniversityOfMissouri"
import UniversityOfArkansas from "./colleges/UniversityOfArkansas"
import UniversityOfTennesseeKnoxville from "./colleges/UniversityOfTennesseeKnoxville"
import PennStateUniversity from "./colleges/PennStateUniversity"
import UniversityOfConnecticut from "./colleges/UniversityOfConnecticut"
import UniversityOfDelaware from "./colleges/UniversityOfDelaware"
import "../App.css"

class Colleges extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
      
      
  
    }


 




    render() {
        return (
            <>
            <div className="grid-container" onClick={(e) => this.props.handleHoverUniversityClick(e.target.dataset.set)}onMouseLeave={() => this.props.deleteHoverUniversity()} onMouseOver={(e) => this.props.updateHoverUniversity(e.target.dataset.set)} >
                <div className="svgContainer grid-item" data-set="University of Arizona" style={{backgroundColor: this.props.selectedUniversity == "University of Arizona" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfArizona />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Maryland" style={{backgroundColor: this.props.selectedUniversity == "University of Maryland" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfMaryland />
                  </div>
                  <div className="svgContainer grid-item" data-set="Louisiana State University" style={{backgroundColor: this.props.selectedUniversity == "Louisiana State University" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <LouisianaStateUniversity />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Mississippi" style={{backgroundColor: this.props.selectedUniversity == "University of Mississippi" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfMississippi />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Florida" style={{backgroundColor: this.props.selectedUniversity == "University of Florida" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfFlorida />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Texas at Austin" style={{backgroundColor: this.props.selectedUniversity == "University of Texas at Austin" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfTexasAtAustin />
                  </div>
                  <div className="svgContainer grid-item" data-set="Ohio State University" style={{backgroundColor: this.props.selectedUniversity == "Ohio State University" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <OhioStateUniversity />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Wyoming" style={{backgroundColor: this.props.selectedUniversity == "University of Wyoming" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfWyoming />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of South Dakota" style={{backgroundColor: this.props.selectedUniversity == "University of South Dakota" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfSouthDakota />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Colorado Boulder" style={{backgroundColor: this.props.selectedUniversity == "University of Colorado Boulder" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfColoradoBoulder /> 
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Alabama" style={{backgroundColor: this.props.selectedUniversity == "University of Alabama" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfAlabama />
                  </div>
                  <div className="svgContainer grid-item" data-set="Indiana University Bloomington" style={{backgroundColor: this.props.selectedUniversity == "Indiana University Bloomington" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <IndianaUniversity />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Missouri" style={{backgroundColor: this.props.selectedUniversity == "University of Missouri" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfMissouri />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Arkansas" style={{backgroundColor: this.props.selectedUniversity == "University of Arkansas" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfArkansas />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Tennessee Knoxville" style={{backgroundColor: this.props.selectedUniversity == "University of Tennessee Knoxville" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfTennesseeKnoxville />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Connecticut" style={{backgroundColor: this.props.selectedUniversity == "University of Connecticut" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfConnecticut />
                  </div>
                  <div className="svgContainer grid-item" data-set="Pennsylvania State University" style={{backgroundColor: this.props.selectedUniversity == "Pennsylvania State University" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <PennStateUniversity />
                  </div>
                  <div className="svgContainer grid-item" data-set="University of Delaware" style={{backgroundColor: this.props.selectedUniversity == "University of Delaware" ? "#b3b1b1" : "", opacity: this.props.popupBoolean == true ? "0.3" : ""}}>
                    <UniversityOfDelaware/>
                  </div>


                  
                </div>
                <p style={{fontSize: "20px"}}>{this.state.hoverUniversity}</p>
            </>
          

        )
    }
}


export default Colleges
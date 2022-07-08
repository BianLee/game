import React from "react";
import './App.css'; 
import USAMap from "react-usa-map";

var globalStateID = -1; 
const stateArray = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
"Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
 "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
"New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
"South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      stateID: -1, 
      selectedState: "",
      selectedStateNumber: -1, 
      hoverState: "", 
      stateColors: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
      "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 
      "", "", "", "", "", "", "", "", "", ""], 
      lastElectionColors: ["#CC0000", "#CC0000", "navy", "#CC0000", "navy", "navy", "navy", "navy", "#CC0000", "navy",
      "navy", "#CC0000", "navy", "#CC0000", "#CC0000", "#CC0000", "#CC0000", "#CC0000", "navy", "navy", 
      "navy", "navy", "navy", "#CC0000", "#CC0000", "#CC0000", "#CC0000", "navy", "navy", "navy",
      "navy", "navy", "#CC0000", "#CC0000", "#CC0000", "#CC0000", "navy", "navy", "navy", "#CC0000", 
      "#CC0000", "#CC0000", "#CC0000", "#CC0000", "navy", "navy", "navy", "#CC0000", "navy", "#CC0000"], 
    }
  }



  findStateId = (e) => {
    let i = -1; 
    if (e.target.dataset.name == "AL") {
      i = 0;
    }
    else if (e.target.dataset.name == "AK") {
      i = 1; 
    }
    else if (e.target.dataset.name == "AZ") {
      i = 2; 
    }
    else if (e.target.dataset.name == "AR") {
      i = 3; 
    }
    else if (e.target.dataset.name == "CA") {
      i = 4; 
    }
    else if (e.target.dataset.name == "CO") {
      i = 5; 
    }
    else if (e.target.dataset.name == "CT") {
      i = 6; 
    }
    else if (e.target.dataset.name == "DE") {
      i = 7; 
    }
    else if (e.target.dataset.name == "FL") {
      i = 8; 
    }
    else if (e.target.dataset.name == "GA") {
      i = 9; 
    }
    else if (e.target.dataset.name == "HI") {
      i = 10; 
    }
    else if (e.target.dataset.name == "ID") {
      i = 11; 
    }
    else if (e.target.dataset.name == "IL") {
      i = 12; 
    }
    else if (e.target.dataset.name == "IN") {
      i = 13; 
    }
    else if (e.target.dataset.name == "IA") {
      i = 14; 
    }
    else if (e.target.dataset.name == "KS") {
      i = 15; 
    }
    else if (e.target.dataset.name == "KY") {
      i = 16; 
    }
    else if (e.target.dataset.name == "LA") {
      i = 17; 
    }
    else if (e.target.dataset.name == "ME") {
      i = 18; 
    }
    else if (e.target.dataset.name == "MD") {
      i = 19; 
    }
    else if (e.target.dataset.name == "MA") {
      i = 20; 
    }
    else if (e.target.dataset.name == "MI") {
      i = 21; 
    }
    else if (e.target.dataset.name == "MN") {
      i = 22; 
    }
    else if (e.target.dataset.name == "MS") {
      i = 23; 
    }
    else if (e.target.dataset.name == "MO") {
      i = 24; 
    }
    else if (e.target.dataset.name == "MT") {
      i = 25; 
    }
    else if (e.target.dataset.name == "NE") {
      i = 26; 
    }
    else if (e.target.dataset.name == "NV") {
      i = 27; 
    }
    else if (e.target.dataset.name == "NH") {
      i = 28; 
    }
    else if (e.target.dataset.name == "NJ") {
      i = 29; 
    }
    else if (e.target.dataset.name == "NM") {
      i = 30; 
    }
    else if (e.target.dataset.name == "NY") {
      i = 31; 
    }
    else if (e.target.dataset.name == "NC") {
      i = 32; 
    }
    else if (e.target.dataset.name == "ND") {
      i = 33; 
    }
    else if (e.target.dataset.name == "OH") {
      i = 34; 
    }
    else if (e.target.dataset.name == "OK") {
      i = 35; 
    }
    else if (e.target.dataset.name == "OR") {
      i = 36; 
    }
    else if (e.target.dataset.name == "PA") {
      i = 37; 
    }
    else if (e.target.dataset.name == "RI") {
      i = 38; 
    }
    else if (e.target.dataset.name == "SC") {
      i = 39; 
    }
    else if (e.target.dataset.name == "SD") {
      i = 40; 
    }
    else if (e.target.dataset.name == "TN") {
      i = 41; 
    }
    else if (e.target.dataset.name == "TX") {
      i = 42; 
    }
    else if (e.target.dataset.name == "UT") {
      i = 43; 
    }
    else if (e.target.dataset.name == "VT") {
      i = 44; 
    }
    else if (e.target.dataset.name == "VA") {
      i = 45; 
    }
    else if (e.target.dataset.name == "WA") {
      i = 46; 
    }
    else if (e.target.dataset.name == "WV") {
      i = 47; 
    }
    else if (e.target.dataset.name == "WI") {
      i = 48; 
    }
    else if (e.target.dataset.name == "WY") {
      i = 49; 
    }
    globalStateID = i; 
  }



  hoverHandler = (e) => {
    console.log(e.target.dataset.name);
    console.log(stateArray[globalStateID])
    let newArray = Array.from(this.state.stateColors);
    if (newArray[globalStateID] == "#e3e1e1") {
      newArray[globalStateID] = ""
    }
    this.findStateId(e)
    if (e.target.dataset.name != undefined && newArray[globalStateID] == "") {
      newArray[globalStateID] = "#e3e1e1"
    }
    this.setState({
      stateColors: newArray 
    })
  }  



  
  mapHandler = (e) => {

  

    this.findStateId(e)
 

    this.setState({
      selectedState: stateArray[globalStateID] 
    })


    // console.log(globalStateID); 
  
    let newArray = Array.from(this.state.stateColors);

   console.log(newArray[globalStateID]) 

    if (newArray[globalStateID] == "#e3e1e1" || newArray[globalStateID] == "") {
      newArray[globalStateID] = this.state.lastElectionColors[globalStateID]; 
    }
    else if (newArray[globalStateID] == "#CC0000") {
        newArray[globalStateID] = ''; 
        this.setState({
          selectedState: ""
        })
      
    }
    else if (newArray[globalStateID] == "navy") {
      newArray[globalStateID] = ''; 
      this.setState({
        selectedState: ""
      })
    }
      
    
    this.setState({
      stateColors: newArray
    })

    /* 
    let newArray = Array.from(this.state.stateColors);
    if (newArray[i] == "") {
      newArray[i] = this.state.lastElectionColors[i]; 
    }
    else if (newArray[i] == "#CC0000") {
      if (newArray[i] == this.state.lastElectionColors[i]) {
        newArray[i] = 'navy'; 
      }
      else {
        newArray[i] = ''; 
      }
    }
    else if (newArray[i] == "navy") {
      if (newArray[i] == this.state.lastElectionColors[i]) {
        newArray[i] = '#CC0000'; 
      }
      else {
        newArray[i] = ''; 
      }
      
    }
    this.setState({
      stateColors: newArray
    })
    */ 
    
  }

  statesCustomConfig = () => {
    return {
      "AL": {
        fill: this.state.stateColors[0],
      },
      "AK": {
        fill: this.state.stateColors[1], 
      },
      "AZ": {
        fill: this.state.stateColors[2], 
      },
      "AR": {
        fill: this.state.stateColors[3], 
      },
      "CA": {
        fill: this.state.stateColors[4], 
      },
      "CO": {
        fill: this.state.stateColors[5], 
      },
      "CT": {
        fill: this.state.stateColors[6], 
      },
      "DE": {
        fill: this.state.stateColors[7], 
      },
      "FL": {
        fill: this.state.stateColors[8], 
      },
      "GA": {
        fill: this.state.stateColors[9], 
      },
      "HI": {
        fill: this.state.stateColors[10], 
      },
      "ID": {
        fill: this.state.stateColors[11], 
      },
      "IL": {
        fill: this.state.stateColors[12], 
      },
      "IN": {
        fill: this.state.stateColors[13], 
      },
      "IA": {
        fill: this.state.stateColors[14], 
      },
      "KS": {
        fill: this.state.stateColors[15], 
      },
      "KY": {
        fill: this.state.stateColors[16], 
      },
      "LA": {
        fill: this.state.stateColors[17], 
      },
      "ME": {
        fill: this.state.stateColors[18], 
      },
      "MD": {
        fill: this.state.stateColors[19], 
      },
      "MA": {
        fill: this.state.stateColors[20], 
      },
      "MI": {
        fill: this.state.stateColors[21], 
      },
      "MN": {
        fill: this.state.stateColors[22], 
      },
      "MS": {
        fill: this.state.stateColors[23], 
      },
      "MO": {
        fill: this.state.stateColors[24], 
      },
      "MT": {
        fill: this.state.stateColors[25], 
      },
      "NE": {
        fill: this.state.stateColors[26], 
      },
      "NV": {
        fill: this.state.stateColors[27], 
      },
      "NH": {
        fill: this.state.stateColors[28], 
      },
      "NJ": {
        fill: this.state.stateColors[29], 
      },
      "NM": {
        fill: this.state.stateColors[30], 
      },
      "NY": {
        fill: this.state.stateColors[31], 
      },
      "NC": {
        fill: this.state.stateColors[32], 
      },
      "ND": {
        fill: this.state.stateColors[33], 
      },
      "OH": {
        fill: this.state.stateColors[34], 
      },
      "OK": {
        fill: this.state.stateColors[35], 
      },
      "OR": {
        fill: this.state.stateColors[36], 
      },
      "PA": {
        fill: this.state.stateColors[37], 
      },
      "RI": {
        fill: this.state.stateColors[38], 
      },
      "SC": {
        fill: this.state.stateColors[39], 
      },
      "SD": {
        fill: this.state.stateColors[40], 
      },
      "TN": {
        fill: this.state.stateColors[41], 
      },
      "TX": {
        fill: this.state.stateColors[42], 
      },
      "UT": {
        fill: this.state.stateColors[43], 
      },
      "VT": {
        fill: this.state.stateColors[44], 
      },
      "VA": {
        fill: this.state.stateColors[45], 
      },
      "WA": {
        fill: this.state.stateColors[46], 
      },
      "WV": {
        fill: this.state.stateColors[47], 
      },
      "WI": {
        fill: this.state.stateColors[48], 
      },
      "WY": {
        fill: this.state.stateColors[49], 
      }


      
    };
  }; 

 render() {
  return (
   <>
      <center>
      <br/>
      <div onMouseOver={this.hoverHandler}>
      <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler}  />
    </div>
      <br/>
      <h1>{this.state.selectedState}</h1>
      <h1>{this.state.hoverState}</h1>
      </center>
   
    
   </>
  )
 }
}

export default App;

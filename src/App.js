import React from "react";
import './App.css'; 
import USAMap from "react-usa-map";
import Colorado from "./data/Colorado"



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
      selectedStates: [], 
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



  findStateId(e) {
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
    let newArray = Array.from(this.state.stateColors);
    if (newArray[globalStateID] == "#e3e1e1") {
      newArray[globalStateID] = ""
    }
    this.findStateId(e)
    this.setState({
      hoverState: stateArray[globalStateID]
    })
    if (e.target.dataset.name != undefined && newArray[globalStateID] == "") {
      newArray[globalStateID] = "#e3e1e1"
    }
    this.setState({
      stateColors: newArray 
    })
  }  



  
  mapHandler = (e) => {

    
    this.findStateId(e)
    
    if (this.state.selectedStates.length < 3) {
      this.setState({
        selectedStates:[...this.state.selectedStates, stateArray[globalStateID]]
      })
    }

    // console.log(globalStateID); 
  
    let newArray = Array.from(this.state.stateColors);

  

    if ((newArray[globalStateID] == "#e3e1e1" || newArray[globalStateID] == "") && this.state.selectedStates.length < 3) {
      newArray[globalStateID] = this.state.lastElectionColors[globalStateID]; 
    }
    else if (newArray[globalStateID] == "#CC0000") {
        newArray[globalStateID] = ''; 
        this.setState({
          selectedStates: this.state.selectedStates.filter(item => item != stateArray[globalStateID])
        })
      
    }
    else if (newArray[globalStateID] == "navy") {
      newArray[globalStateID] = ''; 
      this.setState({
        selectedStates: this.state.selectedStates.filter(item => item != stateArray[globalStateID])
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

      <div className="row">
        <div className="column" style={{float: "left", width: "62%", maxWidth: "1000px"}}>
            <br/>
            <div onMouseOver={this.hoverHandler}>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} /> 
          </div>
        

     {/* 
      <svg style={{width: "250px", height: "250px"}} >
            <path
                fill="rgb(211, 211, 211)"
                d="M129.6 240.1 133.6 239.7 135.1 237.6 135.6 234.7 132.1 234.1 131.5 233.4 132 231.4 131.9 230.8 133.8 230.2 136.8 227.4 137.4 222.4 138.8 219 140.7 216.8 144.3 215.2 145.9 213.6 146 211.5 145 210.9 144 209.9 142.8 204 140.1 199.2 140.7 195.7 138.3 194.6 69.2 90.5 88.1 22.9 21 7.2 19.5 11.9 19.4 19.3 14.2 31.1 11.1 33.7 10.8 34.9 9 35.7 7.6 39.9 6.8 43.1 9.5 47.3 11.1 51.5 12.2 55.1 11.9 61.5 10.1 64.6 9.5 70.4 8.5 74.1 10.3 78 13.1 82.5 15.3 87.4 16.6 91.4 16.3 94.7 16 95.2 16 97.3 21.6 103.6 21.1 106 20.5 108.2 19.8 110.2 20 118.4 22.1 122.1 24 124.7 26.8 125.2 27.8 128 26.6 131.5 24.5 133.1 23.4 133.1 22.6 137 23.1 139.9 26.3 144.3 27.9 149.6 29.4 154.3 30.7 157.4 34.1 163.2 35.5 165.8 36 168.7 37.6 169.7 37.6 172.1 36.8 174 35 181.2 34.6 183.1 37 185.8 41.2 186.3 45.7 188.1 49.6 190.2 52.5 190.2 55.4 193.3 58 198.1 59.1 200.4 63 202.5 67.9 203.3 69.3 205.4 70 208.6 68.5 209.3 68.8 210.3 72.1 211.1 74.8 211.2 78 209.5 81.9 213.7 82.7 216 85.2 220.2 85.6 223.4 85.6 232.8 86.1 234.6 96.1 236.1 115.8 238.8 129.6 240.1zM41.5 196.4 42.8 198 42.6 199.3 39.4 199.2 38.8 198 38.2 196.5 41.5 196.4zM43.4 196.4 44.7 195.8 48.2 197.9 51.3 199.1 50.4 199.7 45.9 199.5 44.3 197.9 43.4 196.4zM64.1 216.2 65.9 218.6 66.7 219.5 68.3 220.1 68.8 218.7 67.9 216.9 65.2 214.9 64.1 215 64.1 216.2zM62.7 224.9 64.5 228 65.7 230 64.2 230.2 62.9 229C62.9 229 62.2 227.6 62.2 227.1 62.2 226.7 62.2 225 62.2 225L62.7 224.9z"
            />
      </svg>
      <svg style={{width: "250px", height: "250px"}} >
            <path
                fill="rgb(211, 211, 211)"
                d="M127.3 19.2 20.6 5.8 6.5 94.2 119.8 107.8 127.3 19.2z"
            />
      </svg>
      <p>Hello</p> */}
      
   
        
      
        <br/>
        <center>
        <p>
        {this.state.selectedStates.map((item, index) => {
          return (
            <span>{index ? ', ': ''}{item}</span>
          )
        })}
        </p>
        </center>
        </div>
      
        
        <div className="column" style={{ width: "36%", marginLeft: "2%"}}>
          <div style={{float: "left",  width: "40%"}}> 
            <span style={{fontSize: "30px"}}>{this.state.hoverState}</span>
            <br/>
            <span style={{fontSize: "20px"}}>Population: 3.5 million</span>
            
          </div>
          <div style={{float: "right", width: "60%"}}>
          <Colorado />
          </div>
          
        
        
       
        </div> 


      </div>
   </>
  )
 }
}

export default App;

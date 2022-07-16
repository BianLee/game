import React from "react"
import DemocraticParty from "./parties/DemocraticParty"
import RepublicanParty from "./parties/RepublicanParty"
import "../App.css"

class Parties extends React.Component {
    render() {
        return (
            <>
                <div className="grid-container-two">
                    <div className="svgContainerTwo grid-item-two" id="dnc">
                        <DemocraticParty />
                    
                    </div>
                    <div className="svgContainerTwo grid-item-two" id="rnc">
                        <RepublicanParty />
                    </div>
                </div>
            </>
        )
    }
}

export default Parties
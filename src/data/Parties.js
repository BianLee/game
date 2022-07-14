import React from "react"
import DemocraticParty from "./parties/DemocraticParty"
import RepublicanParty from "./parties/RepublicanParty"
import "../App.css"

class Parties extends React.Component {
    render() {
        return (
            <>
                <div className="grid-container-two">
                    <div className="svgContainer grid-item">
                        <DemocraticParty />
                    </div>
                    <div className="svgContainer grid-item">
                        <RepublicanParty />
                    </div>
                </div>
            </>
        )
    }
}

export default Parties
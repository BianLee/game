import React from "react"

class Candidates extends React.Component {
    render() {
        return (
            <>
                <div className="grid-container-three imgContainer">
                    <div className="grid-item-three">
                        <img
                        src={require('./candidates/donaldTrump.jpg')}/>
                    </div>
                    
                </div>
            </>
        )
    }
}
export default Candidates
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button'
import "./PopupOverlay.css"

export default function PopupOverlay({tutor, details}) {
    return(
        <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
        <Popover id={`popover-positioned-bottom`}>
            <Popover.Content>
                {details ? (
                    <>
                    <span>Legend:</span><br/><hr/>
                    <strong>Dates with underlines may have availability </strong><br/>
                    <span className="black">date</span>- Open for booking <br/><hr/>
                    <span className="red">date</span>- Booked by another student <br/><hr/>
                    <span className="green">date</span>- Booked by you <br/>
                </>

                ) : (
                    tutor ? (
                        <>
                            <strong>Add slots for students to sign up!</strong><br/>
                            <span>Legend:</span><br/><hr/>
                            <span className="tut1">date</span>- No Slots <br/><hr/>
                            <span className="tut2">date</span>- Slots open and vacant <br/><hr/>
                            <span className="tut3">date**</span>- Slots open and booked <br/>
                        </>
                    ) : (
                        <>
                            <strong>Begin by finding a tutor and signing up!</strong><br/>
                            <span>Legend:</span><br/><hr/>
                            <span className="tut1">date</span>- Not booked <br/><hr/>
                            <span className="tut3">date**</span>- Booked with tutor <br/>
                        </>
                    )

                )}
                {/* {tutor ? (
                    <>
                        <strong>Add slots for students to sign up!</strong><br/>
                        <span>Legend:</span><br/><hr/>
                        <span className="tut1">date</span>- No Slots <br/><hr/>
                        <span className="tut2">date</span>- Slots open and vacant <br/><hr/>
                        <span className="tut3">date**</span>- Slots open and booked <br/>
                    </>
                ) : (
                    <>
                        <strong>Begin by finding a tutor and signing up!</strong><br/>
                        <span>Legend:</span><br/><hr/>
                        <span className="tut1">date</span>- Not booked <br/><hr/>
                        <span className="tut3">date**</span>- Booked with tutor <br/>
                    </>
                )} */}
            

            </Popover.Content>
        </Popover>
        }
    >
        <Button variant="secondary" className="pop-button">?</Button>
    </OverlayTrigger>
    )
}
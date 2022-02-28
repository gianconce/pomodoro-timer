import React from "react";
import SuperSubtitle from "./SuperSubtitle";
import TheProgressBar from "./TheProgressBar";

function TheTitle({
  session,
  minutesToDuration,
  focusDuration,
  secondsToDuration,
  breakDuration,
}) {
  if (session) {
    return (
     
      <span>
        <div className="row mb-2">
          <div className="col">
            
            <h2 data-testid="session-title">
              {session.label} for{" "}
              {minutesToDuration(
                session.label === "Focusing" ? focusDuration : breakDuration
              )}{" "}
              minutes
            </h2>
           
            <SuperSubtitle session={session} secondsToDuration={secondsToDuration} />
          </div>
        </div>
    
        <TheProgressBar
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
        />
      </span>
      
    );
  } else {
    return null;
  }
}

export default TheTitle;
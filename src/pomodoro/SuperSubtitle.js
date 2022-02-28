import React from "react";

function SuperSubtitle({ session, secondsToDuration }) {

return (
  
  <p className="lead" data-testid="session-sub-title">
   {secondsToDuration(session.timeRemaining)} remaining
   </p>
  
);
}

export default SuperSubtitle;
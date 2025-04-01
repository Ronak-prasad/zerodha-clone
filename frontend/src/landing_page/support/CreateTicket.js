import React from "react";

function CreateTicket() {
  return (
    <div className="container">
        <div className="row p-5 mt-2 mb-2">
            <p className="fs-4 text-muted">
            To create a ticket, select a relevant topic
            </p>
            <div className="col-4 p-5 mt-2 mb-2">
                <h5>
                    <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
                </h5>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Resident individual</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Minor</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Non Resident Indian (NRI)</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Company, Partnership, HUF and LLP</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Glossary</a><br/>
            </div>
            <div className="col-4 p-5 mt-2 mb-2">
                <h5>
                <i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
                </h5>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Your Profile</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Account modification</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Nomination</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Transfer and conversion of securities</a><br/>
            </div>
            <div className="col-4 p-5 mt-2 mb-2">
                <h5>
                <i class="fa fa-bar-chart" aria-hidden="true"></i> Kite
                </h5>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>IPO</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Trading FAQs</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Margin Trading Facility (MTF) and Margins</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Charts and orders</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Alerts and Nudges</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>General</a><br/>
            </div>
            <div className="col-4 p-5 mt-2 mb-2">
                <h5>
                    <i class="fa fa-credit-card" aria-hidden="true"></i> Funds
                </h5>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Add money</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Withdraw money</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Add bank accounts</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>eMandates</a><br/>
            </div>
            <div className="col-4 p-5 mt-2 mb-2">
                <h5>
                <i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console
                </h5>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Portfolio</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Corporate actions</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Funds statement</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Reports</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Profile</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Segments</a><br/>
            </div>
            <div className="col-4 p-5 mt-2 mb-2">
                <h5>
                <i class="fa fa-circle-o" aria-hidden="true"></i> Coin
                </h5>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Understanding mutual funds and Coin</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Coin app</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Coin web</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>Transactions and reports</a><br/>
                <a href="#" style={{textDecoration:"none",lineHeight:"2"}}>National Pension Scheme (NPS)</a><br/>
            </div>
      </div>
    </div>
  );
}

export default CreateTicket;

import React from "react";
import "../../scss/componentStyles/_adminUserActivityMain.scss"
import "../../scss/base/_base.scss";
import Table from "./_adminUserActivityTable.js"
import Profile from "../images/profile.png"
import "../../scss/abstracts/_variables.scss";

export default () => (
	<>
		<div className="mainContent">
				<div className="artistDetail">
          <div className="artistCoverArt">
          <img src={Profile} alt="Cover ARt" />
          </div>
          <div className="artistInf">
            <h1>Artist Name</h1>
            <h5>email@artist.com</h5>
          </div>
          <button className="suspendButton">Suspend User</button>
        </div>
        <div className="description">
          <Table/>
        </div>   
		</div>
	</>
);
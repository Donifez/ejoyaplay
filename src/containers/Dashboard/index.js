import React, { Component } from 'react';
import { NavLink,Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import { FiArrowRightCircle, FiTarget } from 'react-icons/fi';
import History from "../../components/mainContent/_transactionHistory";
import Upload from "../../components/mainContent/_adminUploadedTrack.js";
import Activity from "../../components/mainContent/_adminUserActivity.js";
import Royalties from "../../components/mainContent/_paidRoyalties";
import Pending from "../../components/mainContent/_pendingTrack";
import Catalogue from "./catalogue/index";
import Dashboard from "./main";
import UserActivity from "./users/index";
import Artist from "../../artiste";
import Application from "../../applicationtable";
import Marketing from "../../marketing";
import Promo from "../../promo";
import Signup from "../../signup";
import AllUser from ".././../allUser";
import Login from "../../login";
import Notify from "../../send/notify";
import Card from "../../Integration/Cards";
import Account from "../../Integration/Account";
import Transaction from "../../Integration/Transaction";
import Transfer from "../../Integration/Transfer";


// import Miniadmin from  "../MiniAdmin/index"; 

import Burger from '../../components/Burger';

class DashBoardIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarShown: false,
		};
	}

	toggleSideBar = () => {
		this.setState(({ sideBarShown }) => ({ sideBarShown: !sideBarShown }));
	};

	render() {
		const {
			match: { url },
		} = this.props;
		const { sideBarShown } = this.state;
		return (
			<Router>
			<main className={(sideBarShown && 'dashboard__mobile') || 'dashboard'}>
				<Burger toggleSideBar={this.toggleSideBar} sideBarShown={sideBarShown} />
				<section className={(sideBarShown && 'dashboard__sidebar sidebar__mobile') || 'dashboard__sidebar'}>
					<div className="ejoya-logo-box" />
					<div className="artist-box">
						<img className="artist-image" src="/inspect/Rectangle 5.png" alt="artist-profile-pic" />
						<p>Artist Name</p>
					</div>
					<NavLink to={`${url}/artist/new-release`}>
						<button className="dashboard__release heading-6 font-weight--6">
							<span className="music__icon" />
							New Release
						</button>
					</NavLink>
					<div className="dashboard__function-list">
						<NavLink
							to="/_pendingTrack"
							className="heading-6-1 font-weight--5"
							activeClassName="font-weight--8"
						>
							<span className="home" />
							pending
						</NavLink>
					
						<NavLink to="/admin_transaction_history" className="heading-6-1 font-weight--5">
							<span className="wallet" />
							Transaction history
						</NavLink>
						<NavLink to="/admin_users_activity" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Users Activity
						</NavLink>
						<NavLink to="/admin_paid_royalties" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Paid Royalties
						</NavLink>

						<NavLink to="/admin_uploaded_tracks" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Uploaded tracks
						</NavLink>
						<NavLink to="/catalogue" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Catalogue
						</NavLink>
						{/* <NavLink to="/dashboard" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Dashboard
						</NavLink> */}
						<NavLink to="/users" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Users
						</NavLink>


						<NavLink to="/artiste" className="heading-6-1 font-weight--5">
							<span className="wallet" />
							Artist
						</NavLink>
						<NavLink to="/allUser" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Alluser
						</NavLink>
						<NavLink to="/signup" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Signup
						</NavLink>
						<NavLink to="/applicationtable" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Application
						</NavLink>
						<NavLink to="/notify" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Notify
						</NavLink>
						<NavLink to="/marketing" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Marketing
						</NavLink>


						
					
						<NavLink to="/promo" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Promo
						</NavLink>
						
						<NavLink to="/login" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Login
						</NavLink>
						<NavLink to="/Cards" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Card Integration
						</NavLink>
						<NavLink to="/Account" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Account Integration
						</NavLink>

						<NavLink to="/Transaction" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Transaction Integration
						</NavLink>
						<NavLink to="/Transfer" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Transfer Integration
						</NavLink>
						
						
						<div
							className="signout-btn heading-6-1 font-weight--5"
							onClick={() => {
								localStorage.removeItem('AUTH_TOKEN');
							}}
						>
							<FiArrowRightCircle className="signout" />
							Sign Out
						</div>
					</div>
				</section>
				<section
					className={
						(sideBarShown && 'dashboard__content  dashboard__content--mobile') || 'dashboard__content'
					}
					onClick={() => {
						if (this.state.sideBarShown) {
							this.setState({ sideBarShown: false });
						}
					}}
				>
					 <div>
				
						<Switch>
					<Route exact path="/"  component={Dashboard}/>
				
					<Route  path="/_pendingTrack"  component={Pending}/>
					<Route  path="/artiste"  component={Artist}/>
					<Route  path="/admin_transaction_history"  component={History}/>
					<Route  path="/admin_users_activity"  component={Activity} />
						<Route  path="/admin_paid_royalties"  component={Royalties} />
						<Route  path="/admin_uploaded_tracks"  component={Upload} />
						<Route   path="/catalogue"  component={Catalogue} />
						<Route   path="/users"  component={UserActivity} />
						<Route   path="/allUser"  component={AllUser} />
						<Route   path="/applicationtable"  component={Application} />
						<Route   path="/promo"  component={Promo} />
						<Route   path="/signup"  component={Signup} />
						<Route   path="/login"  component={Login} />
						<Route   path="/notify"  component={Notify} />
						<Route   path="/marketing"  component={Marketing} />
						<Route   path="/Cards"  component={Card} />
						<Route   path="/Account"  component={Account} />
						<Route   path="/Transaction"  component={Transaction} />
						<Route   path="/Transfer"  component={Transfer} />
					</Switch>
	             
					</div> 
				</section>
			</main>
			</Router> 
		);
	}
}

export default DashBoardIndex;

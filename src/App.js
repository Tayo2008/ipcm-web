import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
// import { ToastContainer, toast } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/partials/NavBar/NavBar";
// import Footer from './components/partials/Footer/Footer'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Member from "./Pages/Member";
import Nysc from "./Pages/Nysc";
import Examination from "./Pages/Examination";
import Certification from "./Pages/Certification";
import Register from "./Pages/Register";
import Project from "./Pages/Project";
import Career from "./Pages/Career";
import Consult from "./Pages/Consult";
import License from "./Pages/License";
import Admin from "./Pages/admin/Admin";
import SignUp from "./Pages/auth/SIgnUp";
import SignIn from "./Pages/auth/SignIn";
import SerialNumber from "./Pages/admin/SerialNumber";
import Students from "./Pages/admin/Students";
import Student from "./Pages/admin/Student";
import NotFound from "./Pages/NotFound";

import ProtectedRoute from "./Pages/auth/ProtectedRoute";
import Loader from "./components/partials/Loader";
import Gallery from "./Pages/Gallery";

const defualtTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#01996D",
		},
		secondary: {
			main: "#fff",
		},
	},
});

function App() {
	const user = useSelector((state) => state.users);
	const isLoggedin = user.isLoggedin;

	AOS.init();

	return (
		<ThemeProvider theme={defualtTheme}>
			{/* <ToastContainer
				position='top-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/> */}
			<Loader />
			<div className="index">
				<Router>
					<NavBar />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/member">
							<Member />
						</Route>
						<Route exact path="/nysc">
							<Nysc />
						</Route>
						<Route exact path="/examination">
							<Examination />
						</Route>
						<Route exact path="/certification">
							<Certification />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/projects">
							<Project />
						</Route>
						<Route exact path="/gallery">
							<Gallery />
						</Route>
						<Route exact path="/career">
							<Career />
						</Route>
						<Route exact path="/consultancy">
							<Consult />
						</Route>
						<Route exact path="/license">
							<License />
						</Route>
						{/* <Route exact path='/admin'>

                        <Admin/>

                    </Route> */}
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/signin">
							<SignIn />
						</Route>

						<ProtectedRoute
							exact
							path="/admin"
							IsLoggedin={isLoggedin}
							Component={Admin}
						/>

						<ProtectedRoute
							exact
							path="/students"
							IsLoggedin={isLoggedin}
							Component={Students}
						/>

						<ProtectedRoute
							exact
							path="/students/:id"
							IsLoggedin={isLoggedin}
							Component={Student}
						/>

						<ProtectedRoute
							exact
							path="/serial-number"
							IsLoggedin={isLoggedin}
							Component={SerialNumber}
						/>

						<Route exact path="*">
							<NotFound />
						</Route>
					</Switch>
					{/* <Footer/> */}
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;

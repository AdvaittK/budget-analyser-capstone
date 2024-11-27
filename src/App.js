// import Sidebar from "./components/Sidebar/Sidebar";
// import Home from "./components/Home/Home";
// import Analytics from "./components/Analytics/Analytics";
// import Delete from "./components/Delete/delete";
// import "./styles/styling.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AppProvider } from "./Context/AppContext";
// function App() {
// 	return (
// 		<Router>
// 			<AppProvider>
// 				<div className="app flex h-screen">
// 					<Sidebar />
// 					<div className="flex-1 flex place-content-center py-3 overflow-hidden">
// 						<div className="content shadow-lg bg-white rounded-2xl p-4">
// 							<Routes>
// 								<Route path="/" exact element={<Home />} />
// 								<Route
// 									path="/analytics"
// 									element={<Analytics />}
// 								/>
// 								<Route path="*" element={<Home />} />
// 								<Route path="/delete" element={<Delete />} />
// 							</Routes>
// 						</div>
// 					</div>
// 				</div>
// 			</AppProvider>
// 		</Router>
// 	);
// }

// export default App;
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Analytics from "./components/Analytics/Analytics";
import Delete from "./components/Delete/delete";
import Splash from "./components/Splash/Splash"; // Import the SplashScreen
import "./styles/styling.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    const handleEnter = () => {
        setShowSplash(false); // Hide splash screen when button is clicked
    };

    if (showSplash) {
        return <Splash onEnter={handleEnter} />;
    }

    return (
        <Router>
            <AppProvider>
                <div className="app flex h-screen">
                    <Sidebar />
                    <div className="flex-1 flex place-content-center py-3 overflow-hidden">
                        <div className="content shadow-lg bg-white rounded-2xl p-4">
                            <Routes>
                                <Route path="/" exact element={<Home />} />
                                <Route path="/analytics" element={<Analytics />} />
                                <Route path="*" element={<Home />} />
                                <Route path="/delete" element={<Delete />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </AppProvider>
        </Router>
    );
}

export default App;

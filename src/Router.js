import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Schedule from "./pages/Schedule";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="schedule" element={<Schedule />} />
			<Route path="patients" element={<Patients />} />
		</Routes>
	</BrowserRouter>
);

export default Router;

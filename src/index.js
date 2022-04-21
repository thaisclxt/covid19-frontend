import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Schedule from "./pages/Schedule";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="schedule" element={<Schedule />} />
			<Route path="patients" element={<Patients />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);

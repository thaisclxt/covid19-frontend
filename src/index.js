import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Patients from "./routes/patients";
import Schedule from "./routes/schedule";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="schedule" element={<Schedule />} />
			<Route path="patients" element={<Patients />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);

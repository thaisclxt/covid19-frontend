import { render } from "react-dom";
import { MantineProvider } from "@mantine/core";

import Router from "./Router";
import myTheme from "./theme";

const rootElement = document.getElementById("root");
render(
	<MantineProvider theme={myTheme}>
		<Router />
	</MantineProvider>,
	rootElement
);

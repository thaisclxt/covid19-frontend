import { render } from "react-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import Router from "./Router";
import myTheme from "./theme";

const rootElement = document.getElementById("root");
render(
	<MantineProvider theme={myTheme}>
		<NotificationsProvider>
			<Router />
		</NotificationsProvider>
	</MantineProvider>,
	rootElement
);

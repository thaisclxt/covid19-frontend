import { render } from "react-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import Router from "./Router";
import myTheme from "./theme/theme";
import myStyles from "./theme/styles";

const rootElement = document.getElementById("root");
render(
	<MantineProvider theme={myTheme} styles={myStyles}>
		<NotificationsProvider>
			<Router />
		</NotificationsProvider>
	</MantineProvider>,
	rootElement
);

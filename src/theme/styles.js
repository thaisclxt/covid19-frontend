const primaryColor = "#52040F";

const styles = {
	Header: { root: { backgroundColor: primaryColor } },
	SimpleGrid: { root: { alignItems: "center" } },
	Button: {
		filled: {
			backgroundColor: primaryColor,
			"&:hover": { backgroundColor: primaryColor },
		},
	},
	SegmentedControl: {
		root: { backgroundColor: primaryColor },
		label: { color: "white" },
	},
};

export default styles;

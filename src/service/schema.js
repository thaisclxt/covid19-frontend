import * as Yup from "yup";

const schema = Yup.object().shape({
	name: Yup.string().required("Campo obrigatório"),
	birthday: Yup.string().required("Campo obrigatório"),
	scheduleDay: Yup.string().required("Campo obrigatório"),
	scheduleHour: Yup.string().required("Campo obrigatório"),
});

export default schema;

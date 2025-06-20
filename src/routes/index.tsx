import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";
//import { EmployeeRoutes } from "./EmployeeRoutes";
import { AuthRoutes } from "./AuthRoutes";
//import { ManagerRoutes } from "./ManagerRoutes";

const isLoading = true;

export function Routes() {
	if (isLoading) {
		return <Loading />;
	}
	return (
		<BrowserRouter>
			<AuthRoutes />
		</BrowserRouter>
	);
}

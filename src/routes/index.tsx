import { BrowserRouter } from "react-router";
//import { EmployeeRoutes } from "./EmployeeRoutes";
//import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
	return (
		<BrowserRouter>
			<ManagerRoutes />
		</BrowserRouter>
	);
}

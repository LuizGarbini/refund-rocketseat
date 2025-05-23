import { Route, Routes } from "react-router";

import { Signin } from "../pages/Signin";

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Signin />} />
		</Routes>
	);
}

import { type ReactNode, createContext, useState } from "react";

type AuthContext = {
	session: null | userAPIResponse;
	save: (data: userAPIResponse) => void;
};

const LOCAL_STORAGE_KEY = "@refund";

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<null | userAPIResponse>(null);

	function save(data: userAPIResponse) {
		localStorage.setItem(
			`${LOCAL_STORAGE_KEY}:user`,
			JSON.stringify(data.user),
		);
		localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

		setSession(data);
	}

	return (
		<AuthContext.Provider value={{ session, save }}>
			{children}
		</AuthContext.Provider>
	);
}

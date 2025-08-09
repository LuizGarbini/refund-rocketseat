import { type ReactNode, createContext, useEffect, useState } from "react";

type AuthContext = {
	isLoading: boolean;
	session: null | userAPIResponse;
	save: (data: userAPIResponse) => void;
};

const LOCAL_STORAGE_KEY = "@refund";

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [session, setSession] = useState<null | userAPIResponse>(null);
	const [isLoading, setIsLoading] = useState(true);

	function save(data: userAPIResponse) {
		localStorage.setItem(
			`${LOCAL_STORAGE_KEY}:user`,
			JSON.stringify(data.user),
		);
		localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

		setSession(data);
	}

	function loadUser() {
		const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
		const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);

		if (token && user) {
			setSession({
				token,
				user: JSON.parse(user),
			});
		}

		setIsLoading(false);
	}

	useEffect(() => {
		loadUser();
	}, []);

	return (
		<AuthContext.Provider value={{ session, save, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}

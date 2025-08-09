type UserAPIRole = "employee" | "manager";

type userAPIResponse = {
	token: string;
	user: {
		id: string;
		email: string;
		role: UserAPIRole;
	};
};

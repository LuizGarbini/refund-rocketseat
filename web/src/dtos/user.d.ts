type UserAPIRole = "employee" | "manager";

type userAPIResponse = {
	token: string;
	user: {
		name: string;
		id: string;
		email: string;
		role: UserAPIRole;
	};
};

type UserAPIRole = "empolyee" | "manager";

type userAPIResponse = {
	token: string;
	user: {
		id: string;
		email: string;
		role: UserAPIRole;
	};
};

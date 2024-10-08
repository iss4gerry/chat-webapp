import { User } from '@prisma/client';

export type RegisterRequest = {
	email: string;
	username: string;
	name: string;
	password: string;
};

export type Response = {
	id: string;
	username: string;
	name: string;
	email: string;
};

export type LoginRequest = {
	email: string;
	password: string;
};

export function toUserResponse(user: User): Response {
	return {
		id: user.id,
		name: user.name,
		username: user.username,
		email: user.email!,
	};
}

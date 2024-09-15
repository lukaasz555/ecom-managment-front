import type { UserPayload } from '~/interfaces/user-payload';

export function getUserPayloadFromToken(token: string): UserPayload {
	const [, payload] = token.split('.');
	const userPayload = JSON.parse(atob(payload));

	if (
		userPayload.id &&
		userPayload.email &&
		userPayload.role &&
		userPayload.privileges
	) {
		return userPayload as UserPayload;
	}
	throw new Error('Invalid token');
}

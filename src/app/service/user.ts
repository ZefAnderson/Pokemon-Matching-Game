export interface User {
    uid: string;
    email: string;
    firstName?: string;
    lastName?: string | null;
    displayName?: string | null;
    photoURL: string | null;
    emailVerified: boolean;
 }
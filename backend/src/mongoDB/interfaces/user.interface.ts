import { Document } from 'mongoose';

export interface User extends Document {
    readonly login: string;
    readonly pass: string;
    readonly email: string;
}
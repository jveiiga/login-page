import { ReactNode } from "react";
import { IUser } from "../user";
import { SubmitHandler } from "react-hook-form";

export interface IContext {
    signIn: SubmitHandler<IUser>
    user?: IUser | null;
    loading: boolean;
}

export interface IProvider {
    children: ReactNode; 
}
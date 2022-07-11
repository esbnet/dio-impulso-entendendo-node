import { Request, Response } from "express";
import { database } from "../database/db";

const data = database;

interface User {
    name: string;
    age: number;
    email: string;
}

interface Users {
    users: User[];
}

export class UsersController {
	criarUsuario(req: Request, res: Response): Response {
		data.push(req.body);
		return res.status(200).json(data);
	}

	ListarUsuario(req: Request, res: Response): Response {
		return res.status(200).json(data);
	}
}

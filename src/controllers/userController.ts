import { Request, Response } from "express";
import { database } from "../database/db";

const data = database;

export class UsersController {
	criarUsuario(req: Request, res: Response): Response {
		const name = req.body.name

		if (name.length > 0) {
			data.push(req.body);
			return res.status(200).json(data);
		}

		return res
			.status(403)
			.json({ message: "Não é possível cadastrar usuário em branco." });
	}

	listarUsuario(req: Request, res: Response): Response {
		return res.status(200).json(data);
	}
}

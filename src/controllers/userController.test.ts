import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";
import { UsersController } from "./userController";

describe("Users Controller", () => {
	const usersController = new UsersController();

	const mockRequest = {} as Request;
	const mockResponse = makeMockResponse();

	it("Deve listar usuários", () => {
		usersController.listarUsuario(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(200); //
		expect(mockResponse.state.json).toHaveLength(3); //
	});
	it("Deve criar um novo usuários", () => {
		mockRequest.body = {
			name: "Novo usuário",
		};

		usersController.criarUsuario(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(201); //
		// expect(mockResponse.state.json).toHaveLength(3); //
	});
	it("Não deve criar um usuário com o nome em branco", () => {
		mockRequest.body = {
			name: "",
		};

		usersController.criarUsuario(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(403);
		expect(mockResponse.state.json).toMatchObject({
			mensagem: "Não é possível criar usuários sem um nome",
		});
	});
});

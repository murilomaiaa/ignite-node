import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryService";

export class CreateCategoryController {
  constructor(private createCategory: CreateCategoryUseCase) { }
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body

    console.log({ createCategory: this.createCategory })
    const category = this.createCategory.execute({ name, description })

    return response.status(201).json(category)
  }
}
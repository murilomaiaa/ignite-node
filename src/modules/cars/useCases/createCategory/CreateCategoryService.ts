import { Category } from "../../model/Category"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

type IRequest = {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ description, name }: IRequest): Category {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) throw new Error("Category already exists")

    return this.categoriesRepository.create({ name, description })
  }
}
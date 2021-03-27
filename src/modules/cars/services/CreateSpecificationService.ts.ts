import { CategoriesRepository } from "../repositories/CategoriesRepository";

type IRequest = {
  name: string
  description: string
}

export class CreateSpecificationService {
  constructor(private specificationsRepository: CategoriesRepository) { }

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.specificationsRepository.findByName(name)

    if (categoryAlreadyExists) throw new Error("Category already exists")

    this.specificationsRepository.create({ name, description })
  }
}
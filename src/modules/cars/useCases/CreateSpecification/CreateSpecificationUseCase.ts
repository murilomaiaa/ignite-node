import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

type IRequest = {
  name: string
  description: string
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ description, name }: IRequest): Specification {
    const categoryAlreadyExists = this.specificationsRepository.findByName(name)

    if (categoryAlreadyExists) throw new Error("Category already exists")

    return this.specificationsRepository.create({ name, description })
  }
}
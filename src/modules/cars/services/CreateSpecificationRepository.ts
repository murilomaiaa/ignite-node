import { Specification } from "../model/Specification";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

type IRequest = {
  name: string
  description: string
}

export class CreateSpecificationService {
  constructor(
    private specificationsRepository: ISpecificationsRepository
  ) { }

  execute({ description, name }: IRequest): Specification {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) throw new Error("Specification already exists")

    return this.specificationsRepository.create({ description, name })
  }
}
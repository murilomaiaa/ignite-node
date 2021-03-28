import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ description, name }: ICreateSpecificationDTO): Specification {
    const specification = new Specification()

    Object.assign(specification, { description, name })

    this.specifications.push(specification)

    return specification
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find(specification => specification.name === name)
  }
}
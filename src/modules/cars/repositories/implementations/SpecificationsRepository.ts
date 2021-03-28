import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  private static instance: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.instance) {
      SpecificationsRepository.instance = new SpecificationsRepository()
    }

    return SpecificationsRepository.instance
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
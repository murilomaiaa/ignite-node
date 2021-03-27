import { Specification } from "../model/Specification";

export type ICreateSpecificationDTO = {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  create(data: ICreateSpecificationDTO): Specification
  findByName(name: string): Specification | undefined
}
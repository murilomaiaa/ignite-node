import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      createdAt: new Date()
    })

    this.categories.push(category)

    return category
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find(category => category.name === name)
  }
}
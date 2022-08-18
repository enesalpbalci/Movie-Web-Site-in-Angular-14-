import { Category } from './category';

export class CategoryRespositery {
  private categories: Category[];
  constructor() {}
  getCategories(): Category[] {
    return this.categories;
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRespositery } from '../models/category-respositery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {
    this.categoryRespositery = new CategoryRespositery();
    this.categories=this.categoryRespositery.getCategories();
  }

  categories: Category[] = [];
  categoryRespositery:CategoryRespositery;

  ngOnInit(): void {}
}

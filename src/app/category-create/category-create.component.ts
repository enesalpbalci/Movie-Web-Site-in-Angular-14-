import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers:[CategoryService]
})
export class CategoryCreateComponent implements OnInit {
  constructor(private categoryService:CategoryService, private router:Router) {}

  ngOnInit(): void {}

  createCategory(name :string) {
    const cagetory = {
      name:name
    };
    this.categoryService.createCategory(cagetory).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/']);
    })
  }
}

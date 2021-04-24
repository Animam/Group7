import { Component, OnInit } from '@angular/core';
import {Category} from "./category.model";
import { CourCategoryService } from './../cour-category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: Category[];
  constructor(private courCategoryService: CourCategoryService) { }

  ngOnInit() {
    this.categories=this.courCategoryService.getCategory();
  }

}

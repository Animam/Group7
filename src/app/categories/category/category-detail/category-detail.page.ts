import { Component, OnInit } from '@angular/core';
import {CourCategoryService} from "../../cour-category.service";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../category.model";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private courCategoryService: CourCategoryService) { }
  category: Category;
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      let id= paramMap.get('categoryId');
      this.category=this.courCategoryService.getOneCategory(id);
    })
  }

}

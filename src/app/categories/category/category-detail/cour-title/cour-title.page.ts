import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourCategoryService} from '../../../cour-category.service';
import {Category} from '../../category.model';
import {Courses} from "../../courses.model";

@Component({
  selector: 'app-cour-title',
  templateUrl: './cour-title.page.html',
  styleUrls: ['./cour-title.page.scss'],
})
export class CourTitlePage implements OnInit {
course: Courses;
  constructor(private route: ActivatedRoute, private courCategoryService: CourCategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
     const id= paramMap.get('categoryId');
     const idcourse= paramMap.get('courseId');
      this.course=this.courCategoryService.getOneCategory(id).courses.find(course=>course.id==idcourse);
    }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourCategoryService} from "../../../../cour-category.service";
import {Chapters} from "../../../chapters.model";

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {
chapter: Chapters;
  constructor(private route: ActivatedRoute, private courCategoryService: CourCategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
        const id= paramMap.get('categoryId');
        const idcourse= paramMap.get('courseId');
        const idchapter= paramMap.get('chapterId');
        this.chapter=this.courCategoryService.getOneCategory(id).courses.find(course=>course.id==idcourse).chapters.find(chapter=>chapter.id==idchapter);
      }
    );
  }

}

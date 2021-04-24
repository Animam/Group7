import {Courses} from "./courses.model";

export class Category{
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public imageUrl?: string,
    public courses?: Courses[]
  ) {
  }

}

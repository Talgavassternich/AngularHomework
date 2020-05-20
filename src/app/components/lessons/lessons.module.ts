import {NgModule} from '@angular/core';
import {LessonsComponent} from './lessons/lessons.component';
import {LessonsDetailsComponent} from './lessons-details/lessons-details.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LessonContentComponent} from './lesson-content/lesson-content.component';
import {RouterModule} from '@angular/router';
import {NoLessonsComponent} from './no-lessons/no-lessons.component';
import {LessonAddComponent} from './lessons-details/lesson-add/lesson-add.component';

@NgModule({
  declarations: [LessonsComponent, LessonsDetailsComponent, LessonContentComponent, NoLessonsComponent, LessonAddComponent],
  imports: [
    CommonModule,
    // FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [LessonsComponent]
})

export class LessonsModule {
}

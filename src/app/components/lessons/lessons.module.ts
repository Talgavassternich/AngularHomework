import {NgModule} from '@angular/core';
import {LessonsComponent} from './lessons/lessons.component';
import {LessonsDetailsComponent} from './lessons-details/lessons-details.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LessonContentComponent} from './lesson-content/lesson-content.component';
import {RouterModule} from '@angular/router';
import {NoLessonsComponent} from './no-lessons/no-lessons.component';
import {LessonAddComponent} from './lessons-details/lesson-add/lesson-add.component';
import {InputResizeDirective} from "./shared/input-resize.directive";
import {MatIconModule} from "@angular/material/icon";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [LessonsComponent, LessonsDetailsComponent, LessonContentComponent, NoLessonsComponent, LessonAddComponent, InputResizeDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [LessonContentComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  exports: [LessonsComponent]
})

export class LessonsModule {
}

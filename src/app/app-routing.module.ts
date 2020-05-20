import { NgModule } from '@angular/core';
import { LessonsComponent } from './components/lessons/lessons/lessons.component';
import { NoLessonsComponent } from './components/lessons/no-lessons/no-lessons.component';
import { LessonContentComponent } from './components/lessons/lesson-content/lesson-content.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: 'lessons', pathMatch: 'full'},
  {path: 'lessons', component: LessonsComponent, children: [
      {path: 'no-lessons', component: NoLessonsComponent},
      {path: ':name', component: LessonContentComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../../models/lesson.model';
import {LessonsService} from '../shared/lessons.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html'
})

export class LessonContentComponent implements OnInit {
  lesson: Lesson;
  constructor(private lessonsService: LessonsService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.lesson = this.lessonsService.getLesson(params['name']);
      }
    );
  }

  onLessonDeleted() {
    this.lessonsService.onDelete();
  }
}


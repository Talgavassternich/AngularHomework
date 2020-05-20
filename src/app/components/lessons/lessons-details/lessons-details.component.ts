import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../models/lesson.model';
import { LessonsService } from '../shared/lessons.service';

@Component({
  selector: 'app-lessons-details',
  templateUrl: './lessons-details.component.html',
  styleUrls: ['./lessons-details.component.scss']
})

export class LessonsDetailsComponent implements OnInit {
  lessons: Lesson[];
  current: number;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.lessons = this.lessonsService.lessons;
    this.current = this.lessonsService.current;
  }

  onClick(index: number) {
    this.lessonsService.onLessonSelect({id: index});
  }
}

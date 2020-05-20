import {Component, OnInit} from '@angular/core';
import {LessonsService} from '../shared/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})

export class LessonsComponent implements OnInit {
  constructor(private lessonsService: LessonsService) {
  }
  ngOnInit(): void {
    this.lessonsService.init();
  }
}

import { AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ViewChild} from '@angular/core';

import {LessonsService} from '../shared/lessons.service';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss']
})

export class LessonContentComponent implements OnInit, AfterViewInit{
  editLessonForm: FormGroup;
  @ViewChild('lessonText', {static: false}) lessonText;
  @ViewChild('lessonTitle', {static: false}) lessonTitle;
  constructor(private lessonsService: LessonsService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.editLessonForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'content': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
    this.route.params.subscribe(
      (params: Params) => {
        const lesson = this.lessonsService.getLesson(params['name']);
        this.editLessonForm.setValue({'name': lesson.name, 'content': lesson.content});
      }
    );
    this.editLessonForm.disable();
  }
  ngAfterViewInit() {
    this.editLessonForm.patchValue({'content': this.editLessonForm.value.content + " "});
  }
  allowEdit() {
    this.editLessonForm.enable();
    this.lessonText.nativeElement.focus();
  }
  onSubmit() {
    if (this.editLessonForm.valid) {
      this.lessonsService.onEdit({name: this.editLessonForm.value.name, content: this.editLessonForm.value.content});
    }
  }
  onClear() {
    const lesson = this.lessonsService.getLesson(this.route.snapshot.params.name);
    this.editLessonForm.setValue({'name': lesson.name, 'content': lesson.content});
    this.lessonTitle.nativeElement.setAttribute('size', this.route.snapshot.params.name.length);
  }
  onDelete() {
    this.lessonsService.onDelete();
  }
}

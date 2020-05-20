import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LessonsService} from '../../shared/lessons.service';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.scss']
})
export class LessonAddComponent implements OnInit {
  addLessonForm: FormGroup;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.addLessonForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'content': new FormControl(null, [Validators.required, Validators.minLength(10)])
    }, {validators: Validators.required});
  }
  onSubmit() {
    console.log(this.addLessonForm.get('name'));
    if (this.addLessonForm.valid) {
      this.lessonsService.onAdd({name: this.addLessonForm.value.name, content: this.addLessonForm.value.content});
      this.addLessonForm.reset();
    }
  }
}

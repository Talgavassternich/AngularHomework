import {Injectable} from '@angular/core';
import {Lesson} from '../../../models/lesson.model';
import {Router} from '@angular/router';
import data from '../../../../assets/data.json';


@Injectable({providedIn: 'root'})
export class LessonsService {
  lessons: Lesson[] = data as Lesson[];
  current =  0;

  constructor(private router: Router) {}

  private redirect() {
    if (this.current !== -1) {
      this.router.navigate(['/lessons', this.lessons[this.current].name]);
    } else {
      this.router.navigate(["/lessons", "no-lessons"]);
    }
  }

  onDelete() {
    this.lessons.splice(this.current, 1);
    if (this.lessons.length === this.current) {
      this.current -= 1;
    }
    this.redirect();
  }

  onAdd(lesson: Lesson) {
    const index = this.lessons.findIndex((currentLesson: Lesson) => {
      return currentLesson.name.toLowerCase() === lesson.name.toLowerCase();
    });
    if (index === -1) {
      this.lessons.push(lesson);
      if (this.current === -1) {
        this.current++;
        this.redirect();
      }
    } else {
      this.lessons[index].content = lesson.content;
    }
  }
  onEdit(lesson: Lesson) {
    if (lesson.name === this.lessons[this.current].name) {
      this.lessons[this.current].content = lesson.content;
    } else {
      this.lessons[this.current] = lesson;
      this.redirect();
    }
  }

  onLessonSelect(event: {id: number}) {
    this.current = event.id;
  }
  getLesson(name: string) {
    return this.lessons.find((lesson: Lesson) => {
      return lesson.name.toLowerCase() === name.toLowerCase();
    });
  }

  init() {
    this.current = 0;
    this.redirect();
  }
}

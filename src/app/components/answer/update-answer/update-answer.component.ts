import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-update-answer',
  templateUrl: './update-answer.component.html',
  styleUrls: ['./update-answer.component.css']
})
export class UpdateAnswerComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
  ) { }

  ngOnInit() {
  }

  answerUpdateForm = this.fb.group({
    answer: '',
  })

  updateAnswer() {
  }

}

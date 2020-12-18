import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {

  
  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
  }

  answerForm = this.fb.group({
    answer: '',
  });

  answerQuestion() {
    const answer = this.answerForm.value;
    this.questionService.answerQuestion(answer).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}

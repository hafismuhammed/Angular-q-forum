import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  questions: Question[];

  get title() {
    return this.questionForm.get('title');
  }

  get question() {
    return this.questionForm.get('question');
  }

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
  ) { }

  ngOnInit() {
  }

  questionForm = this.fb.group({
    title: ['', Validators.required],
    question: ['', Validators.required],
  })

  askQuestion() {
    const question = this.questionForm.value;
    return this.questionService.askQuestion(question).subscribe(
      (res) => {
        console.log(res);
        this.questions.push(res);
        
      },
      err => console.log(err)
    )
  }

}

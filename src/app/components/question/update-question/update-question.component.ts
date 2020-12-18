import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  get title() {
    return this.updateQuestion.get('title');
  }

  get question() {
    return this.updateQuestion.get('question');
  }

  constructor( 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private questionService: QuestionService,
  ) { }

  ngOnInit() {
    this.getQuestion();
  }

  questionDetail: Question;

  updateQuestion = this.fb.group({
    title: ['', Validators.required],
    question: ['', Validators.required],
  })

  editQuestion() {
    const body = this.updateQuestion.value;
    this.questionService.editQuestion(body).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  getQuestion() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.showQuestion(id).subscribe(
      res => {
        this.questionDetail = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

}

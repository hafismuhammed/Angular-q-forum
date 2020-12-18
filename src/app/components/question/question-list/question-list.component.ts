import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  public questions: Question[]
  isLiked = false;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.listQuestion().subscribe(
      res => {
        this.questions = res
        console.log(this.questions)
        //console.log(res)
      },
      err => console.log(err)
    );
  }

}

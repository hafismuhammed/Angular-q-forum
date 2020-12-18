import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';


@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question: Question;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.questionDetails();
  }

  questionDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.showQuestion(id).subscribe(
      res => {
        this.question = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
}

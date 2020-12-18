import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() questionRes: Question;
  @Output() pageNumber = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  generateArray(num: number): number[] {
    return [...Array(num).keys()];
  }

  pageChangeHandler(pageNum: number) {
    this.pageNumber.emit(pageNum)
  }

}

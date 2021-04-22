import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

   pageSize:Number = 5;
   pageNumber:Number = 1;
   pages:Number[] = [];

  @Input() totalRecords:any;
  @Output() pageSizeChanged:EventEmitter<Number> = new EventEmitter();
  @Output() pageNumberChanged:EventEmitter<Number> = new EventEmitter();


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let totalPages:Number = Math.ceil(<any>this.totalRecords / <any>this.pageSize);
    for(let i=1; i<= totalPages; i++){
      this.pages.push(i);
    }
    console.log("totalPages" ,  this.pages);

  }

  ngOnInit(): void {
  }

  pageNumberClick(pageNumber:any, event:any){
    event.preventDefault();
    this.pageNumberChanged.emit(pageNumber);
   // alert(pageNumber);
  }

}

import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnChanges {
  pageSize: number = 5;
  pages: number[] = [];
  pagesBeforeExists:boolean =  false;
  pagesAfterExists:boolean =  false;

  information : string = "";

  @Input() pageNumber: number = 1;
  @Input() totalRecords: any;
  @Output() pageSizeChanged: EventEmitter<number> = new EventEmitter();
  @Output() pageNumberChanged: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setPages();
    this.setInformation();
  }

  ngOnInit(): void {}

  setPages() {
    let totalPages = Math.ceil(this.totalRecords / this.pageSize );
    this.pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if(i < this.pageNumber + 4 && i > this.pageNumber - 4 )
           this.pages.push(i);
    }

    this.pagesBeforeExists = this.pages[0] > 1? true : false;
    this.pagesAfterExists =this.pages[this.pages.length - 1] < totalPages ? true : false;
  }

  setInformation(){
    let start = 0;
    let end = 0;
    end = this.pageSize * this.pageNumber;
    start = end - this.pageSize + 1 ;
    if(end > this.totalRecords)
      end = this.totalRecords;
    if(start > this.totalRecords)
      start = this.totalRecords;
    this.information = `Showin from ${start} to ${end} of ${this.totalRecords} records` +
                      ` (${Math.ceil(this.totalRecords / this.pageSize )} pages)`;
  }

  pageNumberClick(pageNumber: any, event: any) {
    event.preventDefault();
    this.pageNumber = pageNumber;
    this.pageNumberChanged.emit(pageNumber);
    this.setInformation();
  }

  pageSizeClick(event: any) {
    this.pageSize = event.target.value;
    this.pageNumber = 1;
    this.setPages();
    this.setInformation();
    this.pageSizeChanged.emit(event.target.value);

  }

  previousClick(event:any){
    event.preventDefault();
    if (this.pageNumber - 1 < 1) return; // already on first page
    this.pageNumber = this.pageNumber - 1;
    this.pageNumberChanged.emit( this.pageNumber);
    this.setInformation();
  }

  nextClick(event:any){
    event.preventDefault();
    if (this.pageNumber  == this.pages[this.pages.length - 1] ) return;  //already on last page
    this.pageNumber = this.pageNumber + 1;
    this.pageNumberChanged.emit( this.pageNumber);
    this.setInformation();
  }

}

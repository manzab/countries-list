import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input('totalPages') totalPages: number;
  @Input('currentPage') currentPage: number;

  @Output('pageChanged') pageChanged = new EventEmitter<number>();

  @HostBinding('class.pagination')
  get default(): boolean {
    return true;
  }

  pagesArray: ReadonlyArray<number>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalPages'] && this.totalPages) {
      this.pagesArray = Array.from(
        Array.from(Array(this.totalPages).keys()),
        (x) => 1 + x,
      );
    }
  }

  setPage(page: number) {
    this.pageChanged.emit(page);
  }
}

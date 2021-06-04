import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pageinfo } from '../../models/pageinfo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit {
  @Input()
  info: Pageinfo = { page: 0, count: 0, total: 0 };

  @Output()
  repage = new EventEmitter();

  constructor(private router: Router) {}

  get numpages() {
    const n = Math.ceil(this.info.total / this.info.count);
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(i);
    return arr;
  }

  public changePage(page) {
    this.router.navigateByUrl('/users/' + page);
    this.repage.emit(page);
  }
  ngOnInit() {}
}

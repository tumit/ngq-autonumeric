import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fg: FormGroup;
  floatOpts: AutoNumericOptions;
  intOpts: AutoNumericOptions;

  ngOnInit() {
    this.floatOpts = { vMax: Number.MAX_SAFE_INTEGER, vMin: 0, mDec: 2 };
    this.intOpts = { vMax: Number.MAX_SAFE_INTEGER, vMin: 0 };

    this.initForm();
  }

  initForm() {
    this.fg = new FormGroup({
      age: new FormControl(),
      percent: new FormControl(),
      amount: new FormControl(),
      total: new FormControl()
    });
  }

  reset() {
    this.fg.reset({age: '55555'});
  }
}

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
      age: new FormControl({ value: null, disabled: true }),
      percent: new FormControl(),
      amount: new FormControl(),
      total: new FormControl()
    });

    this.fg.get('total').setValue(100000);

    this.fg.valueChanges.pipe(
      debounceTime(1)
    ).subscribe(res => {
      const total = Number(res.percent || 0) + Number(res.amount || 0);
      this.fg.get('total').setValue(total);
    });
  }

  reset() {
    this.fg.reset();
  }
}

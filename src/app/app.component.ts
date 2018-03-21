import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    this.floatOpts = { vMax: 100, vMin: 0, mDec: 2 };
    this.intOpts = { vMax: 100, vMin: 0 };

    this.fg = new FormGroup({
      age: new FormControl(),
      percent: new FormControl(),
      amount: new FormControl()
    });
  }

  onClear() {
    this.fg.reset();
  }

}

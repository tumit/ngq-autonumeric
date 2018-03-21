# NgqAutonumeric
A number input as a Angular component based on AutoNumeric jQuery Plugin http://www.decorplanit.com/plugin/

# Usage
* `npm install ngq-autonumeric --save`
* add JQuery and AutoNumeric scripts to `.angular-cli.json`
```
  ...
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/autonumeric/autoNumeric-min.js"
  ],
  ...
```
* Add NgqAutonumericModule to your app module's
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgqAutonumericModule } from 'ngq-autonumeric';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgqAutonumericModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Reactive Form Example

* `app.component.ts`: create FormGroup
```typescript
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
}

```

* `app.component.html`: add `<ngq-autonumeric>` to template
```html
<div class="panel panel-default">
  <div class="panel-heading">Input form</div>
  <div class="panel-body">
    <form class="form-horizontal" role="form" [formGroup]="fg">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="birthDate" class="col-sm-2 control-label">Birth Date</label>
        <div class="col-sm-4">
          <ngq-autonumeric formControlName="age" [autonumericOptions]="intOpts"></ngq-autonumeric>
          <ngq-autonumeric formControlName="percent" [autonumericOptions]="floatOpts"></ngq-autonumeric>
          <ngq-autonumeric formControlName="amount"></ngq-autonumeric>
        </div>
      </div>
    </form>

  </div>
</div>
<br> FormGroup: {{ fg.value | json }}
<br> Percent in '3.5-5' format: {{ fg.get('percent').value | number:'3.5-5'}}
```

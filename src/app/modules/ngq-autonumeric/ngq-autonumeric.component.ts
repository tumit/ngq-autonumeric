import 'autonumeric';
import 'jquery';

import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NGQ_AUTONUMERIC_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgqAutonumericComponent),
  multi: true
};

@Component({
  selector: 'ngq-autonumeric',
  templateUrl: './ngq-autonumeric.component.html',
  styleUrls: ['./ngq-autonumeric.component.css'],
  providers: [NGQ_AUTONUMERIC_VALUE_ACCESSOR]
})
export class NgqAutonumericComponent
  implements ControlValueAccessor, AfterViewInit, OnInit {
  @Input() id: string;
  @Input() class: string;
  @Input() placeholder: string;
  @Input() isNumber = true;
  @ViewChild('input') input: ElementRef;

  _jQueryElement: JQuery;
  _value: number;
  _isDisabled: boolean;
  _opts: AutoNumericOptions;

  constructor() {}

  @Input('autonumericOptions')
  set autonumericOptions(opts: AutoNumericOptions) {
    this._opts = opts;
  }

  ngOnInit(): void {
    this._opts = this._opts ? this._opts : { mDec: 2 };
    this._jQueryElement = jQuery(this.input.nativeElement);
    this._jQueryElement.autoNumeric('init', this._opts);
  }
  ngAfterViewInit() {
    const value = this._jQueryElement.autoNumeric('get');
    this._jQueryElement.autoNumeric('set', String(value));
    this._jQueryElement.change(() => {
      const getValue = this._jQueryElement.autoNumeric('get');
      this.propagateChange(
        getValue ? (this.isNumber ? Number(getValue) : getValue) : null
      );
    });
  }

  propagateChange = _ => {};

  @HostListener('blur') onTouched = () => {};

  writeValue(obj: any): void {
    this._jQueryElement.val(obj);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this._jQueryElement.prop('disabled', isDisabled);
  }
}

import {
  Component,
  OnInit,
  ViewChild,
  forwardRef,
  AfterViewInit,
  HostListener,
  Input,
  ElementRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import 'jquery';
import 'autonumeric';

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
  implements ControlValueAccessor, AfterViewInit {

  @Input() id: string;
  @Input() class: string;
  @Input() placeholder: string;
  @ViewChild('input') input;

  _jQueryElement: JQuery;
  _value: number;
  _isDisabled: boolean;
  _opts: AutoNumericOptions;

  constructor(
    private el: ElementRef
  ) {
    el.nativeElement.style.textAlign = 'right';
  }

  @Input('autonumericOptions')
  set autonumericOptions(opts: AutoNumericOptions) {
    this._opts = opts;
  }

  ngAfterViewInit() {

    this._opts = (this._opts) ? this._opts : { mDec: 2 };

    this._jQueryElement = jQuery(this.input.nativeElement);
    this._jQueryElement.autoNumeric('init', this._opts);
    this._jQueryElement.autoNumeric('set', String(this._value));
    this._jQueryElement.change(() => {
      const getValue = this._jQueryElement.autoNumeric('get');
      this._value = getValue ? Number(getValue) : null;
      this.propagateChange(this._value);
    });
  }

  propagateChange = _ => { };

  @HostListener('blur') onTouched = () => { };

  writeValue(obj: any): void {
    console.log('obj', obj);
    this._value = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}

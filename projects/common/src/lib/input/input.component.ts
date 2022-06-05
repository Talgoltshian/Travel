import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn, Validators} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {Subject, takeUntil} from "rxjs";
import {setValue} from "@datorama/akita";

@Component({
  selector: 't-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements OnInit , ControlValueAccessor , OnDestroy{

  formControl = new FormControl();

  error = {
    email: 'Please enter feed-list valid email address',
    required: 'Value is required',
    phone: 'Please enter feed-list valid phone number(05X-XXXX-XXX)',
    minLength: 'min length is 4'
  };


  onDestroy$ = new Subject<void>();
  @Input() label!:string;
  @Input() type:string = 'text';
  @Input() hint!:string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() validators: ValidatorFn[] = [];
  @Input() placeholder!:string;
  @Input() name!:string;

  onChange: Function = (value: any) => {
  };
  primary: string = 'green';

  constructor() { }

  ngOnInit(): void {
    this.registerFormChanges()
    this.setValidators()
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  private registerFormChanges() {
    this.formControl.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => this.onChange(value));
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }

  private setValidators() {
    if(this.validators?.length){
      this.formControl.setValidators(this.validators);
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}

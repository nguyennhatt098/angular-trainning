import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Input() childMessage: string;
  @Output() formValue = new EventEmitter();

  constructor(private formBulder: FormBuilder) {

  }
  get UserName(): FormControl {
    return this.form.get('userName') as FormControl;
  }
  get Password(): FormControl {
    return this.form.get('password') as FormControl;
  }
  ngOnInit() {
    this.form = this.formBulder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {

    if (this.form.valid) {
      this.formValue.emit(this.form.value);
    } else {
      console.log(this.form.value);
    }
  }
}

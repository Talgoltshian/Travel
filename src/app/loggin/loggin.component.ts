import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LogginService} from "./loggin.service";

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogginComponent implements OnInit {
  UserNameValidators: ValidatorFn[] = [Validators.required, Validators.minLength(9), Validators.email];
  passwordValidators: ValidatorFn[] = [Validators.required, Validators.minLength(5)];

  login: FormGroup = this.formBuilder.group({
    username: [undefined, this.UserNameValidators],
    password: [undefined, this.passwordValidators]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private httpClient: HttpClient, private loginService: LogginService) {
  }

  ngOnInit(): void {

  }

  onSubmitForm() {
    this.loginService.setLoginUser(this.login.value.username, this.login.value.password);
    if (this.login.valid) this.router.navigateByUrl('homePage');
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../sevices/data.service';
import { Router } from '@angular/router';
export interface user {
  userName: string,
  password: string
}
@Component({
  selector: 'app-check-login',
  templateUrl: './check-login.component.html',
  styleUrls: ['./check-login.component.scss']
})
export class CheckLoginComponent implements OnInit {
  parentMessage: string = 'Message from parent';
  formData: user;
  userName: string;
  password: string;
  message: string;
  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
  }
  checkLoginForm(value) {
    debugger;
    this.userName = value.userName;
    this.password = value.password;
    if (this.userName === 'admin' && this.password === '123') {
      this.message = '';
      this.parentMessage = 'đăng nhập thành công';
      this.service.changeMessage(this.userName);
      this.router.navigate(['index']);
    } else {

      this.message = 'Sai tài khoản hoặc mật khẩu';
    }
  }
}

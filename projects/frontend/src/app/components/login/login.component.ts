
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router, private userService: UserService, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(form:NgForm) {
   
    this.userService.getUsers().subscribe(res => {
      let users: any = res;
      let userExists = false;
      let loggedInUser = null;
      for (let obj of users) {
        if (obj.email == this.email && obj.password == this.password) {
          userExists = true;
          delete obj["password"];
          loggedInUser = obj;
          break;
        }
      }
      if (userExists) {
        form.reset();
        this.toastr.success("Successfully Login")
        this.authService.storeLoginDetails(loggedInUser);
        if (loggedInUser.role == "ADMIN") {
          window.location.href="techdashboard";
          //this.router.navigate(['techdashboard']);

        }
        else {
          window.location.href="userticket";
          //this.router.navigate(['userticket']);
        }

      }
      else {
        this.toastr.error("Invalid Credentials");
      }
    });

  }
}

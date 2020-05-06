import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { SharedDataService } from "../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /** Holds Login Data Values */
  loginObj: any = {userName : null, password:null};

  /** Loading */
  isLoading: boolean = false;

  /** Holds User List */
  userList: any = [];

  constructor(
    private toastr: ToastrService,
    private dataService: SharedDataService
    ) { }

  ngOnInit() {
    this.userList = this.dataService.getUserList();
  }
  onSubmit(){}

  public loginUser(_login){
debugger;
    this.isLoading = true;
    if(!_login.form.valid){
      this.toastr.error("Enter required fields");
    }else{

      if(this.isUserExist()){
        this.toastr.success("logged In Successfully");
        this.dataService.changeDashboardData(this.loginObj);
        this.isLoading = false;
      }else{
        this.toastr.error("User name and password are incorrect");
        this.isLoading = false;
      }
      

    }
  }

  public isUserExist(){

    let userRecord = this.userList.find(x => 
      x.userName == this.loginObj.userName.trim() && 
      x.password == this.loginObj.password
      );
    if(userRecord) return true; else return false;
  }

}

import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  RequiredValidator,
  FormArray,
  Validators,
} from "@angular/forms";


@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"],
})
export class ContactusComponent implements OnInit {
  profileForm: FormGroup;
  submitted:boolean = false;

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit() {
     this.profileForm = this.fb.group({
       firstName: ["", [Validators.required]],
       lastName: [""],
       email: [
         "",
         [
           Validators.required,
           Validators.email,
           Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
         ],
       ],
       aliases: this.fb.array([this.fb.control("")]),
     });
  }
  get f() {
    return this.profileForm.controls;
  }

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  addquery() {
       this.aliases.push(this.fb.control(""));
  }
  onsubmit() {
    this.submitted=true;
    console.log(this.profileForm.value);
  }
}

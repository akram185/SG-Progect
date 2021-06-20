import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {


  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) { }
  clientForm: any;
  // convenience getter for easy access to form fields
  get f() { return this.clientForm.controls; }
  


  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      company: ['', Validators.required],
    });
  }

  // Submit Form
  onSubmit() {

    // stop here if form is invalid
    if (this.clientForm.invalid) {
      return;
    }

    const formData = {
      first_name: this.f.fname.value,
      last_name: this.f.lname.value,
      age: this.f.age.value,
      company: this.f.company.value,
      email: this.f.email.value,
    }

    console.log('form data', this.clientForm.value)

    this.dataService.addClient(formData).subscribe(
      (data: any) => {
        this.onReset();
        window.scrollTo(0, 0);
      }
    );
  }

  // Reset Form
  onReset() {
    this.clientForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesCitiesService } from './countries-cities/countries-cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RxJSAwesome';

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  }) 

  constructor(private countriesCitiesService: CountriesCitiesService) {}

  ngOnInit(): void {
    // write to DB
    this.form.valueChanges.subscribe(console.log)
  }
}

// Check the service for available methods
// 1) render all country options in the template
// 2) render cities options in template // this.form.get('country')?.valueChanges
// 3) only console.log form values when form is valid (use this.form.valid)
// 4) limit the amount of emmitions to the Database
// 5) create a button in the template which fires a subject on click
// 6) use this subject to send the formValues to the "database"

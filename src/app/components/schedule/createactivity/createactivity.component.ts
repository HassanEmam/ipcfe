import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';


@Component({
  selector: 'app-createactivity',
  templateUrl: './createactivity.component.html',
  styleUrls: ['./createactivity.component.css']
})
export class CreateactivityComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  activityData: any ={};
  schedules: any={};
  schedule_id: any= {};
  registerForm: FormGroup;
  submitted = false;

  constructor(public restApi: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() { 
    this.restApi.getSchedules().subscribe((data:  Array<object>) => {
      this.schedules  =  data;
      console.log(this.schedules);
    });

    this.registerForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      od: ['', [Validators.required, Validators.min(0)]],
      schedule_id: ['', [Validators.required]],
      dateFrom: ['', Validators.required],
      dateTo:['', Validators.required]
  }, {validator: this.dateLessThan('dateFrom', 'dateTo')});
  //, {
      //validator: MustMatch('password', 'confirmPassword')}
      
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
}
  get f() { return this.registerForm.controls; }

  updateActivity() {
    
    console.log(this.activityData);
      this.restApi.createActivity(this.activityData).subscribe(data => {
        this.router.navigate(['/activitieslist'])
      })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.updateActivity()
    console.log(this.registerForm)
    console.log(this.registerForm.value)
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

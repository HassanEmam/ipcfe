import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-getactivity',
  templateUrl: './getactivity.component.html',
  styleUrls: ['./getactivity.component.css']
})
export class GetactivityComponent implements OnInit {
  private id : number;
  activityData: any;
  registerForm: FormGroup;
  constructor(private restApi: ApiService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
      
     }

  get f() { return this.registerForm.controls; }
  ngOnInit() {
      // this.id = this.actRoute.snapshot.params['id']; does not work
      this.registerForm = this.formBuilder.group({
        code: ['', Validators.required],
        name: ['', Validators.required],
        od: ['', [Validators.required, Validators.min(0)]],
        schedule_id: ['', [Validators.required]],
        dateFrom: ['', Validators.required],
        dateTo:['', Validators.required]
    });
      this.actRoute.params.subscribe((params) => {
        this.id = params["id"];
        this.getActivity();

   });
      //this.activityData = this.getActivity();
      
  }
  public  getActivity(){
    console.log("function triggered")
    this.restApi.getActivity(this.id).subscribe((data: {}) => {
      this.activityData = data;
      this.activityData.es = new Date(this.activityData.es)
      console.log(data);
      return data;
      
    });
  }
}

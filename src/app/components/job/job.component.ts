import { Component, ViewChild } from '@angular/core';
import {Input} from "@angular/core"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Jobs } from 'src/app/model';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  @Input() listJobs: any;
  @ViewChild(SearchBarComponent) searchValue: any;

  constructor(private router: Router,private toastr: ToastrService) {
  }
  ngDoCheck() {
  }
  navigateToDetail(id: number){
    this.router.navigate(['detail',id])
  }
}

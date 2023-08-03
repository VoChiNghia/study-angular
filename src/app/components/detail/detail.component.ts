import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  detailJob: any;
  jobs: any;
  id: any = this.router.url.split('/')[2];
  loading: boolean = false;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {

      window.scrollTo(0, 0);

      this.id = paramMap.get('id');

      this.httpService.getJobByid(this.id).subscribe((data) => {
        this.detailJob = data;
      });

      this.loadingService.isLoading$.subscribe((data) => {
        this.loading = data;
      })
    });
   
    this.httpService.getAllJob().subscribe((data) => (this.jobs = data));
  }
}

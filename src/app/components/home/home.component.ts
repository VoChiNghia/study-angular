import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { LoadingService } from 'src/app/service/loading.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Jobs } from 'src/app/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: any;
  splitData!: Jobs;
  private limit: number = 10;
  page: number = 1;
  totalPages: any;
  dataSearch: any;
  searchValue: string = '';
  loading: boolean = false;
  selectValue: string = '';
  selectLevelValue: string = '';
  constructor(
    private httpService: HttpService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.httpService.getAllJob().subscribe((data) => {
      this.data = data;
      this.dataSearch = data;
    });

    this.loadingService.isLoading$.subscribe((data) => {
      this.loading = data;
    });
  }

  ngDoCheck(): void {
    this.paginations(this.limit, this.page);
    console.log(this.searchValue);
  }

  paginations(limit: number, page: number): void {
    let startindex = (page - 1) * limit;
    let endindex = limit * page;
    this.dataSearch = this.data?.filter((job: Jobs) =>
      job.title.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    if (this.selectValue) {
      this.dataSearch = this.data?.filter(
        (job: Jobs) => job.address === this.selectValue
      );
    }
    if (this.selectLevelValue) {
      this.dataSearch = this.data?.filter(
        (job: Jobs) => job.jobLevel === this.selectLevelValue
      );
    }
    if (this.dataSearch) {
      this.totalPages = Array(Math.ceil(this.dataSearch?.length / limit)).fill(
        1
      );
    }
    

    this.splitData = this.dataSearch?.slice(startindex, endindex);
  }
  setPage(newPage: number): void {
    this.page = newPage;
  }

  reviceValue($event: any): void {
    this.searchValue = $event;
    this.page = 1;
  }

  reciveSelectValue(event: string): void {
    this.selectValue = event;
    console.log(event);
  }
  reciveSelectValueLevel(event: string): void {
    this.selectLevelValue = event;
    console.log(event);
  }
}

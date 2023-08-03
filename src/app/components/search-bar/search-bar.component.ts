import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchValue: string = '';
  @Output() value = new EventEmitter();
  constructor(){}

  sendValue(value: any){
    this.value.emit(value);
  }

  clearValue(){
    this.searchValue = ''
    this.sendValue(this.searchValue)
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
	templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Nearby Project';
	showDropdown : boolean = false;
	showLang : boolean = false;

	toggleLang():void {
		this.showLang = !this.showLang;
	}
	toggleDropdown():void {
		this.showDropdown = !this.showDropdown;
	}
}

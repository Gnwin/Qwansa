import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

	// @ViewChild('el') span:ElementRef

	shownCategories : boolean = true;
	showCategories : boolean = false;
	toggleCategories():void {
		this.showCategories = !this.showCategories;
		this.shownCategories = !this.shownCategories;
	}

	shownCategories1 : boolean = true;
	showCategories1 : boolean = false;
	toggleCategories1():void {
		this.showCategories1 = !this.showCategories1;
		this.shownCategories1 = !this.shownCategories1;
	}

	shownCategories2 : boolean = true;
	showCategories2 : boolean = false;
	toggleCategories2():void {
		this.showCategories2 = !this.showCategories2;
		this.shownCategories2 = !this.shownCategories2;
	}

	shownCategories3 : boolean = true;
	showCategories3 : boolean = false;
	toggleCategories3():void {
		this.showCategories3 = !this.showCategories3;
		this.shownCategories3 = !this.shownCategories3;
	}
	
	shownCategories4 : boolean = true;
	showCategories4 : boolean = false;
	toggleCategories4():void {
		this.showCategories4 = !this.showCategories4;
		this.shownCategories4 = !this.shownCategories4;
	}

	shownCategories5 : boolean = true;
	showCategories5 : boolean = false;
	toggleCategories5():void {
		this.showCategories5 = !this.showCategories5;
		this.shownCategories5 = !this.shownCategories5;
	}

	shownCategories6 : boolean = true;
	showCategories6 : boolean = false;
	toggleCategories6():void {
		this.showCategories6 = !this.showCategories6;
		this.shownCategories6 = !this.shownCategories6;
	}

	shownCategories7 : boolean = true;
	showCategories7 : boolean = false;
	toggleCategories7():void {
		this.showCategories7 = !this.showCategories7;
		this.shownCategories7 = !this.shownCategories7;
	}


  constructor() { }

  ngOnInit(): void {
  }

}

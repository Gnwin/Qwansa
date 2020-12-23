import { Component } from '@angular/core';

@Component({
	selector: 'home-nearby',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class homeComponent {
	aboutUs = document.querySelector('about-us-info.col-md-6.p-3.order-first')
	switchViews($event):void {
		if (window.matchMedia("(max-width: 767px)").matches) {
			this.aboutUs.setAttribute('class', 'about-us-info.col-md-6.p-3');
		} else {
			this.aboutUs.setAttribute('class', 'about-us-info.col-md-6.p-3.order-first');
		}
	}
}

// setAttribute('href', 'index.html');b
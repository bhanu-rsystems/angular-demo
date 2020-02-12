import { Component, OnInit } from '@angular/core';
import { policies } from '../../policies';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
	policies = policies;
  

	ngOnInit(): void {
	}

}

import { Component } from '@angular/core';
import { LeftSideComponent } from "./left-side/left-side.component";
import { RightSideComponent } from "./right-side/right-side.component";

@Component({
  selector: 'app-landing-page',
  imports: [LeftSideComponent, RightSideComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

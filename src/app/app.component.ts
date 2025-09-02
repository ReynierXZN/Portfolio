import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';




@Component({
  standalone:true, 
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-calulo';
  }
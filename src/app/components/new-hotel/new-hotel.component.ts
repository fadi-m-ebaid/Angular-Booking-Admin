import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from 'src/app/models/ihotel';
import { HotelapiService } from 'src/app/services/hotelapi.service';


@Component({
  selector: 'app-new-hotel',
  templateUrl: './new-hotel.component.html',
  styleUrls: ['./new-hotel.component.css']
})
export class NewHotelComponent {
  newHotel: IHotel = {} as IHotel;

  constructor(private hotelserv: HotelapiService, private activatedRoute: ActivatedRoute,    private router: Router) { }

  // ngOnInit(): void {
       
  // }
  AddHotel() {
  
    this.hotelserv.postHotel(this.newHotel).subscribe(data=> {this.newHotel=data
         
          this.router.navigate(['/tables-data'])
      
      });
  }

}

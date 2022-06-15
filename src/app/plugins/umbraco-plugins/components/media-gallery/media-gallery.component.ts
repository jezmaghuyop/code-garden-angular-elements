import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

declare var notificationsService: any;

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.css']
})
export class MediaGalleryComponent implements OnInit, OnChanges {

  @Input() notificationsService!: any;
  @Input() images: Array<string> = [];
  // @Output() showNotif: EventEmitter<void> = new EventEmitter<void>();

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  };

  constructor() { }

  ngOnInit(): void {
    // if (notificationsService !== undefined) {
    //   console.log(notificationsService);
    // }

  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges['notificationsService']);
    if (simpleChanges['notificationsService'] && simpleChanges['notificationsService'].currentValue) {
      this.notificationsService = simpleChanges['notificationsService'].currentValue; //.parse(simpleChanges['notificationsService'].currentValue);   
    }   
  }

  show() {
    console.log('wow');
    console.log(notificationsService);
    notificationsService.success("Sample Notificaiton.", "Yay! It Worked!");
  }

  // showx() {
  //   this.showNotif.emit()
  // }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

}

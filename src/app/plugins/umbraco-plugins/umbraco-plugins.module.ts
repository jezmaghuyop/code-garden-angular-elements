import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MediaGalleryComponent } from './components';


@NgModule({
  declarations: [    
    MediaGalleryComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  // exports: [TablePluginComponent]
})
export class UmbracoPluginsModule { }

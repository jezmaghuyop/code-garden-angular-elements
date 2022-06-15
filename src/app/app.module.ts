import { DoBootstrap, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { UmbracoPluginsModule } from './plugins/umbraco-plugins/umbraco-plugins.module';
import { FeaturesModule } from './features/features.module';

import { MainMenuComponent, SideMenuComponent } from './shared';
import { CustomTableComponent } from './features/components';
import { MediaGalleryComponent } from './plugins/umbraco-plugins/components';


@NgModule({
  declarations: [
    SideMenuComponent, MainMenuComponent
  ],
  imports: [
    BrowserModule,
    UmbracoPluginsModule,
    FeaturesModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const mainMenuComponent = createCustomElement(MainMenuComponent, { injector: this.injector });
    customElements.define('main-menu', mainMenuComponent);

    const sideMenuComponent = createCustomElement(SideMenuComponent, { injector: this.injector });
    customElements.define('side-menu', sideMenuComponent);

    const customTableComponent = createCustomElement(CustomTableComponent, { injector: this.injector });
    customElements.define('custom-table', customTableComponent);

    const mediaGalleryComponent = createCustomElement(MediaGalleryComponent, { injector: this.injector });
    customElements.define('media-gallery', mediaGalleryComponent);
  }

}

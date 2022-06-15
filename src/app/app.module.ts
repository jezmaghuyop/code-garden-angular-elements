import { DoBootstrap, NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { UmbracoPluginsModule } from './plugins/umbraco-plugins/umbraco-plugins.module';
//import { FeaturesModule } from './features/features.module';

import { MainMenuComponent, SideMenuComponent } from './shared';
//import { CustomTableComponent } from './features/components';
import { MediaGalleryComponent } from './plugins/umbraco-plugins/components';
import { NgxElementModule } from '@apaq/ngx-element';

const lazyConfig = {
  definitions: [
    {
      selector: 'lazy-table',
      loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
    }
  ],
  prefix: 'code-garden'
};

@NgModule({  
  declarations: [
    SideMenuComponent, MainMenuComponent
  ],
  imports: [
    BrowserModule,
    UmbracoPluginsModule,
    NgxElementModule.forRoot(lazyConfig),
 //   FeaturesModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const mainMenuComponent = createCustomElement(MainMenuComponent, { injector: this.injector });
    customElements.define('main-menu', mainMenuComponent);

    const sideMenuComponent = createCustomElement(SideMenuComponent, { injector: this.injector });
    customElements.define('side-menu', sideMenuComponent);

    // const customTableComponent = createCustomElement(CustomTableComponent, { injector: this.injector });
    // customElements.define('custom-table', customTableComponent);

    const mediaGalleryComponent = createCustomElement(MediaGalleryComponent, { injector: this.injector });
    customElements.define('media-gallery', mediaGalleryComponent);
  }

}

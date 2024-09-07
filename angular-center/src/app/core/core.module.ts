import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importing components
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { SliderComponent } from './theme/slider/slider.component';
import { BlogComponent } from './theme/blog/blog.component';
import { AboutComponent } from './theme/about/about.component';
import { ContactUsComponent } from './theme/contact-us/contact-us.component';
import { BlogDetailComponent } from './theme/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SliderComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,  // For common Angular directives and pipes
    RouterModule,
    TitleCasePipe  // For using routing functionality within this module
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    LayoutComponent  // Exporting components to be used elsewhere in the app
  ]
})
export class CoreModule {
  // Use forRoot() for singleton services or configurations that should be available globally
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []  // Add global services here, if needed
    };
  }
}

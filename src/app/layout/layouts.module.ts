import { NgModule } from '@angular/core';

// IMPORT MODULES
import { ContentModule } from './components/content/content.module';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';

@NgModule({
    imports: [
      ContentModule,
      FooterModule,
      NavbarModule,
      ToolbarModule
    ],
    exports: [

    ]
})
export class LayoutModule
{
}

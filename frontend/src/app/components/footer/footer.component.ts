import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    TuiLinkModule
  ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }

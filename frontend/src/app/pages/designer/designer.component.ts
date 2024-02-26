import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { TuiButtonModule, TuiHostedDropdownModule, TuiSvgModule } from '@taiga-ui/core';
import { DesignerService } from './designer.service';
import { TuiIslandModule, TuiTilesModule } from '@taiga-ui/kit';
import { IngredientTileComponent } from '../../components/ingredient-tile/ingredient-tile.component';
import { IngredientCatalogComponent } from '../../components/ingredient-catalog/ingredient-catalog.component';

@Component({
    selector: 'app-designer',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        TuiButtonModule,
        TuiTilesModule,
        IngredientTileComponent,
        TuiHostedDropdownModule,
        IngredientCatalogComponent,
        TuiSvgModule,
    ],
    providers: [
        DesignerService,
    ],
    templateUrl: './designer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent {

    readonly designerService = inject(DesignerService);

    order = new Map();
    selectorOpen = false;

    exit() {

    }

    save() {

    }

    validate() {

    }

}

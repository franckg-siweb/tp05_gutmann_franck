import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { MoneyComponent } from '../money/money.component';

@Component({
    selector: 'app-ingredient-preview',
    standalone: true,
    imports: [
        CommonModule,
        MoneyComponent
    ],
    templateUrl: './ingredient-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientPreviewComponent {

    @Input() ingredient!: Ingredient;

}

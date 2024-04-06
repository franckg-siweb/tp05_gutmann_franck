import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { Select } from '@ngxs/store';
import { CartState } from '../../store/cart/cart.state';
import { Observable } from 'rxjs';
import { productsPluralMapping } from '../../config/plurals';
import { Product } from '../../models/product';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { CartProductPreviewComponent } from '../../components/cart-product-preview/cart-product-preview.component';
import { RouterModule } from '@angular/router';
import { MoneyComponent } from '../../components/money/money.component';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [
        CommonModule,
        TuiButtonModule,
        CartProductPreviewComponent,
        RouterModule,
        TuiSvgModule,
        MoneyComponent
    ],
    templateUrl: './cart.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

    @Select(CartState.list) cart$!: Observable<{ product: Product; count: number }[]>;

    @Select(CartState.total) total$!: Observable<number>;
    @Select(CartState.count) count$!: Observable<number>;

    pluralMapping = productsPluralMapping;

}

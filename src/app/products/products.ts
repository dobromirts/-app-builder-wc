import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcCheckboxComponent, IgcComboComponent, IgcDialogComponent, IgcDropdownComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';
import ECommerceService from '../service/ECommerce-service';
import InventoryAppService from '../service/InventoryApp-service';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcSelectComponent, IgcComboComponent, IgcInputComponent, IgcDropdownComponent, IgcCardComponent, IgcIconButtonComponent, IgcDialogComponent, IgcCheckboxComponent);

@customElement('app-products')
export default class Products extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: hsla(var(--ig-gray-100));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
    }
    .group_2 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .products {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .card {
      height: max-content;
      min-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      min-width: 50px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .checkbox-group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
    }
    .group_8 {
      justify-content: flex-end;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .h6 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .image {
      height: 100%;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .image_1 {
      object-fit: cover;
      width: 90px;
      height: 90px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .media-content {
      height: 250px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-primary-500));
    }
    .textarea {
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .user-input {
      height: max-content;
      min-width: 240px;
      max-width: 290px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
    }
    .button_1 {
      margin: 0 0 8px 8px;
      height: max-content;
      min-width: min-content;
    }
    .user-input_1 {
      height: max-content;
      min-width: min-content;
    }
    .select {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .combo {
      height: max-content;
      min-width: 120px;
      max-width: 240px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .input {
      height: max-content;
      min-width: min-content;
      max-width: 120px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .checkbox {
      margin: 0 12px 0 0;
      width: max-content;
      height: max-content;
    }
    .button_2::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_3::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_4::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .dropdown::part(base) {
      height: max-content;
    }
  `;

  constructor() {
    super();
    this.inventoryAppService.getProducts().then((data) => {
      this.inventoryAppProducts = data;
    }, err => console.log(err));
    this.eCommerceService.getSales().then((data) => {
      this.eCommerceSales = data;
    }, err => console.log(err));
  }

  private inventoryAppService: InventoryAppService = new InventoryAppService();

  private eCommerceService: ECommerceService = new ECommerceService();

  @property()
  private eCommerceSales?: any[];

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  @property()
  private inventoryAppProducts?: any[];

  @query('#add-new-product')
  public addNewProduct?: IgcDialogComponent;

  @query('#edit-product-details')
  public editProductDetails?: IgcDialogComponent;

  @property()
  private value?: any = 'Basic Tee';

  @property()
  private value1?: any = '15.99';

  @property()
  private value2?: any = '99';

  @property()
  private value3?: any = 'M050';

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <h6 class="h6">
            Products
          </h6>
          <div class="row-layout group_2">
            <igc-button @click=${() => this.addNewProduct?.toggle()} class="button button_2">
              <span class="material-icons">
                add
              </span>
              <span>Add New Product</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="outlined" class="button">
              <span class="material-icons">
                import_export
              </span>
              <span>Import Product</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div class="row-layout group_1">
          <div class="row-layout group_3">
            <igc-select ?outlined="${false}" label="Department" placeholder="Pick a Department" class="user-input">
              <igc-select-item value="Option">
                Women
              </igc-select-item>
              <igc-select-item value="Option">
                Men
              </igc-select-item>
              <igc-select-item value="Option">
                Children
              </igc-select-item>
            </igc-select>
            <igc-combo .data="${this.eCommerceSales}" label="Category" placeholder="Choose categories" value-key="Item" display-key="Item" ?outlined="${false}" ?disable-filtering="${ true}" class="user-input"></igc-combo>
            <igc-input label="Search" ?outlined="${false}" class="user-input">
              <span slot="prefix">
                <span class="material-icons icon">
                  search
                </span>
              </span>
            </igc-input>
          </div>
          <igc-button variant="flat" @click=${() => this.dropdown?.toggle(this.button)} id="button" class="button">
            <span>Sort By</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="dropdown" class="dropdown">
            <igc-dropdown-item>
              Alphabetically
            </igc-dropdown-item>
            <igc-dropdown-item>
              Recently Added
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
        <div class="row-layout products">
          ${this.inventoryAppProducts?.map((item: any) => html`
            <igc-card class="card">
              <igc-card-media class="media-content">
                <img src="${item.ImageURL}" class="image" />
              </igc-card-media>
              <igc-card-header>
                <h3 slot="title">
                  ${item.Product}
                </h3>
                <h5 slot="subtitle">
                  ${item.Department}
                </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <p class="typography__body-2 text">
                  Here you can add some description of the product in more details
                </p>
              </igc-card-content>
              <igc-card-actions class="actions-content">
                <igc-button variant="outlined" @click=${() => this.editProductDetails?.toggle()} class="button_1">
                  Edit
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-icon-button variant="flat" class="icon-button">
                  <span class="material-icons">
                    remove_red_eye
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
                <igc-icon-button variant="flat" class="icon-button">
                  <span class="material-icons">
                    delete
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
              </igc-card-actions>
            </igc-card>
          `)}
        </div>
      </div>
      <igc-dialog ?close-on-outside-click="${true}" ?close-on-escape="${true}" id="add-new-product">
        <h5 slot="title">
          Add New Product
        </h5>
        <div class="column-layout group_4">
          <div class="column-layout group_5">
            <igc-input label="Product title" placeholder="e.g Blue jeans" ?outlined="${false}" class="user-input_1"></igc-input>
            <div class="row-layout group_5">
              <igc-select ?outlined="${false}" label="Department" placeholder="Pick a Department" class="select">
                <igc-select-item value="1">
                  Women's Clothing
                </igc-select-item>
                <igc-select-item value="2">
                  Men's Clothing
                </igc-select-item>
                <igc-select-item value="3">
                  Children's Clothing
                </igc-select-item>
              </igc-select>
              <igc-combo .data="${this.eCommerceSales}" label="Category" placeholder="Choose categories" value-key="Item" display-key="Item" ?outlined="${false}" ?disable-filtering="${ true}" class="combo"></igc-combo>
            </div>
            <span class="textarea">Textarea not yet available in WebComponents</span>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Images
            </p>
            <igc-button variant="outlined" class="user-input_1">
              <span class="material-icons">
                photo_camera
              </span>
              <span>Upload pictures</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <div class="row-layout group_7">
            <igc-input type="number" label="Unit price" ?outlined="${false}" class="input"></igc-input>
            <igc-input type="number" label="Units in stock" ?outlined="${false}" class="input"></igc-input>
            <igc-input type="number" label="Product #" ?outlined="${false}" class="input"></igc-input>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Select available sizes:
            </p>
            <div class="row-layout checkbox-group">
              <igc-checkbox labelPosition="after" class="checkbox">
                XS
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                S
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                M
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                L
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                XL
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                XXL
              </igc-checkbox>
            </div>
          </div>
          <div class="row-layout group_8">
            <igc-button @click=${() => this.addNewProduct?.toggle()} class="button button_3">
              ADD PRODUCT
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" @click=${() => this.addNewProduct?.toggle()} class="button">
              CANCEL
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div slot="footer"></div>
      </igc-dialog>
      <igc-dialog ?close-on-outside-click="${true}" ?close-on-escape="${true}" id="edit-product-details">
        <h5 slot="title">
          Edit Product Details
        </h5>
        <div class="column-layout group_4">
          <div class="column-layout group_5">
            <igc-input .value="${this.value}" label="Product title" placeholder="e.g Blue jeans" ?outlined="${false}" class="user-input_1"></igc-input>
            <div class="row-layout group_5">
              <igc-select ?outlined="${false}" label="Department" placeholder="Pick a Department" value="2" class="select">
                <igc-select-item value="1">
                  Women's Clothing
                </igc-select-item>
                <igc-select-item value="2" ?selected="${true}">
                  Men's Clothing
                </igc-select-item>
                <igc-select-item value="3">
                  Children's Clothing
                </igc-select-item>
              </igc-select>
              <igc-combo .data="${this.eCommerceSales}" label="Category" placeholder="Choose categories" value-key="Item" display-key="Item" ?outlined="${false}" ?disable-filtering="${ true}" class="combo"></igc-combo>
            </div>
            <span class="textarea">Textarea not yet available in WebComponents</span>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Images
            </p>
            <div class="row-layout group_5">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80" class="image_1" />
              <img src="https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80" class="image_1" />
              <img src="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80" class="image_1" />
            </div>
            <igc-button variant="outlined" class="user-input_1">
              <span class="material-icons">
                photo_camera
              </span>
              <span>Upload pictures</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <div class="column-layout group_6">
            <p class="typography__subtitle-2 text">
              Select available sizes:
            </p>
            <div class="row-layout checkbox-group">
              <igc-checkbox labelPosition="after" ?checked="${true}" ?indeterminate="${false}" class="checkbox">
                XS
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${true}" ?indeterminate="${false}" class="checkbox">
                S
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${true}" ?indeterminate="${false}" class="checkbox">
                M
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${true}" ?indeterminate="${false}" class="checkbox">
                L
              </igc-checkbox>
              <igc-checkbox labelPosition="after" ?checked="${true}" ?indeterminate="${false}" class="checkbox">
                XL
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="checkbox">
                XXL
              </igc-checkbox>
            </div>
          </div>
          <div class="row-layout group_7">
            <igc-input type="number" .value="${this.value1}" label="Unit price" ?outlined="${false}" class="input"></igc-input>
            <igc-input type="number" .value="${this.value2}" label="Units in stock" ?outlined="${false}" class="input"></igc-input>
            <igc-input .value="${this.value3}" label="Product #" ?outlined="${false}" class="input"></igc-input>
          </div>
          <div class="row-layout group_8">
            <igc-button @click=${() => this.editProductDetails?.toggle()} class="button button_4">
              UPDATE
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" @click=${() => this.editProductDetails?.toggle()} class="button">
              CANCEL
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div slot="footer"></div>
      </igc-dialog>
    `;
  }
}

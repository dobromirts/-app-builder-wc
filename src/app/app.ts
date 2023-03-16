import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcIconComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: hsla(var(--ig-surface-500));
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 1px 0px 0px;
      border-style: solid;
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 16px;
      width: 260px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 48px;
      width: 240px;
      min-width: 50px;
      min-height: 50px;
    }
    .list {
      width: 240px;
      height: max-content;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .image {
      object-fit: cover;
      min-width: 0;
      min-height: 0;
      max-width: 140px;
      flex-shrink: 0;
    }
    .avatar_1::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: transparent;
    }
    .avatar_2::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: transparent;
    }
    .avatar_3::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: transparent;
    }
    .avatar_4::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: transparent;
    }
    .avatar_5::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: transparent;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-list class="list">
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar13.png" size="medium" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Jane Doe</div>
            <div slot="subtitle">Sales Manager</div>
            <div slot="end">
              <span class="material-icons icon">
                keyboard_arrow_down
              </span>
            </div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/home')}">
            <div slot="start">
              <igc-avatar src="/src/assets/Store_Icon_Small.svg" class="avatar avatar_1"></igc-avatar>
            </div>
            <div slot="title">Dashboard</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/products')}">
            <div slot="start">
              <igc-avatar src="/src/assets/Inventory_Icon_Small.svg" class="avatar avatar_2"></igc-avatar>
            </div>
            <div slot="title">Products</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/orders')}">
            <div slot="start">
              <igc-avatar src="/src/assets/Orders_Icon_Small.svg" class="avatar avatar_3"></igc-avatar>
            </div>
            <div slot="title">Orders</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/customers')}">
            <div slot="start">
              <igc-avatar src="/src/assets/Customers_Icon_Small.svg" class="avatar avatar_4"></igc-avatar>
            </div>
            <div slot="title">Customers</div>
          </igc-list-item>
          <igc-list-item @click="${() => Router.go('/reports')}">
            <div slot="start">
              <igc-avatar src="/src/assets/Reports_Icon_Small.svg" class="avatar avatar_5"></igc-avatar>
            </div>
            <div slot="title">Reports</div>
          </igc-list-item>
        </igc-list>
        <div class="column-layout group_1">
          <img src="/src/assets/invmgmt_logo.svg" class="image" />
        </div>
      </div>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}

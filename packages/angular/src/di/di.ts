
import { InjectionToken } from '@angular/core';

import { App } from '../providers/app';
import { NavController } from '../providers/nav-controller';

export const NavControllerToken = new InjectionToken<any>('NavControllerToken');
export const ViewControllerToken = new InjectionToken<any>('ViewControllerToken');
export const AppToken = new InjectionToken<any>('AppToken');

export function getProviders(element: HTMLIonNavElement) {
  return [
    {
      provide: NavControllerToken, useValue: element
    },

    {
      provide: NavController, useFactory: provideNavControllerInjectable, deps: [NavControllerToken]
    },

    {
      provide: AppToken, useValue: null,
    },
    {
      provide: App, useFactory: provideAppInjectable, deps: [AppToken]
    }
  ]
}

export function provideNavControllerInjectable(element: HTMLIonNavElement) {
  return new NavController(element);
}

export function provideAppInjectable() {
  const element = document.querySelector('ion-app');
  return new App(element);
}
'use strict';

import template from './app.html!text';

import angular from 'angular';
import 'angular-animate';
import 'angular-material';
import 'angular-messages';
import 'angular-route';
import 'angular-sanitize';
import "angular-material-icons";

import 'material-design-icons/iconfont/material-icons.css!css';

import toolkitModule from 'ramkat99/xib-angular-toolkit';
import navLockModule from 'ramkat99/xib-nav-lock';

import {View, Component, Inject, Config} from 'ramkat99/xib-angular-toolkit'; // jshint unused: false

import componentsModule from './components/components';
import coreModule from './core/core';

let appModule = angular.module('app-module', [
  'ngRoute',
  'ngSanitize',
  'ngMessages',
  'ngMaterial',
  'ngMdIcons',
  toolkitModule.name,
  navLockModule.name,

  componentsModule.name,
  coreModule.name
]);

class IconConfig {
  @Config()
  @Inject('$mdIconProvider', '$mdThemingProvider')
  static configFactory($mdIconProvider, $mdThemingProvider){
    $mdIconProvider
      .defaultIconSet('images/icons/mdi.svg');

    $mdThemingProvider.theme('default')
      .primaryPalette('grey');


      //.accentPalette('orange');

  }
}

@Component({
  selector: 'app'
})
@View({
  template: template,
  replace: true
})
@Inject('NavLockService', '$state', '$mdSidenav')
class App {
  constructor(NavLockService, $state, $mdSidenav) {
    this.myName = 'Manie Coetzee';
    this.sn = $mdSidenav;
    NavLockService.sayHello();

    this.navPinned = false;
  }

  openLeftMenu() {
    this.sn('left').open();
    this.navPinned = false;
    this.open = true;
    //this.open = !this.open;
  };

  closeLeftMenu(){
    if (!this.navPinned) {
      this.sn('left').close();
      this.navPinned = false;
    }
  }

  onMouseEnter(){
    this.sn('left').open();
    this.navOpen = true;
  }

  onMouseLeave(){
    if (!this.navPinned){
      this.sn('left').close();
      this.navOpen = false;
    }
  }

  openLeftNav(){
    this.sn('left').toggle();
  }

  closeLeftNav(){
    this.navPinned = false;
    this.sn('left').toggle();
  }

  togglePin(){
    this.navPinned = !this.navPinned;
  }


  toggleNav(){
    if (this.navOpen){
      this.sn('left').close();
      this.navOpen = false;
    } else {
      this.sn('left').open();
      this.navOpen = true;
    }
  }
}

angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {
    strictDi: true
  });
});

export default appModule;
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'PostListPage';
  tab3Root = 'CheckinPage';
  tab4Root = 'ContactPage';

  constructor() {

  }
}

import { Component } from '@angular/core';
import { Node } from './tree-grid/node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggleNode = {};
  level = 0;
  config = {
    enableSelection: false
  };
  selections = [];
  public data: Array<any> = [];

  constructor() {
    this.displayTree(this.data, 0);

    var addTo = function () {
      var inner = 4;
      return 9 + inner;
    }


    // const dataArr = [{
    //   label: 't1',
    //   children: [{
    //     label: 't1.1',
    //     children: [{
    //       label: 't1.1.1'
    //     }, {
    //       label: 't1.1.2'
    //     }]
    //   }, {
    //     label: 't1.2'
    //   }]
    // }, {
    //   label: 't2',
    //   children: [{
    //     label: 't2.1'
    //   }]
    // }];
    this.data = [{
      label: 't1',
      children: [{
        label: 't1.1',
        children: [{
          label: 't1.1.1'
        }, {
          label: 't1.1.2'
        }]
      }, {
        label: 't1.2'
      }]
    }, {
      label: 't2',
      children: [{
        label: 't2.1'
      }]
    }];

    console.dir(this);
  }

  addSpacing(level: number) {
    let spaces = '-';
    for (let i = 0; i < level; i++) {
      spaces += spaces;
    }
    spaces = '|' + spaces;
    return spaces;
  }
  displayTree(data: Array<any>, level: number) {
    data.forEach((element) => {

      let spaces = this.addSpacing(level);
      console.log(spaces + element.label);

      if (element.children && element.children.length > 0) {
        level++;
        this.displayTree(element.children, level);
      }
    });
  }

  deleted(event) {
    console.log(event);
  }
}

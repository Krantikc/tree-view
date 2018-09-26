import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Config } from './config';
import { Subject } from 'rxjs/Subject';
import { Node } from './node';

@Component({
  selector: 'tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit {

  @Input() data: Array<any>;

  @Input() expandNode?: any;
  @Input() config?: any;

  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() nodeDeleted: Subject<any> = new Subject<any>();

  @Output() selectedNodesChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  get nodes(): Array<Node> {
    return this.selectedNodes;
  }

  set nodes(nodes: Array<Node>) {
    this.selectedNodes = nodes;
  }

  selectedNodes: Array<Node> = new Array<Node>();


  dataCopy: Array<Node> = [];
  treeConfig: Config;

  constructor() {
    this.selectedNodesChange.subscribe((e: any) => {
      console.log(e);
    });
  }

  toggleNode(node: Node, event: any) {
    node.isOpen = !node.isOpen;
  }

  selectNode(nodeSelected: Node, event: any) {
    nodeSelected.isSelected = !nodeSelected.isSelected;

    const index = this.selectedNodes.findIndex((node: any): boolean => {
      return (node.id === nodeSelected.id);
    });
    if (index > -1) {
      this.selectedNodes.splice(index, 1);
    } else {
      this.selectedNodes.push(nodeSelected);
    }
    
    //this.dataChange.emit(this.dataCopy);
    this.selectedNodesChange.emit(true);
  }
  deleteNode(node: Node, valProp?: string, event?: any) {
    console.log(event);
    const index = this.data.findIndex((a): boolean => {
      return a.id === node.id;
    });
    this.data = this.data.splice(index, 1);
    //this.nodeDeleted.next({node: node, event: event});
  }

  addData(node: Node): Node {
    if (node.children && node.children.length > 0) {
      let children = [];
      node.children.forEach((child: any) => {
        let childNode: Node = this.addData(child);
        children.push(childNode);
      });
      if (children.length > 0) {
        let newNode = new Node(node);
        newNode.children = children;
        return newNode;
      }
    } else {
      let newNode = new Node(node);
      return newNode;
    }
    return;
  }
  ngOnInit() {
    

    // this.data.forEach((dataObj: any) => {
    //   let nodeObj = new Node(dataObj);
    //   this.dataCopy.push(nodeObj);
    // });

    // let rootNode: Node = new Node();
    // rootNode = this.addData(rootNode, this.dataCopy);
    //this.dataCopy = rootNode.children;
    this.data.forEach((node: any) => {
      let newNode = this.addData(node);
      if (newNode) {
        this.dataCopy.push(newNode);
      }
    });

    this.data = this.dataCopy;

    console.log(this.dataCopy);
    //this.dataCopy = this.addData(this.data, null);
    //this.dataCopy = this.data;
    this.treeConfig = new Config(this.config);
  }

}

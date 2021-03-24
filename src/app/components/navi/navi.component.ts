import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {  
              label:'Add',
              icon:'pi pi-plus-circle',
             
              items:[
                  {
                      label:'New',
                      icon:'pi pi-fw pi-plus',
                      
                      items:[
                      {
                          label:'Car',
                          icon:'pi pi-fw pi-plus',
                          routerLink:"car/add"
                      },
                      {
                          label:'Color',
                          icon:'pi pi-fw pi-plus',
                          routerLink:"color/add"
                      },
                      {
                        label:'Brand',
                        icon:'pi pi-fw pi-plus',
                        routerLink:"brand/add"
                    },


                      ]
                  }, {
                      separator: true
                  },
                  {
                      label: 'Update',
                      icon: 'pi pi-fw pi-undo',
                      items: [
                        {
                          label:'Car',
                          icon:'pi pi-fw pi-plus',
                          routerLink:"car/update"
                      },
                      {
                          label:'Color',
                          icon:'pi pi-fw pi-plus',
                          routerLink:"color/update"
                      },
                      {
                        label:'Brand',
                        icon:'pi pi-fw pi-plus',
                        routerLink:"brand/update"
                    },
                      ]
                  },
                  {
                      separator:true
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-trash'
                  }
              ]
          },
          
          {
              label:'Users',
              
              icon:'pi pi-android',
              items:[
                  {
                      label:'New',
                      icon:'pi pi-fw pi-user-plus',
                      routerLink:"/"

                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-user-minus',

                  },
                  {
                      label:'Search',
                      icon:'pi pi-fw pi-users',
                      items:[
                      {
                          label:'Filter',
                          icon:'pi pi-fw pi-filter',
                          items:[
                              {
                                  label:'Print',
                                  icon:'pi pi-fw pi-print'
                              }
                          ]
                      },
                      {
                          icon:'pi pi-fw pi-bars',
                          label:'List'
                      }
                      ]
                  }
              ]
          }
          
          
      ];
  }

}

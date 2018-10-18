import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { contacts } from '../../example-data';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //Initial data
  contact: Contact = {
    "name": "Sunitha",
    "phone": "(123) 456-7890",
    "email": "sck@gmail.com"
  };
  contactlist = contacts;
  dataSource = new MatTableDataSource<Contact>(contacts);
  displayedColumns = ['name', 'phone', 'email', 'actions'];

  //Adds new Contact
  addContact(newName: string, newPhone: string, newEmail: string) {
    if (newName === '' || newPhone === '' || newEmail === '') { //Input validation
      alert('Please enter all values - Name, Phone, Email');
    } else {
      const newContact = {
        "name": newName,
        "phone": newPhone,
        "email": newEmail
      };
      const data = this.dataSource.data;
      data.push(newContact);
      this.dataSource.data = data;
    }
  }

  //Deletes the selected contact
  delete(elm) {
    this.dataSource.data = this.dataSource.data
      .filter(i => i !== elm);

  }
  constructor() { }


  ngOnInit() {

  }

}

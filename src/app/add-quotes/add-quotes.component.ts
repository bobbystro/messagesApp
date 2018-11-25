import { Component, OnInit } from '@angular/core';
import {AddQuotesModel} from './add-quotes.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.scss']
})
export class AddQuotesComponent implements OnInit {
  addQuote: AddQuotesModel;
  successMessage = false;

  constructor() { }

  addQuoteForm: FormGroup;

  ngOnInit() {
    this.addQuote = new AddQuotesModel();
    this.addQuoteForm = new FormGroup({
      'authorName': new FormControl(this.addQuote.authorName, [Validators.required, Validators.minLength(3)]),
      'quoteText': new FormControl(this.addQuote.quoteText, Validators.required),
    });
  }

  get authorNameForm() {
    return this.addQuoteForm.get('authorName');
  }

  get quoteTextForm() {
    return this.addQuoteForm.get('quoteText');
  }

  showSuccess() {
    this.successMessage = true;
  }

}

export class AddQuotesModel {
  public authorName: string;
  public quoteSource: string;
  public quoteText: string;

  constructor(authorName = '', quoteSource = '', qouteText = '') {
    this.authorName = authorName;
    this.quoteSource = quoteSource;
    this.quoteText = qouteText;
  }
}

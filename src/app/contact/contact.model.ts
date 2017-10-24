export class Contact {
  public fname: string;
  public lname: number;
  public email: string;
  public message: string;

  constructor(fname: string, lname: number, email: string, message: string) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.message = message;
  }
}

class Appointment{
  nome : string;
  cognome : string;
  indirizzo : string;
  telefono : number;
  email : string;
  data : number;
  ora : number;
  constructor(nome, cognome, indirizzo, telefono, email, data, ora){
    this.nome = nome;
    this.cognome = cognome;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
    this.email = email;
    this.data = data;
    this.ora = ora;
  }
}

import { v4 as uuidv4 } from 'uuid';
export class User {
  private _id;
  private _nom;
  private _prenom;
  private _nombre_enfants;

  constructor(nom: String, prenom: String, nb: Number) {
    this._nom = nom;
    this._prenom = prenom;
    this._nombre_enfants = nb;
  }

  get nom() {
    return this._nom;
  }

  set nom(value) {
    this._nom = value;
  }

  get prenom() {
    return this._prenom;
  }

  get id() {
    return this._id;
  }

  set id(num: Number) {
    this._id = num;
  }

  set prenom(value) {
    this._prenom = value;
  }

  get nombre_enfants() {
    return this._nombre_enfants;
  }

  set nombre_enfants(value) {
    this._nombre_enfants = value;
  }
}

/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * * @author Guillermo López Concepción
 * @since Mar 03 2026
 * @desc Bank account evaluation
 * This module provides a simple bank account class with basic operations.
 * @module BankAccount
 */

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

/**
 * Class representing a bank account with thread-safe (atomic) operations.
 */
export class BankAccount {
  private _balance: number | null = null;
  private _isOpen: boolean = false;

  /**
   * Initializes a new BankAccount instance.
   * The account starts in a closed state.
   */
  constructor() {
    this._isOpen = false;
    this._balance = null;
  }

  /**
   * Opens the bank account and initializes the balance to zero.
   * @throws {ValueError} If the account is already open.
   */
  public open(): void {
    if (this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = true;
    this._balance = 0;
  }

  /**
   * Closes the bank account. Further operations will fail.
   * @throws {ValueError} If the account is already closed.
   */
  public close(): void {
    if (!this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = false;
    this._balance = null;
  }

  /**
   * Deposits a positive amount into the account.
   * @param {number} amount - The amount to deposit.
   * @throws {ValueError} If account is closed or amount is negative.
   */
  public deposit(amount: number): void {
    if (!this._isOpen || this._balance === null || amount < 0) {
      throw new ValueError();
    }
    this._balance += amount;
  }

  /**
   * Withdraws a positive amount from the account.
   * @param {number} amount - The amount to withdraw.
   * @throws {ValueError} If account is closed, amount is negative, 
   * or exceeds balance.
   */
  public withdraw(amount: number): void {
    if (!this._isOpen || this._balance === null || amount < 0 || amount > this._balance) {
      throw new ValueError();
    }
    this._balance -= amount;
  }

  /**
   * Returns the current balance of the account.
   * @returns {number} The current balance.
   * @throws {ValueError} If the account is closed.
   */
  get balance(): number {
    if (!this._isOpen || this._balance === null) {
      throw new ValueError();
    }
    return this._balance;
  }
}
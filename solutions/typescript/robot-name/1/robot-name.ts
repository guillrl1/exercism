/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Robot Name Manager
 * This module manages unique, random names for robots in the format 
 * of two uppercase letters followed by three digits.
 * @module RobotName
 */

export class Robot {
  private static usedNames: Set<string> = new Set<string>();
  private robotName: string;

  constructor() {
    this.robotName = this.generateUniqueName();
  }

  /**
   * Returns the current name of the robot.
   * @returns {string} The unique robot name.
   */
  public get name(): string {
    return this.robotName;
  }

  /**
   * Resets the robot's name to a new, unique, random name.
   */
  public resetName(): void {
    this.robotName = this.generateUniqueName();
  }

  /**
   * Clears all names from the global unique names registry.
   */
  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  /**
   * Generates a random name that has not been used before.
   * @returns {string} A unique name in AA000 format.
   */
  private generateUniqueName(): string {
    let newName: string;
    do {
      newName = this.createRandomName();
    } while (Robot.usedNames.has(newName));

    Robot.usedNames.add(newName);
    return newName;
  }

  /**
   * Creates a random string following the format [A-Z][A-Z][0-9][0-9][0-9].
   * @returns {string} A formatted random name.
   */
  private createRandomName(): string {
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const firstLetter: string = letters[Math.floor(Math.random() * 26)];
    const secondLetter: string = letters[Math.floor(Math.random() * 26)];
    const digits: string = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

    return `${firstLetter}${secondLetter}${digits}`;
  }
}
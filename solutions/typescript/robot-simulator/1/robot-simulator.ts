/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Robot Simulator
 * This module manages robot movements on a grid, including placement,
 * turning, and advancing based on a string of instructions.
 * @module RobotSimulator
 */

export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || 'Invalid Input';
  }
}

type Direction = 'north' | 'east' | 'south' | 'west';
type Coordinates = [number, number];

/**
 * Class representing a Robot on a 2D infinite grid.
 */
export class Robot {
  private _direction: Direction = 'north';
  private _x: number = 0;
  private _y: number = 0;
  private readonly DIRECTIONS: Direction[] = ['north', 'east', 'south', 'west'];

  /**
   * Returns the current direction the robot is facing.
   * @returns {Direction} The current bearing.
   */
  get bearing(): Direction {
    return this._direction;
  }

  /**
   * Returns the current [x, y] coordinates of the robot.
   * @returns {Coordinates} Current position.
   */
  get coordinates(): Coordinates {
    return [this._x, this._y];
  }

  /**
   * Places the robot at a specific location and direction.
   * @param {Object} placement - The placement configuration.
   * @param {number} placement.x - X coordinate.
   * @param {number} placement.y - Y coordinate.
   * @param {string} placement.direction - Direction string.
   * @throws {InvalidInputError} If the direction is invalid.
   */
  place({ x, y, direction }: { x: number; y: number; direction: string }): void {
    if (!this.DIRECTIONS.includes(direction as Direction)) {
      throw new InvalidInputError('Invalid orientation passed');
    }
    this._x = x;
    this._y = y;
    this._direction = direction as Direction;
  }

  /**
   * Parses a string of instructions (R, L, A) and executes them.
   * @param {string} instructions - String containing 'R', 'L', or 'A'.
   * @throws {InvalidInputError} If an instruction is unrecognized.
   */
  evaluate(instructions: string): void {
    const commands = instructions.split('');
    for (const command of commands) {
      switch (command) {
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'A':
          this.advance();
          break;
        default:
          throw new InvalidInputError('Invalid instruction');
      }
    }
  }

  /**
   * Rotates the robot 90 degrees to the right.
   */
  private turnRight(): void {
    const currentIndex = this.DIRECTIONS.indexOf(this._direction);
    this._direction = this.DIRECTIONS[(currentIndex + 1) % 4];
  }

  /**
   * Rotates the robot 90 degrees to the left.
   */
  private turnLeft(): void {
    const currentIndex = this.DIRECTIONS.indexOf(this._direction);
    this._direction = this.DIRECTIONS[(currentIndex + 3) % 4];
  }

  /**
   * Moves the robot one unit forward in its current direction.
   */
  private advance(): void {
    switch (this._direction) {
      case 'north':
        this._y++;
        break;
      case 'east':
        this._x++;
        break;
      case 'south':
        this._y--;
        break;
      case 'west':
        this._x--;
        break;
    }
  }
}
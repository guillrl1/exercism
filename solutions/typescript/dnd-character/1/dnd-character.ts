/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc Dungeons & Dragons Character Generator
 * This module simulates the creation of a D&D character by rolling dice
 * for abilities and calculating hitpoints based on constitution.
 * @module DnDCharacter
 */

export class DnDCharacter {
  public readonly strength: number;
  public readonly dexterity: number;
  public readonly constitution: number;
  public readonly intelligence: number;
  public readonly wisdom: number;
  public readonly charisma: number;
  public readonly hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  /**
   * Generates an ability score by rolling four 6-sided dice and 
   * summing the three highest values.
   * @returns {number} The calculated ability score.
   */
  public static generateAbilityScore(): number {
    const diceRolls: number[] = [];
    for (let i = 0; i < 4; i++) {
      diceRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    
    // Sort rolls to easily identify and discard the lowest value
    diceRolls.sort((a, b) => a - b);
    const highestThreeRolls: number[] = diceRolls.slice(1);
    
    return highestThreeRolls.reduce((total, current) => total + current, 0);
  }

  /**
   * Calculates the modifier for a given ability score.
   * Formula: floor((abilityScore - 10) / 2)
   * @param {number} abilityValue - The score of the ability.
   * @returns {number} The calculated modifier.
   */
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
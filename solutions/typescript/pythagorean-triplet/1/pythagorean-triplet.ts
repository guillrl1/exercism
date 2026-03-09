/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Mar 9 2026
 * @desc Pythagorean Triplets Solver
 * Finding all sets {a, b, c} such that a² + b² = c² and a + b + c = N.
 */

'use strict';

type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

/**
 * Class representing a Pythagorean Triplet.
 */
class Triplet {
  private readonly a: number;
  private readonly b: number;
  private readonly c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  /**
   * Returns the triplet as an array [a, b, c].
   * @returns {number[]}
   */
  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }
}

/**
 * Finds all Pythagorean triplets that sum up to a specific number N.
 * @param {Options} options - Constraints for the search (minFactor, maxFactor, sum).
 * @returns {Triplet[]} - Array of valid Triplet objects.
 */
export function triplets({ minFactor = 1, maxFactor, sum }: Options): Triplet[] {
  const result: Triplet[] = [];
  const limit = maxFactor || sum;

  // Optimizamos: a < b < c, por lo tanto a < sum / 3
  for (let a = minFactor; a <= sum / 3; a++) {
    /**
     * De las ecuaciones:
     * 1) a² + b² = c²
     * 2) a + b + c = sum  =>  c = sum - a - b
     * Sustituyendo c en 1:
     * a² + b² = (sum - a - b)²
     * Despejando b:
     * b = (sum² - 2*sum*a) / (2*sum - 2*a)
     */
    const numerator = (sum * sum) - (2 * sum * a);
    const denominator = 2 * (sum - a);
    const b = numerator / denominator;

    // b debe ser un entero, mayor que a y menor o igual que el límite
    if (Number.isInteger(b) && b > a) {
      const c = sum - a - b;
      
      if (limit && (b <= limit && c <= limit)) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}

/**
 * Main function for local verification.
 */
function main(): void {
  const N = 1000;
  const found = triplets({ sum: N });
  
  found.forEach(t => {
    console.log(`Triplet found for sum ${N}: [${t.toArray().join(', ')}]`);
  });
}

if (require.main === module) {
  main();
}
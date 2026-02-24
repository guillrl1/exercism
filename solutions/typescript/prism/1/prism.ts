/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc High-Precision Laser Path Predictor
 * Uses vector mathematics to predict laser strikes across arbitrary angles.
 * @module PrismLaserPrecision
 */

/**
 * Predicts the sequence of crystal IDs hit by the laser beam.
 * @param {any} start - Start point {x, y, angle}.
 * @param {any[]} prisms - Array of prisms {id, x, y, angle}.
 * @returns {number[]} Sequence of IDs.
 */
export function findSequence(
  start: { x: number; y: number; angle: number },
  prisms: { id: number; x: number; y: number; angle: number }[]
): number[] {
  const sequence: number[] = [];
  let { x, y, angle } = start;
  const MAX_STEPS = 200;
  const EPSILON = 0.00001;

  while (sequence.length < MAX_STEPS) {
    const rad = (angle * Math.PI) / 180;
    const dirX = Math.cos(rad);
    const dirY = Math.sin(rad);

    let nearest = null;
    let minDistance = Infinity;

    for (const p of prisms) {
      const dx = p.x - x;
      const dy = p.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < EPSILON) continue;

      // Verificamos si el cristal está en la línea de visión del vector actual
      // El producto escalar de la dirección y el vector al objeto debe ser ~1
      const dotProduct = (dx / distance) * dirX + (dy / distance) * dirY;

      if (Math.abs(dotProduct - 1) < EPSILON) {
        if (distance < minDistance) {
          minDistance = distance;
          nearest = p;
        }
      }
    }

    if (!nearest) break;

    sequence.push(nearest.id);
    x = nearest.x;
    y = nearest.y;
    angle = (angle + nearest.angle);
  }

  return sequence;
}
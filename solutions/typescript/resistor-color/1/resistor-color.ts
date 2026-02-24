export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

export type Color = typeof COLORS[number];

/**
 * Devuelve el índice numérico de un color dado.
 * @param color Debe ser uno de los colores definidos en el array COLORS.
 */
export const colorCode = (color: Color): number => {
  return COLORS.indexOf(color);
};
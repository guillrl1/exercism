// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let value = 0;
  switch (name) {
    case 'Pure Strawberry Joy':
      value = 0.5;
      break;
    case 'Energizer':
      value = 1.5;
      break;
    case 'Green Garden':
      value = 1.5;
      break;
    case 'Tropical Island':
      value = 3;
      break;
    case 'All or Nothing':
      value = 5;
      break;
    default :
      value = 2.5;
      break;
  }
  return value;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalLimes = 0;
  let i = 0;
  while (totalLimes < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case 'small' :
        totalLimes += 6;
        break;
      case 'medium' :
        totalLimes += 8;
        break;
      case 'large' :
        totalLimes += 10;
        break;
    }
    ++i;
  }
  
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // El "Hint" sugiere usar la función que ya tienes de ejercicios anteriores
  // Si no la tienes definida en este archivo, asegúrate de que esté accesible
  
  do {
    // 1. Obtenemos el tiempo del primer jugo usando tu función previa
    const juice = orders[0]; 
    const timeTaken = timeToMixJuice(juice);

    // 2. Reducimos el tiempo que le queda a Li Mei
    timeLeft -= timeTaken;

    // 3. Removemos el jugo de la lista (porque ya lo empezó/terminó)
    orders.shift();

    // 4. Continuamos mientras quede tiempo Y haya jugos en la lista
  } while (timeLeft > 0 && orders.length > 0);

  // 5. Devolvemos lo que quedó en el array original (ya modificado por shift)
  return orders;
}


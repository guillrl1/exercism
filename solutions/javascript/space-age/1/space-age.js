//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  let actualSeconds = 0;
  let orbital = 0;
  
  switch (planet) {
    case 'mercury' : orbital = 0.2408467; break;
    case 'venus' : orbital = 0.61519726; break;
    case 'earth' : orbital = 1.0; break;
    case 'mars' : orbital = 1.8808158; break;
    case 'jupiter' : orbital = 11.862615; break;
    case 'saturn' : orbital = 29.447498; break;
    case 'uranus' : orbital = 84.016846; break;
    case 'neptune' : orbital = 164.79132; break; 
    default : throw new Error('not a planet')
  }
  return Number((secondsToYears(seconds) / orbital).toFixed(2));
};

export const secondsToYears = (sec) => sec / 60 / 60 / 24 / 365.25;

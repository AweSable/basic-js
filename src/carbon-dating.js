import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;
  sampleActivity=+sampleActivity;
  if (isNaN(sampleActivity)) return false;
  if (sampleActivity<=0) return false;
  if (sampleActivity>=MODERN_ACTIVITY) return false;
  const ln2=0.693;
  let k=ln2/HALF_LIFE_PERIOD;
  let age=Math.log(MODERN_ACTIVITY/sampleActivity)/k;
  age=Math.ceil(age);
  return age;
}
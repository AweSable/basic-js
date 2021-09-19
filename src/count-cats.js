import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let qty_of_cats=0;
  if (typeof matrix == "object" && typeof matrix[0] == "object"){
    let rows=matrix.length;
    let columns=matrix[0].length;
    for (let i=0; i<rows; i++){
      for (let j=0; j<columns; j++){
        if (matrix[i][j]=='^^'){
          qty_of_cats++;
        }
      }
    }
  }
  return(qty_of_cats);
}

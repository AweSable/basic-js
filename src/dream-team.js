import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members))return false;
  let teamname="";
  let qty_of_members=members.length;
  for (let i=0; i<qty_of_members; i++){
	if (typeof members[i] === "string"){
	  members[i]=members[i].trim().toUpperCase();
	}
  }
  members.sort();
  for (let i=0; i<qty_of_members; i++){
	if (typeof members[i] === "string"){
	  teamname=teamname + members[i][0];
	}
  }
  return (teamname!="")?teamname:false;
}

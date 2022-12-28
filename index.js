function valMinMax(arr) {
  let sum = 0
  let add = 0
  let a = 0
  let b = 0
  arr.sort(function(a, b) { return a - b; });
  for (let i = 0; i < arr.length - 1; i++) { sum += arr[i] }
  for (let j = 1; j < arr.length; j++) { add += arr[j] }
  a = Math.max(add, sum)
  b = Math.min(add, sum)
  return (`${b} ${a}`)
}

function matriceCaree(A) {

  let sum1 = 0;
  let sum2 = 0
  let totalSum = 0

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (i === j) { sum1 += A[i][j] }
      //   if(j === A.length-i-1 || i == A.length-j+2){
      //     sum2+=A[i][j]}}

      if (i + 1 === A.length - (j + 1) + 1) { sum2 += A[i][j] }
    }
  }

  return Math.abs(sum1 - sum2)
}

function camelCase(str) {
  let a = str.split(/(?=[A-Z])/)
  let t = a.join()
  return (t.length && a.length)
}
function arcadeRank(top_scores, jeu) {

  let tour = 0

  const TAB = []
   let ordre = top_scores.sort()
  let unique = ordre.filter((x, i) => ordre.indexOf(x) === i);
  for (let i = 0; i < jeu.length; i++) {
    tour = 1
    for (let j = 0; j < unique.length; j++) {
      if (jeu[i] < unique[j]) {
        tour++
      }

    }
    TAB.push(tour)
    // let s=TAB.sort()
    // return s
  }
  return TAB
}
module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };
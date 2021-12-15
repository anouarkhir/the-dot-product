const dotProduct = (v1, v2) => {
  const result = v1
    .map((num, index) => v1[index] * v2[index])
    .reduce((totale, curr) => totale + curr);

  if (result === 0) {
    return "The vectors are orthogonal";
  } else {
    return "The vectors are not orthogonal";
  }
};

console.log(dotProduct([4, 1], [-2, 8]));

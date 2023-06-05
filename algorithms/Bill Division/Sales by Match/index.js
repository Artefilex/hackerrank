function sockMerchant(n, ar) {
  const colors = {};
  for (let i = 0; i < n; i++) {
    const color = ar[i];
    if (colors[color]) {
      colors[color] += 1;
    } else {
      colors[color] = 1;
    }
  }
  let result = 0;

  for (let color in colors) {
    const count = colors[color];
    result += Math.floor(count / 2);
  }
  return result;
}

function isStrictlyPalindromic(n: number): boolean {
  for (let i = 2; i <= n - 2; i += 1) {
    const numConvertString: string = n.toString(i);
    const numConvertStringLength: number = numConvertString.length;
    const centerNumber: number = Math.ceil(numConvertString.length / 2);

    for (let l = 0; l < centerNumber; l += 1) {
      if (numConvertString[l] !== numConvertString[numConvertStringLength - l])
        return false;
    }
  }
  return true;
}

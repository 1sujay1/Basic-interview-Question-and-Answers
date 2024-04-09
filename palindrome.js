function isPalindrome(val) {
  return val === +val.toString().split("").reverse("").join("");
}

console.log(isPalindrome(121));
isPalindrome("121");
isPalindrome("10");

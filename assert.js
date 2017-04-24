var assert = {
  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      throw new Error("Expected " + firstAssertion + " to equal " + secondAssertion + ".");
    } else {
      console.log("Imagine you have a green light and be happy.")  
    }
  }
};

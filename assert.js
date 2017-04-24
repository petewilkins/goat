var assert = {
  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      throw new Error("Expected " + firstAssertion + " to equal " + secondAssertion + "."); 
    }
  }
};

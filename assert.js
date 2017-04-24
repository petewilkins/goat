var assert = {

  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      throw new Error("Expected " + firstAssertion + " to equal " + secondAssertion + ".");
    }
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    }
  },

};

document.body.textContent = "hello world";

function testFunc() {
  console.log("test");
}

testFunc.testAttribute = "testAtt";
console.log(testFunc.prototype);

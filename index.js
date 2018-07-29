// Write your solution in this file!
driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
copy=Object.assign({}, driver)
 copy[key]=value;
  return copy
  }
 
 driver = {};
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
let mutatingAdd=Object.assign({}, driver);
 mutatingAdd.push [key]=value;
  return driver;
  }
 
 
 
 
 
 
 
 
 
 
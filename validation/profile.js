const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data){
  let errors = {};
  data.handle = !isEmpty(data.handle) ? data.handle : '';

  if(!Validator.isLength(data.handle, {min:2, max:40})){
    errors.handle = "handle needs to be between 2 and 40 characters";
  }
  if(Validator.isEmpty(data.handle)){
    errors.handle ="profile handle is required";
  }
  return{
    errors,
    isValid: isEmpty(errors)
  }
}

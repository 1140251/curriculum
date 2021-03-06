function emailValidator(value) {
  return (
    value &&
    !!value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
}

function requiredValidator(value) {
  return value !== undefined && value !== null && value !== "";
}

export { emailValidator, requiredValidator };

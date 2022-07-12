export default function Validate(value, type) {
  if (
    type === "name" ||
    type === "surname" ||
    (type === "favcolor" && value.lenght !== 0)
  ) {
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (regex.test(value) || /\d/.test(value)) {
      return false;
    } else {
      return true;
    }
  } else if (type === "email") {
    if (!value.includes("@")) {
      return false;
    } else {
      return true;
    }
  } else if (type === "age" && value > 0) {
    return true;
  } else {
    return false;
  }
  return false;
}

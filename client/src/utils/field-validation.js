export const fieldValidation = (errors, errorType) => {
  if (errors) {
    const errorMessage = errors
      .replace("GraphQL error: ", "")
      .replace("[", "")
      .replace("]", "")
      .replace(/\\"/g, "")
      .replace(/"/g, "");
    const errorArray = errorMessage.split(", ");

    for (let error of errorArray) {
      if (error.toLowerCase().startsWith(errorType.toLowerCase())) {
        return error;
      }
    }
  }
};

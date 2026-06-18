export const validateExpenseData = (category) => {
  if (!category || typeof category !== "string" || category.trim() === "") {
    return {
      isValid: false,
      message: "კატეგორია სავალდებულოა და უნდა იყოს ტექსტი!",
    };
  }
};

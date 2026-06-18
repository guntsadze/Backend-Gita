export const validatePrice = (price) => {
  const numericPrice = Number(price);
  if (isNaN(numericPrice) || numericPrice < 10) {
    console.error(
      "ხარჯის თანხა არ უნდა იყოს 10-ზე ნაკლები და თანხა უნდა იყოს რიცხვი! გადაამოწმეთ შეყვვანილი ინფორმაცია",
    );
    return { isValid: false, price: null };
  }
  return { isValid: true, price: numericPrice };
};

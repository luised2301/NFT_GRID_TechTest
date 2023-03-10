import * as yup from "yup";

export const searchSchema = yup.object().shape({
  addressInput: yup
    .string()
    .length(42, "Address must be 42 characters for Ethereum")
    .required("Address value required"),
});

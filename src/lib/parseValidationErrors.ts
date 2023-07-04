type ValidationError = {
  // field: string;
  // message: string;
  [key: string]: string[];
};

// type ValidationOutput = {
//   [key: string]: string[];
// };

export default function parseValidationErrors(errors: ValidationError[]) {
  if (!errors) return null;
  return errors;
}

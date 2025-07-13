export const ValidateFormData = (fullName, email, password) => {
  const fullNameVaildate = /^[A-Za-z]+ [A-Za-z]+$/.test(fullName);
  const emailVaildate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValidate =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!emailVaildate) return "Email Id is not valid";
  if (!passwordValidate) return "Password is not valid";
  if (!fullNameVaildate) return "Full Name is not valid";
  return null;

  // should validate if empty
};

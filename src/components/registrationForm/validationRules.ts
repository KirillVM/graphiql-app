export const VALIDATION_RULES_REG_EXP = {
  oneLowercaseChar: /^(?:(?=.*\p{sc=Han})|(?=.*[\p{Ll}]))/u,
  oneUppercaseChar: /^(?:(?=.*\p{sc=Han})|(?=.*[\p{Lu}]))/u,
  oneNumber: /(?=.*\p{Nd})/u,
  oneSpecialChar: /^(?=.*[!@#$%^&*])/u,
} as const;

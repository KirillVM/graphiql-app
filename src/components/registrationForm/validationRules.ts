export const VALIDATION_RULES_REG_EXP = {
  oneLowercaseChar: /^(?:(?=.*\p{Han})|(?=.*\p{Ll}))/u,
  oneUppercaseChar: /^(?:(?=.*\p{Han})|(?=.*\p{Lu}))/u,
  oneNumber: /(?=.*\p{Nd})/u,
  oneSpecialChar: /^(?=.*[!@#$%^&*])/u,
} as const;

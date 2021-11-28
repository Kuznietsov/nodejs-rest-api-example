import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const passwordConfig = {
  min: 2,
  max: 20,
  numeric: 1,
  lowerCase: 1,
};

export const userValidator = Joi.object({
  login: Joi.string().required(),
  password: passwordComplexity(passwordConfig),
  age: Joi.number().min(4).max(130).required(),
});

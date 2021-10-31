import Validator from '../Validator';

test('Имя пользователя может содержать латинские буквы, цифры, символы тире и подчёркивания', () => {
  expect(Validator.validateUsername('FAZfgh-45_ty345u')).toBe(true);
  expect(Validator.validateUsername('FAZfgh-45_ty*345u')).toBe(false);
});

test('Имя пользователя не должно быть пустым', () => {
  expect(Validator.validateUsername('F')).toBe(true);
  expect(Validator.validateUsername('')).toBe(false);
});

test('Имя пользователя должно начинаться и заканчиваться на букву', () => {
  expect(Validator.validateUsername('9FAZfgh-45_ty345u')).toBe(false);
  expect(Validator.validateUsername('FAZfgh-45_ty345u_')).toBe(false);
});

test('Имя пользователя не должно содержать более трёх цифр подряд', () => {
  expect(Validator.validateUsername('FAZfgh-45_ty3456u')).toBe(false);
});
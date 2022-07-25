export const KintoC = (param: number) => {
  param = param - 273;
  return Math.round(param * 10) / 10;
};

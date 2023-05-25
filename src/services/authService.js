import * as request from '../utils/httpRequest';

export const loginService = async (dataSubmit) => {
  try {
    const res = await request.post(`auth/login`, dataSubmit);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const registerService = async (dataSubmit) => {
  try {
    const res = await request.post(`auth/register`, {type:'email',...dataSubmit});

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
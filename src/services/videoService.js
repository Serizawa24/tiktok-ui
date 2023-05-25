import * as request from '../utils/httpRequest';

export async function getVideoList({type,page}){

  try {
    const res = await request.get(`videos`, {
      params: {
        page,
        type,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }


}
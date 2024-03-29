import axios from 'axios';

const changeList = list => ({
  type: 'newsList',
  list,
});

export const getNewsList = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/todos').then(res => {
    dispatch(changeList(res.data));
  });
};

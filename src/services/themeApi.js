import api from './api';

export async function getThemes(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.get("/theme/allthemes", config);
    return response.data;
  }

export async function getThemeById(token, id){
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.get(`/theme/${id}`, config);
    return response.data;
}
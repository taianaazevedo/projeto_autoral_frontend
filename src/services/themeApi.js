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

export async function getFavorites(token){
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.get("/favorite", config);
    return response.data;
}

export async function postFavorite(token, id){
  const body = { theme_id: id };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.post("/favorite", body, config);
    return response.data;
}
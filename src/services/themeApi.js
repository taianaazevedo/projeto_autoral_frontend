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

export async function deleteFavorite(token, id){
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.delete(`/favorite/${id}`, config);
    return response.data;
}


export async function postTheme(token, title){
  const body = { title };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.post("/theme", body, config);
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

export async function getFavorite(token){
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.get("/favorite", config);
    return response.data;
}

export async function postSong(token, title, performer, theme_id){
  const body = { title, performer, theme_id };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.post("/song", body, config);
    return response.data;
}

export async function postMovie(token, title, streaming, theme_id){
  const body = { title, streaming, theme_id };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.post("/movie", body, config);
    return response.data;
}

export async function postSerie(token, title, streaming, theme_id){
  const body = { title, streaming, theme_id };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.post("/serie", body, config);
    return response.data;
}

export async function postBook(token, title, author, theme_id){
  const body = { title, author, theme_id };
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response = await api.post("/book", body, config);
    return response.data;
}
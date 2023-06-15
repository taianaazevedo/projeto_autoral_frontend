import { useContext, useEffect, useState } from "react";
import { getThemeById } from "../../services/themeApi";
import { UserContext } from "../../contexts/userContext";

export default function ThemeById({ id }) {
  const { user } = useContext(UserContext);
  const [themeById, setThemeById] = useState([]);

  async function getThemeByIdApi() {
    try {
      const themeApi = await getThemeById(user.token, id);
      console.log(themeApi);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getThemeByIdApi();
  }, [id]);

  return (
    <>
      <p>PAGINA DO TEMA DO ID</p>
    </>
  );
}

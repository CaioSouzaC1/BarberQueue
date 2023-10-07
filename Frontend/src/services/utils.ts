import { toast } from "react-toastify";
import { API_URL, PROJECT_NAME } from "../../env";

export const changeTitle = (title: string) => {
  document.title = title + " | " + PROJECT_NAME;
};

interface createSectionRequestI {
  obs: string;
  type: string;
  data: string;
  user: {
    id?: number;
    whatsapp?: string;
    name?: string;
    created_at?: string;
    updated_at?: string;
  };
}

export const createSectionRequest = async ({
  obs,
  type,
  data,
  user,
}: createSectionRequestI) => {
  try {
    const response = await fetch(`${API_URL}/section/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id?.toString(),
        date_timestamp: data,
        type: type,
        cancelled: false,
        obs: obs,
      }),
    });

    if (response.ok) {
      toast.success("Seção criada com sucesso!");
    } else {
      toast.error("Erro ao criar seção!");
    }
  } catch (error) {
    console.log(error);
    toast.error("Erro do sistema ao criar seção!");
  }
};

export const formatDate = (date: string | undefined) => {
  if (!date) return "";

  const data = new Date(date);
  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");
  const year = data.getFullYear();

  return `${day}/${month}/${year}`;
};

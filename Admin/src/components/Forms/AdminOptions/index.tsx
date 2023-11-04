import { toast } from "react-toastify";
import { API_URL } from "../../../../env";
import { useEffect, useState } from "react";
import { weekDays, schedules } from "../../../services/variables";
import { formatWorkingDates, get_meta } from "../../../services/utils";

const AdminOptions = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [workingDays, setWorkingDays] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [startTimes, setStartTimes] = useState<{ [key: string]: string }>({});
  const [endTimes, setEndTimes] = useState<{ [key: string]: string }>({});

  const [initialMeta, setInitialMeta] = useState({
    _est_name: "",
    _est_desc: "",
    _est_working_days: "",
  });

  useEffect(() => {
    async function fetchData() {
      const initialMeta = await get_meta();
      setInitialMeta(initialMeta.meta);
    }

    fetchData();
  }, []);

  const handleWorkingDayChange = (day: string) => {
    setWorkingDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const handleStartTimeChange = (day: string, time: string) => {
    setStartTimes((prev) => ({
      ...prev,
      [day]: time,
    }));
  };

  const handleEndTimeChange = (day: string, time: string) => {
    setEndTimes((prev) => ({
      ...prev,
      [day]: time,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const f = formatWorkingDates({
      workingDays: Object.keys(workingDays),
      startTimes: Object.values(startTimes),
      endTimes: Object.values(endTimes),
    });

    try {
      const response = await fetch(`${API_URL}/meta/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          { key: "_est_name", value: name },
          { key: "_est_desc", value: description },
          {
            key: "_est_working_days",
            value: f,
          },
        ]),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success("Configurações atualizadas!", {
          theme: "dark",
        });
      } else {
        const data = await response.json();
        console.error(data);

        toast.error("Erro ao atualizar credenciais.", {
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro interno do sistema.", {
        theme: "dark",
      });
    }
  };

  return (
    <form className="py-2 my-4 w-[60%] rounded-none" onSubmit={handleSubmit}>
      <label htmlFor="_est_name">Nome do estabelecimento</label>
      <input
        type="text"
        name="name"
        id="_est_name"
        onChange={(e) => setName(e.target.value)}
        defaultValue={initialMeta._est_name}
      />
      <label htmlFor="_est_desc">Descrição do estabelecimento</label>
      <input
        type="text"
        name="name"
        id="_est_desc"
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={initialMeta._est_desc}
      />
      {weekDays.map((day, i) => (
        <div
          className={`flex flex-wrap py-[10px] pl-4 rounded mb-4 ${
            i % 2 == 1 ? "bg-neutral-500" : "bg-neutral-600"
          }`}
          key={day.value}>
          <label className="flex flex-wrap w-full sm:w-[20%] items-center justify-start flex-row gap-4 mb-0 py-3 cursor-pointer">
            <input
              className="w-5 h-5 mb-0"
              type="checkbox"
              checked={workingDays[day.value] || false}
              onChange={() => handleWorkingDayChange(day.value)}
            />
            <p className="font-bold"> {day.name}</p>
          </label>
          {workingDays[day.value] && (
            <div className="flex flex-wrap w-full sm:w-[80%] gap-8">
              <div className="min-w-full sm:min-w-[12rem] flex items-center gap-4">
                <label
                  className="mb-0 min-w-[4.5rem]"
                  title="Horário de Inicio">
                  Inicio ☀️
                </label>
                <select
                  className="w-[50%] sm:w-[35%]"
                  value={startTimes[day.value] || ""}
                  onChange={(e) =>
                    handleStartTimeChange(day.value, e.target.value)
                  }>
                  {schedules.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="min-w-full sm:min-w-[12rem] flex items-center gap-4">
                <label className="mb-0 min-w-[4.5rem]" title="Horário de Fim">
                  Fim 🌙
                </label>
                <select
                  className="w-[50%] sm:w-[35%]"
                  value={endTimes[day.value] || ""}
                  onChange={(e) =>
                    handleEndTimeChange(day.value, e.target.value)
                  }>
                  {schedules.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};
export default AdminOptions;

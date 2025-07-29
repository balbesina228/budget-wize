"use client";
import { useAuth } from "@/shared/model/auth-store";
import { Container } from "@/shared/ui";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      redirect('/login');}
  }, [user])

  const mockData1 = [
    { id: 150, name: "Сыр", value: 100 },
    { id: 151, name: "Хлеб", value: 50 },
    { id: 152, name: "Долма", value: 300 },
    { id: 153, name: "Жвачка Турбо", value: 85 },
    { id: 154, name: "Квартира", value: 500 },
  ];
  const mockData2 = [
    { id: 155, name: "Чаевые", value: 500 },
    { id: 156, name: "Мощные чаевые", value: 50 },
    { id: 157, name: "Подобрал на улице", value: 300 },
    { id: 158, name: "Перепродал жвачку Турбо", value: 85 },
    { id: 159, name: "Победил невидимого несуществующего дракона", value: 100 },
  ];
  const COLORS = ["blue", "green", "yellow", "orange", "red"];

  return (
    <Container className="flex-auto">
      <main className="bg-primary h-full rounded-md shadow-md shadow-black p-8 text-secondary gap-16 grid grid-cols-2 grid-rows-2">
        <div>
          <ResponsiveContainer
            minWidth={200}
            minHeight={200}
            width={"100%"}
            height={"100%"}
          >
            <PieChart width={400} height={400}>
              <Pie
                data={mockData1}
                outerRadius={80}
                fill={"#8884d8"}
                dataKey={"value"}
              >
                {mockData1.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={`var(--chart-${index + 1})`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <ResponsiveContainer
            minWidth={200}
            minHeight={200}
            width={"100%"}
            height={"100%"}
          >
            <PieChart width={400} height={400}>
              <Pie
                data={mockData2}
                outerRadius={80}
                fill={"#8884d8"}
                dataKey={"value"}
              >
                {mockData2.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={`var(--chart-${index + 1})`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col">
          <span>
            Ваши жесткие расходы за <span>МЕСЯЦ</span>
          </span>
          {mockData1.map((expense, index) => (
            <div key={expense.id} className="flex justify-between">
              <div className="flex">
                <div className={`text-(--chart-${index + 1}) mr-1`}>■</div>
                <span>{expense.name}</span>
              </div>
              <span>{expense.value}</span>
            </div>
          ))}
        </div>
        <div>
          <span>
            Ваши жесткие доходы за <span>МЕСЯЦ</span>
          </span>
          {mockData2.map((expense, index) => (
            <div key={expense.id} className="flex justify-between">
              <div className="flex">
                <div className={`text-(--chart-${index + 1}) mr-1`}>■</div>
                <span>{expense.name}</span>
              </div>
              <span>{expense.value}</span>
            </div>
          ))}
        </div>
      </main>
    </Container>
  );
}

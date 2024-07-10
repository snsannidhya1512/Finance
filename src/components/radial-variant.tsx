// import {
//   RadialBar,
//   RadialBarChart,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// import { formatCurrency } from "@/lib/utils";
// import { CategoryTooltip } from "./category-tooltip";

// const COLORS = ["#0062FF", "#12C6FF", "#FF647F", "#FF9354"];

// type Props = {
//   data?: {
//     name: string;
//     value: number;
//   }[];
// };

// export const RadialVariant = ({ data }: Props) => {
//   // Calculate total value for percentage calculation
//   const totalValue = data?.reduce((sum, entry) => sum + entry.value, 0) || 1;

//   return (
//     <ResponsiveContainer width="100%" height={350}>
//       <RadialBarChart
//         cx="50%"
//         cy="30%"
//         barSize={10}
//         innerRadius="90%"
//         outerRadius="40%"
//         data={data?.map((item, index) => ({
//           ...item,
//           fill: COLORS[index % COLORS.length],
//         }))}
//       >
//         <RadialBar
//           label={{
//             position: "insideStart",
//             fill: "#fff",
//             fontSize: "12px",
//           }}
//           background
//           dataKey="value"
//         />
//         <Legend
//           layout="horizontal"
//           verticalAlign="bottom"
//           align="right"
//           iconType="circle"
//           content={({ payload }: any) => {
//             return (
//               <ul className="flex flex-col space-y-2">
//                 {payload.map((entry: any, index: number) => {
//                   const percent = entry.payload.value / totalValue;
//                   return (
//                     <li
//                       key={`item-${index}`}
//                       className="flex items-center space-x-2"
//                     >
//                       <span
//                         className="size-2 rounded-full"
//                         style={{ backgroundColor: entry.color }}
//                       />
//                       <div>
//                         <span className="text-sm text-muted-foreground">
//                           {entry.value}
//                         </span>
//                         <span className="text-sm">
//                           {formatCurrency(entry.payload.value)}
//                         </span>
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//             );
//           }}
//         />
//         <Tooltip content={<CategoryTooltip />} />
//       </RadialBarChart>
//     </ResponsiveContainer>
//   );
// };
import {
  RadialBar,
  RadialBarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { formatCurrency } from "@/lib/utils";
import { CategoryTooltip } from "./category-tooltip";

const COLORS = ["#0062FF", "#12C6FF", "#FF647F", "#FF9354"];

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export const RadialVariant = ({ data }: Props) => {
  // Calculate total value for percentage calculation
  const totalValue = data?.reduce((sum, entry) => sum + entry.value, 0) || 1;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadialBarChart
        cx="50%"
        cy="30%"
        barSize={10}
        innerRadius="90%"
        outerRadius="40%"
        data={data?.map((item, index) => ({
          ...item,
          fill: COLORS[index % COLORS.length],
        }))}
      >
        <RadialBar
          label={{
            position: "insideStart",
            fill: "#fff",
            fontSize: "12px",
          }}
          background
          dataKey="value"
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="right"
          iconType="circle"
          content={({ payload }: any) => {
            return (
              <ul className="flex flex-col space-y-2">
                {payload.map((entry: any, index: number) => {
                  const percent = entry.payload.value / totalValue;
                  return (
                    <li
                      key={`item-${index}`}
                      className="flex items-center space-x-2"
                    >
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <div>
                        <span className="text-sm text-muted-foreground">
                          {entry.value}
                        </span>
                        <span className="text-sm ml-2">
                          {formatCurrency(entry.payload.value)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

// import {
//   Cell,
//   Legend,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// import { formatPercentage } from "@/lib/utils";

// const COLORS = ["#0062FF", "#12C6FF", "#FF647F", "#FF9354"];

// type Props = {
//   data?: {
//     name: string;
//     value: number;
//   }[];
// };

// export const PieVariant = ({ data }: Props) => {
//   return (
//     <ResponsiveContainer width="100%" height={350}>
//       <PieChart>
//         <Legend
//           layout="horizontal"
//           verticalAlign="bottom"
//           align="right"
//           iconType="circle"
//           content={({ payload }: any) => {
//             return (
//               <ul className="flex flex-col space-y-2">
//                 {payload.map((entry: any, index: number) => (
//                   <li
//                     key={`item-${index}`}
//                     className="flex items-center space-x-2"
//                   >
//                     <span
//                       className="size-2 rounded-full"
//                       style={{ backgroundColor: entry.color }}
//                     />
//                     <div>
//                       <span className="text-sm text-muted-foreground">
//                         {entry.value}
//                       </span>
//                       <span className="text-sm">
//                         {formatPercentage(entry.payload.perecent * 100)}
//                       </span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             );
//           }}
//         />
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           outerRadius={90}
//           innerRadius={60}
//           paddingAngle={2}
//           fill="#8884d8"
//           dataKey="value"
//           labelLine={false}
//         >
//           {data?.map((_entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { formatPercentage } from "@/lib/utils";
import { CategoryTooltip } from "./category-tooltip";

const COLORS = ["#0062FF", "#12C6FF", "#FF647F", "#FF9354"];

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export const PieVariant = ({ data }: Props) => {
  // Calculate total value for percentage calculation
  const totalValue = data?.reduce((sum, entry) => sum + entry.value, 0) || 1;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
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
                        <span className="text-sm">
                          {formatPercentage(percent * 100)}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          }}
        />
        <Tooltip content={<CategoryTooltip />} />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={60}
          paddingAngle={2}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
        >
          {data?.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Tooltip
          formatter={(value) =>
            formatPercentage(((value as number) / totalValue) * 100)
          }
        /> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

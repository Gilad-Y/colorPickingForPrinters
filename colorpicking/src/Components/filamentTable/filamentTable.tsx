import "./filamentTable.css";
import * as React from "react";
import Table from "@mui/joy/Table";
import { filament } from "../../models/filamentModel";
import FilamentCompo from "./filamentCompo/filamentCompo";
interface props {
  rows: number;
  cols: number;
  data?: filament[][];
}
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableColumnWidth(props: props) {
  return (
    <Table
    //sx={{ "& thead th:nth-child(1)": { width: "40%" } }}
    >
      <thead>
        <tr>
          {(() => {
            const headers = [];
            for (let i = 0; i < props.cols; i++) {
              headers.push(<th key={i}>{i + 1}</th>);
            }
            return headers;
          })()}
        </tr>
      </thead>

      <tbody>
        {(() => {
          const rows = [];
          for (let i = 0; i < props.rows; i++) {
            rows.push(
              <tr key={i}>
                {(() => {
                  const cells = [];
                  for (let j = 0; j < props.cols; j++) {
                    cells.push(
                      <td key={j} style={{ padding: 0 }}>
                        <FilamentCompo
                          filament={props.data ? props.data[i][j] : [j, i]}
                        />
                      </td>
                    );
                  }
                  return cells;
                })()}
              </tr>
            );
          }
          return rows;
        })()}
      </tbody>
    </Table>
  );
}

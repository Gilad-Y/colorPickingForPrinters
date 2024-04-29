import Input from "@mui/joy/Input";
import "./steps.css";
import { useEffect, useState } from "react";
import FilamentTable from "../../../filamentTable/filamentTable";
interface props {
  step: number;
  toggleDone: (status: boolean) => void;
}
function Steps(props: props): JSX.Element {
  const [layout, setLayout] = useState<any>({});
  useEffect(() => {
    console.log(layout);
    if (layout.height > 0 && layout.width > 0 && props.step == 0) {
      props.toggleDone(false);
    }
  }, [layout, props.step]);
  return (
    <div className="steps">
      {props.step == 0 && (
        <div style={{ display: "flex" }}>
          <Input
            type="number"
            placeholder="rows"
            defaultValue={layout.height}
            slotProps={{
              input: {
                min: 1,
              },
            }}
            onChange={(v) => {
              setLayout({ ...layout, height: +v.target.value });
            }}
          />
          <Input
            type="number"
            placeholder="columns"
            defaultValue={layout.width}
            slotProps={{
              input: {
                min: 1,
              },
            }}
            onChange={(v) => {
              setLayout({ ...layout, width: +v.target.value });
            }}
          />
        </div>
      )}
      {props.step == 1 && (
        <div>
          <FilamentTable rows={layout.height} cols={layout.width} />
        </div>
      )}
      {props.step == 2 && <div></div>}
    </div>
  );
}

export default Steps;

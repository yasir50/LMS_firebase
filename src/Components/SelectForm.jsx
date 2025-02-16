import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function SelectForm({ menuValue, onChangeValue }) {
  const [values, setValues] = useState(null);
  return (
    <>
      <FormControl sx={{ width: "80%" }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={menuValue}
          label="Age"
          onChange={(e) => e.target.value}
        >
          <MenuItem value={values}>{menuValue}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

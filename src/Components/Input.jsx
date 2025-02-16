import TextField from "@mui/material/TextField";

export default function Input({ labelName, onChangeValue }) {
  return (
    <TextField
      id="standard-basic"
      label={labelName}
      variant="outlined"
      sx={{ width: "80%", mb: "12px" }}
      onChange={onChangeValue}
    />
  );
}

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const UserTable = () => {
  const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) => {
    return { name, calories, fat, carbs, protein };
  };

  const rows = [
    {
      name: "Scott",
      age: 10,
      am: 3.5,
      pm: 4.5,
    },
    {
      name: "Bobby",
      age: 9,
      am: 3.5,
      pm: 4.5,
    },
    { name: "Logan", age: 10, am: 3.5, pm: 4.5 },
    { name: "Xavier", age: 7, am: 3.5, pm: 4.5 },
    { name: "Jean", age: 10, am: 3.5, pm: 4.5 },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Session 1</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">AM</TableCell>
            <TableCell align="right">PM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.am}</TableCell>
              <TableCell align="right">{row.pm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;

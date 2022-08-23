import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import useGetUsers from "../../frontendApi/useGetUsers";

type UserTableProps = {
  isOpen: boolean;
};

const UserTable = ({ isOpen }: UserTableProps) => {
  const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) => {
    return { name, calories, fat, carbs, protein };
  };

  const { refetch } = useGetUsers();
  const [userData, setUserData] = useState<Record<string, any>>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await refetch();
      setUserData(data);
    };
    if (isOpen) {
      getData();
    }
  }, [isOpen]);

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
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>AM</TableCell>
            <TableCell>PM</TableCell>
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
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.am}</TableCell>
              <TableCell>{row.pm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;

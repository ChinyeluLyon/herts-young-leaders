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

type ParticipantTableProps = {
  isOpen: boolean;
};

const ParticipantTable = ({ isOpen }: ParticipantTableProps) => {
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
  const [userData, setUserData] = useState<Array<User>>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await refetch();
      setUserData(data);
    };
    if (isOpen) {
      getData();
    }
  }, [isOpen, refetch]);

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
          {userData?.map((row) => (
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

export default ParticipantTable;

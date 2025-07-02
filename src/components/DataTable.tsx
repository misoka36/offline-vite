import type { Person } from '../types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

interface DataTableProps {
  data: Person[];
}

const getDepartmentColor = (department: string) => {
  const colors = {
    '開発': 'bg-blue-100 text-blue-800',
    'デザイン': 'bg-purple-100 text-purple-800',
    '営業': 'bg-green-100 text-green-800',
    'マーケティング': 'bg-orange-100 text-orange-800',
    '人事': 'bg-pink-100 text-pink-800',
  };
  return colors[department as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const DataTable = ({ data }: DataTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>名前</TableHead>
          <TableHead>年齢</TableHead>
          <TableHead>メール</TableHead>
          <TableHead>部署</TableHead>
          <TableHead className="text-right">給与</TableHead>
          <TableHead>入社日</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((person) => (
          <TableRow key={person.id}>
            <TableCell className="font-medium">{person.id}</TableCell>
            <TableCell className="font-medium">{person.name}</TableCell>
            <TableCell>{person.age}歳</TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {person.email}
            </TableCell>
            <TableCell>
              <Badge 
                variant="secondary"
                className={getDepartmentColor(person.department)}
              >
                {person.department}
              </Badge>
            </TableCell>
            <TableCell className="text-right font-mono">
              ¥{person.salary.toLocaleString()}
            </TableCell>
            <TableCell className="text-sm">
              {person.joinDate}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
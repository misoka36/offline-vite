import type { Person } from '../data/sampleData';

interface DataTableProps {
  data: Person[];
}

export const DataTable = ({ data }: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              名前
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              年齢
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              メール
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              部署
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              給与
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              入社日
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((person) => (
            <tr key={person.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {person.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {person.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {person.age}歳
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {person.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {person.department}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ¥{person.salary.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {person.joinDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
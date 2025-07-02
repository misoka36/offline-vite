import { useState, useMemo } from 'react';
import { Layout, Card, CardHeader, CardTitle, CardContent, DataTable, SearchBar } from './components';
import employeesData from './data/employees.csv';
import type { Person } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Type assertion for CSV data (from generic CSV loader to specific type)
  const typedEmployeesData = employeesData as unknown as Person[];

  const filteredData = useMemo(() => {
    if (!searchTerm) return typedEmployeesData;
    
    return typedEmployeesData.filter((person: Person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, typedEmployeesData]);

  return (
    <Layout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>従業員データ管理システム</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              このアプリケーションは完全にオフラインで動作します。
              静的なデータを表示・検索できます。
            </p>
            <div className="mb-4">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="名前、メール、部署で検索..."
              />
            </div>
            <div className="text-sm text-gray-600 mb-2">
              全{typedEmployeesData.length}件中 {filteredData.length}件を表示
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <DataTable data={filteredData} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
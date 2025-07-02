import { useState, useMemo } from 'react';
import { Layout, Card, CardHeader, CardTitle, CardContent, DataTable, SearchBar } from './components';
import { csvData } from './data/sampleData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) return csvData;
    
    return csvData.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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
              静的なCSVデータを表示・検索できます。
            </p>
            <div className="mb-4">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="名前、メール、部署で検索..."
              />
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {filteredData.length}件中 {filteredData.length}件を表示
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
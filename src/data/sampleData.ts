export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
}

export const csvData: Person[] = [
  { id: 1, name: '山田太郎', age: 28, email: 'yamada@example.com', department: '開発', salary: 500000, joinDate: '2020-04-01' },
  { id: 2, name: '佐藤花子', age: 32, email: 'sato@example.com', department: 'デザイン', salary: 480000, joinDate: '2019-07-15' },
  { id: 3, name: '田中一郎', age: 25, email: 'tanaka@example.com', department: '営業', salary: 420000, joinDate: '2022-01-10' },
  { id: 4, name: '鈴木美咲', age: 29, email: 'suzuki@example.com', department: '開発', salary: 520000, joinDate: '2021-03-20' },
  { id: 5, name: '高橋健太', age: 35, email: 'takahashi@example.com', department: 'マーケティング', salary: 550000, joinDate: '2018-09-01' },
  { id: 6, name: '小林由美', age: 27, email: 'kobayashi@example.com', department: 'デザイン', salary: 470000, joinDate: '2021-11-05' },
  { id: 7, name: '加藤雄大', age: 31, email: 'kato@example.com', department: '営業', salary: 480000, joinDate: '2020-08-12' },
  { id: 8, name: '松本さくら', age: 26, email: 'matsumoto@example.com', department: '人事', salary: 450000, joinDate: '2022-06-30' },
  { id: 9, name: '井上修', age: 33, email: 'inoue@example.com', department: '開発', salary: 580000, joinDate: '2017-12-15' },
  { id: 10, name: '中村愛', age: 24, email: 'nakamura@example.com', department: 'マーケティング', salary: 400000, joinDate: '2023-02-01' }
];
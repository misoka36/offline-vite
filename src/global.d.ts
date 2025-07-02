// CSV files are imported as arrays of objects with string keys and string/number/boolean values
declare module '*.csv' {
  const data: Record<string, string | number | boolean>[];
  export default data;
}

// TSV files support
declare module '*.tsv' {
  const data: Record<string, string | number | boolean>[];
  export default data;
}

// DSV files support  
declare module '*.dsv' {
  const data: Record<string, string | number | boolean>[];
  export default data;
}
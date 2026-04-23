interface DataItem {
  name: string;
  age: number;
}

interface CollectionProps {
  colls: DataItem[];
}

export function LearningCollection({ colls }: CollectionProps) {
  return (
    <div>
      {colls.map((item) => (
        <div key={item.name}>
          <p>Nama: {item.name}</p>
          <p>Umur: {item.age}</p>
        </div>
      ))}
    </div>
  );
}
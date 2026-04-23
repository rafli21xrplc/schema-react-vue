import { LearningCollection } from "./component/Collection";

export const datas = [
  { name: "gagak", age: 20 },
  { name: "guguk", age: 24 },
  { name: "gogo",  age: 29 },
  { name: "aiman", age: 19 },
];

export default function SamplePage() {  
  return (
    <div>
      <LearningCollection colls={datas} />
    </div>
  );
}
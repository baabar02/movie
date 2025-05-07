export default function Home() {
  const digit: number = 11111;
  const words: string = "word";
  const digits: number[] = [1, 2, 3];
  const digitArray: Array<number> = [1, 2, 3];
  const wordsArray: Array<string> = ["a", "b", "c"];
  const myObj = { number: 10, string: "Bat", color: "red" };

  enum sex {
    male = "male",
    female = "female",
  }

  type FamimlyName = "ads" | "asd";

  type myZ = {
    name: string;
    age: number;
    sex: sex;
    isActive: boolean;
    origin: FamimlyName;
  };

  const person: Array<myZ> = [
    {
      name: "v",
      age: 11,
      sex: sex.male,
      isActive: true,
      origin: "asd",
    },
  ];

  return <div>
    {person.map((p, index)=> (
      <div key={index}>
        <p>Name: {p.name}</p>
        <p>Age: {p.age}</p>
        <p>Sex:{p.sex}</p>
        <p>Active: {p.isActive ? "yes" : "no"}</p>
        <p>Origin: {p.origin}</p>
      </div>
    )
    )}
  </div>;
}

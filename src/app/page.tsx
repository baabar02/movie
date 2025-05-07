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
    ner: string;
    age: number;
    sex: sex;
    isActive: boolean;
    origin: FamimlyName;
  };

  const person: Array<myZ> = [
    {
      ner: "v",
      age: 11,
      sex: male,
      isActive: true,
      origin: "asd",
    },
  ];

  return <div>Hello</div>;
}

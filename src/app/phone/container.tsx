import { Input } from "./input";
import { Person } from "./page";

type ContainerProps = {
  myContacts: Array<Person>;
};

export const Container = ({ myContacts }: ContainerProps) => {
  const date = new Date();
  console.log(myContacts);

  return (
    <div className="w-[350px] h-[700px] border border-green-400 rounded-[8px]">
      <div>00 00</div>
      <h1> Contacts </h1>
      <Input />
      {myContacts.map((el) => (
        <div className="flex flex-col">
          {el.name}
          {el.nickName}
          {el.phoneNumber}
        </div>
      ))}
      {/* <h1> {name} </h1>
      <h1> {phoneNumber} </h1> */}
    </div>
  );
};

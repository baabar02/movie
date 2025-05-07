import { Container } from "./container";

export type Person = {
  name: string;
  phoneNumber: number;
  nickName: string;
};

const Home = () => {
  const myContacts: Array<Person> = [
    {
      name: "Amar",
      nickName: "A",
      phoneNumber: 99999999,
    },
    {
      name: "Amar",
      nickName: "",
      phoneNumber: 99999999,
    },
    {
      name: "Amar",
      nickName: "",
      phoneNumber: 99999999,
    },
    {
      name: "Amar",
      nickName: "",
      phoneNumber: 99999999,
    },
  ];

  return (
    <div className="flex justify-center">
      <Container
        // key={index}
        // name={el.name}
        // phoneNumber={el.phoneNumber}
        myContacts={myContacts}
      />
    </div>
  );
};

export default Home;

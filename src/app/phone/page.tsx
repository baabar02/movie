// 'use client'

// import { Container } from "./container";
// import { useState } from "react";
// import { Input } from "./input";

// export type Person = {
//   name?: string;
//   phoneNumber: number;
//   nickName?: string;
// };

// const myContacts: Array<Person> = [

//   {
//     nickName: "Amaraa",
//     phoneNumber: 99999999,
//   },
//   {
//     name: "Amar",
//     nickName: "",
//     phoneNumber: 99999999,
//   },

//   {
//     name: "Amartsetseg",
//     phoneNumber: 99999999,
//   },
//   {
//     name: "Charlemagne",
//     nickName: "Aunt",
//     phoneNumber: 99009900
//   },
//   {
//     name: "Dodie",
//     phoneNumber: 77667788,
//     nickName: "Aunt"
//   },
//   {
//     name: "Cousin",
//     phoneNumber: 22334455,
//     nickName: "Bridget"
//   },
//   {
//     name: "Karen",
//     phoneNumber: 77776666,
//     nickName: "Bush J&S Landlady"
//   },

// ];

// const Home = () => {

//   const [input,setInput] = useState(''); 
//   const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
//     setInput(event.target.value)
//   }

//   const filteredContact = myContacts.filter(contact => {
//         if (contact.name?.toLocaleLowerCase().includes(input) || contact.nickName?.toLocaleLowerCase().includes(input)) {
//           return contact
//         }
//       })

//   return (
//     <div className="flex justify-center">
    
//       <Container
//         // filteredContact={filteredContact}
//         myContacts={myContacts}
//         inputHandler={inputHandler}
//       />
//     </div>
//   );
// };

// export default Home;

'use client'

import { useState } from "react";
import { List } from "./container";
import { SearchInput } from "./input";

export type Person = {
  name?: string;
  phoneNumber: string | number;
  nickName: string
}

const myContacts: Array<Person> = [
  {
    nickName: "Alden",
    phoneNumber: 99009900
  },
  {
    nickName: "Alex",
    phoneNumber: 11223344
  },
  {
    nickName: "AubreyWeddingPal",
    phoneNumber: 88009988
  },
  {
    name: "Charlemagne",
    nickName: "Aunt",
    phoneNumber: 99009900
  },
  {
    name: "Dodie",
    phoneNumber: 77667788,
    nickName: "Aunt"
  },
  {
    nickName: "AwkwardNoodle",
    phoneNumber: 70007000
  },
  {
    nickName: "Betsy Le",
    phoneNumber: 88881122
  },
  {
    name: "Cousin",
    phoneNumber: 22334455,
    nickName: "Bridget"
  },
  {
    name: "Karen",
    phoneNumber: 77776666,
    nickName: "Bush J&S Landlady"
  },
  {
    nickName: "Catherine",
    phoneNumber: 99009900
  },
]

export default function Home() {
  const [input, setInput] = useState('')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const filterBySearch = myContacts.filter(el => {
    if (el.name?.toLocaleLowerCase().includes(input) || el.nickName.toLocaleLowerCase().includes(input)) {
      return el
    }
  })

  return (
    <div className="flex w-screen h-screen justify-center pt-[20px]">
      <div className="flex flex-col rounded-2xl w-[400px] border h-fit p-2 ">
        <p className="text-4xl font-semibold pb-4"> Contacts </p>
        <SearchInput inputHandler={inputHandler} />
        {
          filterBySearch?.map((el, index) => {
            return <List key={index} name={el.name} nickName={el.nickName} myContacts={myContacts} />
          })
        }
      </div>
    </div>
  );
}

 
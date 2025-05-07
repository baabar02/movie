// import { Input } from "./input";
// import { Person } from "./page";

// type ContainerProps = {
//   myContacts: Array<Person>;
// };


// export const Container = ({ myContacts, filteredContact, inputHandler } : ContainerProps) => {
//   const currentTime: Date = new Date();
//   const hours: number = currentTime.getHours();
//   const minutes: string | number =currentTime.getMinutes().toString().padStart(2, '0');
//   console.log(myContacts);

//   // const filteredContact = myContacts.filter(contact => {
//   //   if (contact.name?.toLocaleLowerCase().includes(input) || contact.nickName?.toLocaleLowerCase().includes(input)) {
//   //     return contact
//   //   }
//   // })

//   return (
//     <div className="w-[350px] h-[700px] border border-green-400 rounded-[8px]">
//       <div>{hours} {minutes}</div>
//       <h1> Contacts </h1>
//       <Input onChange={inputHandler} placeholder="search..."/>
//       {myContacts.map((el, index) => (
//         <div 
//           key={index}
//           className="flex flex-col">
//           {el.name}
//           {el.nickName}
//           {el.phoneNumber}
//         </div>
//       ))}

//     </div>
//   );
// };


import { Person } from "./page";

type ListProps = {
    name?: string;
    nickName?: string;
    myContacts: Array<Person>
}

export const List = ({ name, nickName, myContacts }: ListProps) => {
    return <div className="flex gap-1 text-2xl p-2 border-b-1 last:border-none">
        <p>{name}</p>
        <p className="font-semibold">{nickName}</p>
    </div>
}
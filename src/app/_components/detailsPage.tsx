import { getMovieId } from "../hooks/get-id-api";



interface PageProps {
  params: {
    id: string;
  };
}

const Detail = async ({id} :{id:string}) => {

  const results = await getMovieId(id);

  return (
    <div>
     
        <div>
          hello {id}
          <p>fsds</p>
        </div>
   
    </div>
  );
};

export default Detail;

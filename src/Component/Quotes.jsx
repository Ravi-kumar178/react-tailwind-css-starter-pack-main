import React, { useEffect, useState } from 'react'

const API_KEY = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
console.log(API_KEY);
export const Quotes = () => {

    const[loading,setLoading] = useState(false);
    const[quotes, setQuotes] = useState([]);
    const[author , setAuthor] = useState([]);

    useEffect(()=>{
        fetchQuotes();
    },[])

   async function fetchQuotes(){
        setLoading(true);
        try{
            const res = await fetch(API_KEY);
            const output = await res.json();
            const data = output.quotes;
           
            if(data.length > 0){
                let totalLength = data.length;
                let randNumber = Math.floor(Math.random()*totalLength);
                console.log(randNumber);
                let randQuotes = data[randNumber].quote;
                setQuotes(randQuotes);
                console.log(randQuotes);

                let randAuthor = data[randNumber].author;
                console.log(randAuthor);
                setAuthor(randAuthor);
            }
            else{
                console.log("No Quote Available")
            }
        }
        catch(err){

        }
        setLoading(false);
     }

  return (
    <div className='quotesFirstDiv px-10 py-8 w-full h-full'>
      <div  className='quotesSecondDiv px-10 py-8 flex justify-center items-center w-full h-full '>
       <div className=" flex flex-col items-end">
            <div className='firstPara font-semibold text-xl text-[#102525]'>{quotes}</div>
            <div className='secondPara italic font-medium text-[#202636]'>- {author}</div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
      <button onClick={()=>fetchQuotes()}
        className='button mx-auto -my-10  bg-[#251122] px-2 py-1 rounded-lg text-[14px] text-white hover:scale-110 hover:bg-white hover:text-[#251122] hover:font-medium transition-all duration-150 hover:shadow-inner'
      >Get More Quotes</button>
      </div>
   
    </div>
  )
}

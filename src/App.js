import logo from './logo.svg';
import './App.css';
import Quote from './Quote';
import Quote1 from './Quote1';
import React from "react";
import Quote2 from './Quote2';
import StudentList from './StudentList';

function App() {
  let quoteText = "To be or not to be, that is a question!";
  let authorName = "William Shakespeare";
  let quoteData={
    text: "Hello world!",
    author: "Bill Gates"
  }
  const group1 = {
    groupName: "ПВ911",
    students: [
      {name: "Gladkovskyi", age: 35},
      {name: "Grigoriev", age: 19},
      {name: "Kizyan", age: 22}
    ]
  }
  return (
    <React.Fragment>
   <Quote text={quoteText} author={authorName}></Quote>
   <hr/>
   <Quote1 data={quoteData}></Quote1>
   <hr/>
   <Quote2 data={quoteData}></Quote2>
   <hr></hr>
   <StudentList data={group1}></StudentList>
   <hr/>
   <Quote></Quote>
   <hr/>
   <Quote text="Та что ж такое??!"></Quote>
   <hr/>
   <Quote2></Quote2>
   </React.Fragment>
  );
}

export default App;

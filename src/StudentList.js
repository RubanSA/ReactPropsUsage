import StudentInfo from "./StudentInfo";

export default function StudentList(props)
{
    let {groupName, students} = props.data;
    return (
        <>
        <h3>{groupName}</h3>
        <ul>
            {
                students.map(item=>{
                    return (<StudentInfo key={item.name} name={item.name} age={item.age}/>);
                })
            }
        </ul>
        </>
    );
}
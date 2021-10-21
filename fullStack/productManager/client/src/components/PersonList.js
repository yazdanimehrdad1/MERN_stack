import React, {useState} from 'react'

const PersonList = (props)=>{
    console.log("props", props)
    // const [people, setPeople] = useState([])
    const sortItems = (peopleList)=>{

        return peopleList.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
    }
    // const sortedPeople = sortItems( people)
    // setPeople(sortedPeople)

  

    
    return(
        <div>
            {props.people.map((person, idx)=>{
                return <p key={idx}> {person.firstName}, {person.lastName}</p>
            })}
        </div>
    );
}

export default PersonList
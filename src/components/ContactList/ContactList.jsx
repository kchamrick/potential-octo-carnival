import React, {useEffect, useState} from "react";
import ContactRow from "../ContactRow/ContactRow";
import axios from "axios";

function ContactList({ setFeaturedUser }) {
    const [contacts, setContacts] = useState([]);
    useEffect(()=> {
        axios("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
        .then((data)=> {
            {
                console.log(data.data);
                setContacts(data.data);
            }
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
    <table>
        <thead>
            <tr>
                <th colSpan="3">
                    ContactList
                </th>
            </tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <ContactRow 
                    key = {contact.id} 
                    contact={contact}
                    setFeaturedUser={setFeaturedUser} 
                    />
                    ))}
            </tbody>
            </table>
            );
}

export default ContactList;

//1. Get selected user's id 
//2. Show the user that was selected (list of users should be hidden)
//3. Click a 'back' button to show the list of users again
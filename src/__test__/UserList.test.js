import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import UserList from "../components/userList/UserList";
import UserTable from "../components/userList/Table";
import { BrowserRouter } from "react-router-dom";

const users = [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
},
{
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
      "lat": "-43.9509",
      "lng": "-34.4618"
    }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
  }
}];

const MockedUserTableList = () => {
  return(
      <BrowserRouter>
      <UserTable users={users} />
      </BrowserRouter>
  )
}

describe(('User list test'), () =>{
  
  render(<UserList />);
  it("should have an input search", async () => {
      const searchInputgElement = await screen.findByPlaceholderText('User search');
      expect(searchInputgElement).toBeInTheDocument();
  });

  it(('User with id : 2 should be in document'), async () => {
    render(<MockedUserTableList />);
    const userElement = await screen.findByTestId("user_row_2");
    expect(userElement).toBeInTheDocument();
  });

  it(('The user table should have 2 elements'), async () => {
    render(<MockedUserTableList />);
    const tableElements = await screen.findAllByTestId(/user_row/i);
    expect(tableElements.length).toBe(2);
  });
});


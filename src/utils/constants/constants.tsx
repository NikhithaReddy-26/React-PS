export const passwordRegex =
  /^(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const EMAIL_REGEX_PATTERN = /^\S+@\S+\.\S+$/;
  export type UserDetails = {
    id: number;
    email: string;
    password: string;
  };
export const details:UserDetails[]=[
  {
    id:1,
    email:"nithi@gmail.com",
    password:"nithi@123"
  },
  {
    id:2,
    email:"nithika@gmail.com",
    password:"Nithika@123"
  },
  {
    id: 3,
    email: "john@example.com",
    password: "JohnDoe@123"
  },
  {
    id: 4,
    email: "alice@example.com",
    password: "AliceSmith@123"
  },
  {
    id: 5,
    email: "bob@example.com",
    password: "BobJohnson@123"
  }
]
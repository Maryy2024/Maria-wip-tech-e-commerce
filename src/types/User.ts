type User = {
    name: string;
    email: string;
    password: string;
    [key: string]: string; // This line is the index signature
}
export default User

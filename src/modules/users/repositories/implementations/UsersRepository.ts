import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): any {
        const user = new User();
        
        Object.assign(user, {
            name,
            email
        })
    
        this.users.push(user);
    }

  findById(id: string): User | undefined {
    const idV = this.users.find(idV => idV.id === id);
        return idV;
  }

  findByEmail(email: string): User | undefined {
    const emailV = this.users.find(emailV => emailV.email === email);
        return emailV;
  }

  turnAdmin(receivedUser: User): User {
    const verdadeiro = this.users.find(verdadeiro => verdadeiro.admin === false)
        if(verdadeiro){
            receivedUser.admin = true;
            receivedUser.updated_at = new Date();
        }    
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };

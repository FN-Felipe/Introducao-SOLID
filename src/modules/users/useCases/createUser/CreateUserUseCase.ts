import { User } from "../../model/User"
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    const userAlreadExists = this.usersRepository.findByEmail(email);
        if(userAlreadExists){
        throw new Error("E-mail Alread Exists!")
    }
    this.usersRepository.create({name, email});
    }
}

export { CreateUserUseCase };

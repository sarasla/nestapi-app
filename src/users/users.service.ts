import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class UsersService {
    private readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';

    async getAllUsers() {
        const response = await axios.get(this.usersUrl);
        return response.data.map(user => ({
          name: user.name,
          email: user.email,
          companyName: user.company.name,
        }));
      }
    
    
}


import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { UserService } from 'src/services/user.service';
import { RoleService } from 'src/services/role.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const users = await this.userService.findTopN(3);
    console.log({ users });

    const roles = await this.roleService.findTopN(3);
    console.log({ roles });

    return this.appService.getHello();
  }
}

import { Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from 'src/entities/log.entity';
import { LogService } from 'src/services/log.service';
import { Repository } from 'typeorm';

// https://stackoverflow.com/questions/60578332/use-global-nest-module-in-decorator/60608856#60608856

export const MyLog = () => {
  const injectLogService = Inject(LogService);

  const injectLogRepository = InjectRepository(Log);
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    // this is the same as using constructor(private readonly customService: CustomService) in a class
    injectLogService(target, 'logService');
    injectLogRepository(target, 'logRepository');

    //get original method
    const originalMethod = propertyDescriptor.value;

    //redefine descriptor value within own function block
    propertyDescriptor.value = async function (...args: any[]) {
      const logService: LogService = this.logService;

      const logRepository: Repository<Log> = this.logRepository;
      try {
        logService.log('Before the method executes.');

        const beforeLog = new Log();
        beforeLog.content = 'Before the method executes.';
        await logRepository.save(beforeLog);

        const result = await originalMethod.apply(this, args);
        logService.log('After the method executes.');

        const afterLog = new Log();
        afterLog.content = 'After the method executes.';
        await logRepository.save(afterLog);

        return result;
      } catch (error) {
        logService.error('Method execute failed.');

        const log = new Log();
        log.content = 'Method execute failed.';
        await logRepository.save(log);

        throw error;
      }
    };
  };
};

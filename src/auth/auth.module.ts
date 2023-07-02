import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './auth.constant';
import { JwtModule } from '@nestjs/jwt';

@Module({
    controllers: [AuthController],
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
    })],
    providers: [AuthService, LocalStrategy]
})
export class AuthModule { }

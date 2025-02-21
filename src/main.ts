import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Ginte API')
    .setDescription('Api to manage Ginte data')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.use(
    '/scalar',
    apiReference({
      spec: {
        content: document,
      },
    }),
  );

  await app.listen(3000, () => {
    console.log('-----------------------');
    console.log('🎉 - Servidor Online !');
    console.log('\x1b[34m%s\x1b[0m', '🔗 - http://localhost:3000');
    console.log('\x1b[33m%s\x1b[0m', '📃 - http://localhost:3000/api');
    console.log('\x1b[33m%s\x1b[0m', '📃 - http://localhost:3000/scalar');
    console.log('-----------------------');
  });
}
bootstrap();

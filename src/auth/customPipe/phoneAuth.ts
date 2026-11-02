import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PhoneAuth implements PipeTransform {
  transform(value: any) {
    const phoneNumber = String(value.phone);
    const regex = /^\d{10,11}$/;

    if (!regex.test(phoneNumber)) {
      throw new BadRequestException(
        'Phone number must be exactly between 10 and 11 numbers',
      );
    }
    return value;
  }
}

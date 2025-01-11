import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@xeone59tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

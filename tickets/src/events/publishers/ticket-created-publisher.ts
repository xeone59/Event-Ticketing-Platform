import { Publisher, Subjects, TicketCreatedEvent } from '@xeone59tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

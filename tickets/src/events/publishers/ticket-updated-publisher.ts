import { Publisher, Subjects, TicketUpdatedEvent } from '@xeone59tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

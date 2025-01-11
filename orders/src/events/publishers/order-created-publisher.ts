import { Publisher, OrderCreatedEvent, Subjects } from '@xeone59tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

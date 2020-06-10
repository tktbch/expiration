import {AbstractPublisher, ExpirationCompleteEvent, Subjects} from "@tktbitch/common";

export class ExpirationCompletePublisher extends AbstractPublisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}

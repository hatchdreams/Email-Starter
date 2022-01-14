export interface InboundEmail {
    to: string;
    from: string;
    cc: string;
    bcc: string;
    date: Date;
    body: string;
    isOpened: boolean;
    isFavorited: boolean;
    isDeleted: boolean;
}
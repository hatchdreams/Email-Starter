export interface InboundEmail {
    id: number;
    to: string;
    from: string;
    fromName: string;
    cc: string;
    bcc: string;
    date: Date;
    body: string;
    isOpened: boolean;
    isFavorited: boolean;
    isDeleted: boolean;
}
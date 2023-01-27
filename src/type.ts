export interface Account {
    acct: string;
    avatar: string;
    display_name: string;
}
  
export interface MediaAttachment {
    url: string;
    blurhash: string;
}
  
export interface Status {
    id: number;
    account: Account;
    media_attachments: MediaAttachment[];
    url: string;
    sensitive: boolean;
}
  
export interface MediaStatusesResponse {
    data: Status[];
}
  
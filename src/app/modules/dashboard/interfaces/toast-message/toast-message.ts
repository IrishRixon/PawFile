export interface ToastMessage {
    severity: string;
    summary: string;
    detail: string;
    life: number;
    sticky?: boolean;
    icon?: string;
}
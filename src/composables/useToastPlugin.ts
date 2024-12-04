import { useToast } from 'primevue/usetoast';

export function useToastPlugin() {
    const toast = useToast();

    type Severity = 'info' | 'success' | 'warn' | 'error' | 'secondary' | 'contrast';

    const showToast = (message: string, severity: Severity = 'info', life: number = 3000) => {
        toast.add({
            severity,
            summary: severity.toUpperCase(),
            detail: message,
            life,
        });
    };

    const showSuccess = (message: string, life: number = 3000) => {
        showToast(message, 'success', life);
    };

    const showError = (message: string, life: number = 3000) => {
        showToast(message, 'error', life);
    };

    const showWarning = (message: string, life: number = 3000) => {
        showToast(message, 'warn', life);
    };

    const showInfo = (message: string, life: number = 3000) => {
        showToast(message, 'info', life);
    };

    return {
        showToast,
        showSuccess,
        showError,
        showWarning,
        showInfo,
    };
}

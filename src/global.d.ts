declare global {
  type Maybe<T> = T | null | undefined;
  type IMeta = {
    current_page?: number;
    pages?: number;
    page?: number;
    per_page: string | number;
    total: number;
  };
  type IResponse<T = any> = {
    data: T;
    message: string;
    success: boolean;
  };

  type DialogTabItem = {
    title: string;
    submitText?: string;
    cancelText?: string;
    submitEvent?: string;
    loading?: boolean;
    hasBackButton?: boolean;
    hasCancelEvent?: boolean;
  };
}

export {}

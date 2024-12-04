export const searchParamsHandler = (params: Record<string, unknown>): string => {
    const searchParams = new URLSearchParams();
    for (const key in params) {
        if (params[key]) {
            searchParams.append(key, String(params[key]));
        }
    }
    return searchParams.toString();
};
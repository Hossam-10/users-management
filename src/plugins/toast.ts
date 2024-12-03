import { ToastSeverity } from "primevue/api";
import { app } from "@/main";
import type { ToastMessageOptions } from "primevue/toast";

const lifeTime = 3000;

export function info(title = "I am title", body = "I am body") {
  app.config.globalProperties.$toast.add({
    severity: ToastSeverity.INFO as ToastMessageOptions["severity"],
    summary: title,
    detail: body,
    life: lifeTime,
  });
}
export function success(title = "Success", body = "success Message") {
  app.config.globalProperties.$toast.add({
    severity: ToastSeverity.SUCCESS as ToastMessageOptions["severity"],
    summary: title,
    detail: body,
    life: lifeTime,
  });
}

export function error(title = "error", body = "Failed to perform operation") {
  app.config.globalProperties.$toast.add({
    severity: ToastSeverity.ERROR as ToastMessageOptions["severity"],
    summary: title,
    detail: body,
    life: lifeTime,
  });
}

import type { App } from "vue";

// primevue
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Textarea from "primevue/textarea";
import ProgressBar from "primevue/progressbar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import OverlayPanel from "primevue/overlaypanel";
import Toast from "primevue/toast";
import Skeleton from "primevue/skeleton";
import Paginator from "primevue/paginator";

//custom
import AppButton from "@/components/AppButton.vue";
import Loader from "@/components/Loader.vue";
import Box from "@/components/Box.vue";
import InputField from "@/components/InputField.vue";
import SkeletonCard from "@/components/SkeletonCard.vue";

export default {
  install: (app: App) => {
    app
      .component("InputText", InputText)
      .component("InputNumber", InputNumber)
      .component("Dropdown", Dropdown)
      .component("Checkbox", Checkbox)
      .component("Textarea", Textarea)
      .component("ProgressBar", ProgressBar)
      .component("DataTable", DataTable)
      .component("Column", Column)
      .component("Dialog", Dialog)
      .component("Button", Button)
      .component("OverlayPanel", OverlayPanel)
      .component("Toast", Toast)
      .component("Paginator", Paginator)
      .component("Skeleton", Skeleton)
      .component("AppButton", AppButton)
      .component("Loader", Loader)
      .component("Box", Box)
      .component("InputField", InputField)
      .component("SkeletonCard", SkeletonCard);
  },
};

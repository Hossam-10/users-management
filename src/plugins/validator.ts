import type { App } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineRule, configure } from "vee-validate";
import * as AllRules from "@vee-validate/rules";

Object.keys(AllRules.all).forEach((rule) => {
  //@ts-ignore
  defineRule(rule, AllRules[rule]);
});

defineRule("numeric", (value: Maybe<string>) => {
  return value && /^\d+(?:\.\d+)?$/.test(value)
    ? true
    : "This field may only contain numeric characters";
});

configure({
  generateMessage: ({ rule }): string => {
    const params = rule?.params as string[];
    const messages = {
      required: "This field is required",
      integer: "This field must be integer value",
      min_value: `This field must be at least ${params[0]}`,
      max_value: `This field must be maximum ${params[0]}`,
      in: `This field must be ${params[0]} to ${params[1]}`,
      between: `This field must be between ${params[0]} and ${params[1]}`,
      min: `This field must be at least ${params[0]} characters`,
      max: `This field must not exceed ${params[0]} characters`,
      confirmed: "This field confirmation does not match",
      email: "This field must be a valid email",
      digits: `This field must be ${params[0]} digits`,
    };
    // @ts-ignore
    return messages[rule.name] || "";
  },
});

export default {
  install: (app: App) => {
    app
      .component("ValidationForm", Form)
      .component("Field", Field)
      .component("ErrorMessage", ErrorMessage);
  },
};

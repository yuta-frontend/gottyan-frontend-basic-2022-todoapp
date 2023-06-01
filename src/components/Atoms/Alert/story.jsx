import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Alert",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "タスクの名前が設定されていません。",
  isActive: false,
};
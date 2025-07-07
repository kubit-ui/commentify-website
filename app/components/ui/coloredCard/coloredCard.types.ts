export interface HeaderProps {
  number: number;
  title: string;
  date: string;
}

export interface ContentProps {
  title?: string;
  description: string;
}

export enum CardColor {
  ORANGE = "orange",
  GREEN = "green",
  BLUE = "blue",
  PINK = "pink",
}

export const ColoredCardContent = {
  [CardColor.ORANGE]: {
    header: {
      number: 1,
      title: "Accessibility Web",
      date: "25/11/2024",
    },
    content: {
      title: "RWD buttons",
      description: `When generic text labels are used for Button or if more information is needed for screen reader users, we have to provide an accessible text label for them that especifies the name of the button + the purpose of that button.
Accessible label: 
"[button label] + [description / action]"`,
    },
  },
  [CardColor.GREEN]: {
    header: {
      number: 2,
      title: "Accessibility App",
      date: "28/10/2024",
    },
    content: {
      title: "Decorative icons",
      description:
        "These icons are decorative and have to be hidden for screen reader users.",
    },
  },
  [CardColor.PINK]: {
    header: {
      number: 3,
      title: "Analytics",
      date: "01/09/2024",
    },
    content: {
      title: "",
      description: `// ANALYTICS - when the user click on the button
    .trackEvent({
        action: "click",
        format: "button",
        component: "",
        element: ""
    });`,
    },
  },
  [CardColor.BLUE]: {
    header: {
      number: 4,
      title: "Poeditor",
      date: "01/09/2024",
    },
    content: {
      title: "Decorative icons",
      description: `COMPONENT NAME: 
Button. 
TAGGING & POEDITOR: 
Button`,
    },
  },
};

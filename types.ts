export type TemplateQuestion = {
  id: number;
  title: string;
  content: string;
  icon?: string;
};

export type ChatMessage = {
  id: number;
  content: string;
    isQuestion: boolean;
};

export interface Message {
  id: string;
  sender: string;
  text: string;
}

export interface Participant {
  label: string;
}

export interface Participants {
  [key: string]: Participant;
}

export interface ConversationMeta {
  title: string;
  subtitle: string;
  participants: Participants;
}

export interface ConversationData {
  meta: ConversationMeta;
  messages: Message[];
}

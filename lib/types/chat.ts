export type MessageRole = 'user' | 'assistant' | 'system';

export type VisitorType = 'client' | 'recruiter' | 'developer' | 'casual' | 'unknown';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  typing?: boolean;
}

export interface ConversationContext {
  visitorType: VisitorType;
  interests: string[];
  questionsAsked: string[];
  projectsViewed: string[];
  currentSection: string;
  qualificationScore: number;
  sessionData: {
    startTime: Date;
    messageCount: number;
  };
}

export interface QuickAction {
  id: string;
  label: string;
  action: string;
  icon?: string;
}

export enum SceneId {
  HOME = 'HOME',
  PATH_A = 'PATH_A',
  PATH_B = 'PATH_B',
  STORY_2 = 'STORY_2',
  STORY_3 = 'STORY_3',
  STORY_4 = 'STORY_4',
  STORY_5 = 'STORY_5',
  PROPOSAL = 'PROPOSAL',
  YES = 'YES',
  NO = 'NO',
  CONTACT = 'CONTACT'
}

export interface StoryContent {
  id: SceneId;
  headline?: string;
  subtext?: string; // Used for "body" text in prompt
  question?: string; // Specific to home
  cta?: string;
  choices?: {
    text: string;
    path: 'A' | 'B';
  }[];
}
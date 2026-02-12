import { SceneId, StoryContent } from '../types';

export const storyData: Record<string, StoryContent> = {
  [SceneId.HOME]: {
    id: SceneId.HOME,
    headline: "Every love story begins with a choice…",
    subtext: "And tonight, my heart is placing one in your hands.",
    question: "If love had a direction, where would ours begin?",
    choices: [
      { text: "From the first moment I saw you", path: 'A' },
      { text: "From the quiet nights we talked", path: 'B' }
    ]
  },
  [SceneId.PATH_A]: {
    id: SceneId.PATH_A,
    headline: "The First Moment",
    subtext: "The first time I saw you, in the church, the world paused, then we went out, to that restaurant in FESTAC, when i saw you on that shinny beautiful dress, my heart paused. Not dramatically. Not loudly. Just enough for my heart to notice.",
    cta: "Continue…"
  },
  [SceneId.PATH_B]: {
    id: SceneId.PATH_B,
    headline: "Quiet Nights",
    subtext: "It wasn’t fireworks. It wasn’t noise. It was the quiet comfort of your voice that made my world feel softer.",
    cta: "Continue…"
  },
  [SceneId.STORY_2]: {
    id: SceneId.STORY_2,
    headline: "The Realization",
    subtext: "Somewhere between laughter and long conversations, I realized something dangerous… I was falling.",
    cta: "Keep going…"
  },
  [SceneId.STORY_3]: {
    id: SceneId.STORY_3,
    headline: "Feeling Like Home",
    subtext: "Not the kind of falling that scares you. The kind that feels like home. The kind where your heart whispers, “This is it.”",
    cta: "What happened next?"
  },
  [SceneId.STORY_4]: {
    id: SceneId.STORY_4,
    headline: "My Safe Place",
    subtext: "You became my calm. My safe place. My answered prayer. In a world that moves too fast, you feel like forever.",
    cta: "Tell me more…"
  },
  [SceneId.STORY_5]: {
    id: SceneId.STORY_5,
    headline: "Intentional Love",
    subtext: "Loving you isn’t loud. It’s intentional. It’s steady. It’s the kind of love that chooses you every single day. And tonight… I choose you again.",
    cta: "One last page…"
  },
  [SceneId.PROPOSAL]: {
    id: SceneId.PROPOSAL,
    headline: "To Chi, my love…",
    subtext: "You are the most beautiful chapter my life has ever written. In your laughter, I find peace. In your presence, I find purpose. In your eyes, I see a future I want to wake up to every day.\n\nYou are not just someone I love. You are the woman I admire. The woman I respect. The woman I thank God for.\n\nEvery day with you feels intentional. Thoughtful. Real.\n\nAnd if love is a journey, then I want every mile to be with you.",
    question: "Chi, my love, my Divine… Would you be my VAL?"
  },
  [SceneId.CONTACT]: {
    id: SceneId.CONTACT,
    headline: "I want to hear your voice...",
    subtext: "Tell me how you feel right now. Don't keep me waiting.",
  }
};
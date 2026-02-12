import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Sparkles, Music, VolumeX } from 'lucide-react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { StoryScreen } from './components/StoryScreen';
import { ChoiceScreen } from './components/ChoiceScreen';
import { FinalProposal } from './components/FinalProposal';
import { YesScreen } from './components/YesScreen';
import { NoScreen } from './components/NoScreen';
import { ContactScreen } from './components/ContactScreen';
import { storyData } from './data/storyData';
import { SceneId } from './types';

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<SceneId>(SceneId.HOME);
  const [path, setPath] = useState<'A' | 'B' | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Background Audio (conceptual - using a ref for the audio element would be standard)
  useEffect(() => {
    // In a real browser environment, audio needs user interaction to start.
    // We treat the toggle as that interaction.
  }, [audioEnabled]);

  const handleNext = (nextId: SceneId) => {
    // Slight vibration on mobile for tactile feedback
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
    setCurrentScene(nextId);
  };

  const handleChoice = (choicePath: 'A' | 'B') => {
    if (navigator.vibrate) navigator.vibrate(20);
    setPath(choicePath);
    if (choicePath === 'A') {
      setCurrentScene(SceneId.PATH_A);
    } else {
      setCurrentScene(SceneId.PATH_B);
    }
  };

  const renderScreen = () => {
    switch (currentScene) {
      case SceneId.HOME:
        return (
          <ChoiceScreen
            key="home"
            data={storyData[SceneId.HOME]}
            onChoice={handleChoice}
          />
        );
      case SceneId.PATH_A:
        return (
          <StoryScreen
            key="pathA"
            data={storyData[SceneId.PATH_A]}
            onNext={() => handleNext(SceneId.STORY_2)}
          />
        );
      case SceneId.PATH_B:
        return (
          <StoryScreen
            key="pathB"
            data={storyData[SceneId.PATH_B]}
            onNext={() => handleNext(SceneId.STORY_2)}
          />
        );
      case SceneId.STORY_2:
      case SceneId.STORY_3:
      case SceneId.STORY_4:
      case SceneId.STORY_5:
        return (
          <StoryScreen
            key={currentScene}
            data={storyData[currentScene]}
            onNext={() => {
                const order = [SceneId.STORY_2, SceneId.STORY_3, SceneId.STORY_4, SceneId.STORY_5, SceneId.PROPOSAL];
                const currentIndex = order.indexOf(currentScene);
                handleNext(order[currentIndex + 1]);
            }}
          />
        );
      case SceneId.PROPOSAL:
        return (
          <FinalProposal
            key="proposal"
            data={storyData[SceneId.PROPOSAL]}
            onResponse={(response) => handleNext(response ? SceneId.YES : SceneId.NO)}
          />
        );
      case SceneId.YES:
        return <YesScreen key="yes" onNext={() => handleNext(SceneId.CONTACT)} />;
      case SceneId.NO:
        return <NoScreen key="no" onRedeem={() => handleNext(SceneId.YES)} />;
      case SceneId.CONTACT:
        return <ContactScreen key="contact" data={storyData[SceneId.CONTACT]} />;
      default:
        return null;
    }
  };

  // Logic to determine if particles should be shown (HOME and PROPOSAL primarily)
  // We'll also show them on YES/NO for consistency, but maybe hide on heavy text story screens to keep focus?
  // User asked for "in the background of the 'HOME' and 'FINAL LOVE LETTER' screens".
  const showParticles = 
    currentScene === SceneId.HOME || 
    currentScene === SceneId.PROPOSAL || 
    currentScene === SceneId.YES || 
    currentScene === SceneId.NO ||
    currentScene === SceneId.CONTACT;

  return (
    <div className="relative min-h-screen w-full bg-darkromance text-cream overflow-hidden font-sans selection:bg-rosegold selection:text-wine">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-wine/20 via-darkromance to-darkromance animate-pulse-slow" />
        <BackgroundParticles visible={showParticles} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center max-w-[420px] mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </div>

      {/* Audio Toggle (Optional UI) */}
      <button 
        onClick={() => setAudioEnabled(!audioEnabled)}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-white/5 backdrop-blur-sm text-rosegold hover:bg-white/10 transition-colors"
      >
        {audioEnabled ? <Music size={16} /> : <VolumeX size={16} />}
      </button>

    </div>
  );
};

export default App;
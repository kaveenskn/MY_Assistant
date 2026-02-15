import { useState } from 'react';
import ProfileSetup from './components/ProfileSetup';
import PublicProfile from './components/PublicProfile';

function App() {
  const [currentView, setCurrentView] = useState<'setup' | 'profile'>('setup');
  const [profileData, setProfileData] = useState<{
    profileImage: string | null;
    name: string;
    title: string;
    bio: string;
  } | null>(null);

  const handleGenerateValues = (data: {
    cvFile: File | null;
    profileImage: string | null;
    name: string;
    title: string;
    bio: string;
  }) => {
    // In a real app, this is where we'd send the file to the backend
    setProfileData({
      profileImage: data.profileImage,
      name: data.name,
      title: data.title,
      bio: data.bio
    });
    setCurrentView('profile');
  };

  return (
    <div className="font-sans antialiased text-white bg-black-rich min-h-screen">
      {currentView === 'setup' && (
        <ProfileSetup onGenerate={handleGenerateValues} />
      )}

      {currentView === 'profile' && profileData && (
        <PublicProfile data={profileData} />
      )}
    </div>
  );
}

export default App;

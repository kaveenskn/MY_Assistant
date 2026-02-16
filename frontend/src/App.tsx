import Assistant from './components/Assistant';

// Placeholder data - CUSTOMIZE THIS FOR YOUR OWN PROFILE
const USER_PROFILE = {
  profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2544&auto=format&fit=crop', // Professional placeholder
  name: 'Alex Morgan',
  title: 'Senior Solutions Architect',
  degree: 'MSc Artificial Intelligence',
  bio: 'Passionate about leveraging AI to solve complex business problems. With over 8 years of experience in full-stack development and cloud architecture, I specialize in building scalable, intelligent systems that drive innovation.',
};

function App() {
  return (
    <div className="font-sans antialiased text-white bg-black-rich min-h-screen">
      <Assistant data={USER_PROFILE} />
    </div>
  );
}

export default App;

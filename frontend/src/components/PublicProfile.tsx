import React from 'react';
import Chatbot from './chatbot';

interface PublicProfileProps {
    data: {
        profileImage: string | null;
        name: string;
        title: string;
        bio: string;
    };
}

const PublicProfile: React.FC<PublicProfileProps> = ({ data }) => {
    return (
        <div className="h-[100dvh] flex flex-col items-center bg-black-rich relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 w-full flex-1 min-h-0 overflow-y-auto">

            {/* Hero Section */}
            <div className="w-full max-w-6xl px-6 py-6 md:py-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">

                {/* Left: Profile Image */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-dark rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-black-rich">
                        <img
                            src={data.profileImage || 'https://via.placeholder.com/300'}
                            alt={data.name}
                            className="w-full h-full object-cover rounded-full border-2 border-gold/50"
                        />
                    </div>
                </div>

                {/* Right: Info */}
                <div className="text-center md:text-left flex-1 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
                        {data.name}
                    </h1>
                    <p className="text-lg md:text-xl text-gold font-light tracking-wide">
                        {data.title}
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent mx-auto md:mx-0 my-4"></div>
                    <p className="text-gray-400 leading-relaxed max-w-xl text-base md:text-lg">
                        {data.bio}
                    </p>

                    <div className="pt-6">
                        <button className="bg-transparent border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black-rich transition-all duration-300 font-semibold uppercase tracking-wider text-sm flex items-center gap-2 mx-auto md:mx-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            {/* Chat Section */}
            <div className="w-full max-w-5xl px-6 pb-6 flex-1 min-h-0 flex flex-col">
                <div className="flex-1 min-h-0 bg-black-rich/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                    <Chatbot />
                </div>
            </div>

            </div>

        </div>
    );
};

export default PublicProfile;

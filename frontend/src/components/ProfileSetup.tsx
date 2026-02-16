import React from 'react';
import CVUpload from './CVUpload';

interface ProfileSetupProps {
    onGenerate: (data: {
        cvFile: File | null;
        profileImage: string | null;
        name: string;
        title: string;
        degree: string;
        bio: string;
    }) => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onGenerate }) => {
    return (
        <div className="h-[100dvh] flex items-center justify-center p-4 bg-[url('https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black-rich/90"></div>

            <div className="z-10 w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto">
                <CVUpload onGenerate={onGenerate} />
            </div>
        </div>
    );
};

export default ProfileSetup;

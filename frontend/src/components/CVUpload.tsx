import React, { useState, useRef } from 'react';

interface CVUploadProps {
    onGenerate: (data: {
        cvFile: File | null;
        profileImage: string | null;
        name: string;
        title: string;
        degree: string;
        bio: string;
    }) => void;
}

const CVUpload: React.FC<CVUploadProps> = ({ onGenerate }) => {
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const imgInputRef = useRef<HTMLInputElement>(null);

    // Additional fields for the profile since we aren't actually parsing the CV in this frontend-only demo
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [degree, setDegree] = useState('');
    const [bio, setBio] = useState('');

    const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we would upload the CV here and extract data.
        // For this demo, we pass the manually entered data + files.
        onGenerate({ cvFile, profileImage, name, title, degree, bio });
    };

    return (
        <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto scrollbar-hide">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-gold mb-1">CV Assistant</h2>
            <p className="text-center text-gray-400 mb-4 font-light text-sm">Upload your CV to generate your AI profile</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Profile Image Upload */}
                <div className="flex flex-col items-center justify-center">
                    <div
                        className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed border-gold/50 flex items-center justify-center overflow-hidden cursor-pointer hover:border-gold transition-colors group"
                        onClick={() => imgInputRef.current?.click()}
                    >
                        {profileImage ? (
                            <img src={profileImage} alt="Profile Preview" className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center p-2">
                                <span className="block text-xl mb-1 text-gold">📷</span>
                                <span className="text-[10px] text-gray-400 group-hover:text-gold transition-colors">Upload Photo</span>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            ref={imgInputRef}
                        />
                    </div>
                </div>

                {/* Inputs for Name/Title/Bio (Mocking extraction) */}
                <div className="space-y-3">
                    <div>
                        <label className="block text-[10px] font-semibold text-gold mb-0.5 uppercase tracking-wider">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ex. John Doe"
                            className="w-full bg-black-rich border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-semibold text-gold mb-0.5 uppercase tracking-wider">Degree</label>
                        <input
                            type="text"
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                            placeholder="Ex. MSc in Computer Science"
                            className="w-full bg-black-rich border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-semibold text-gold mb-0.5 uppercase tracking-wider">Professional Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ex. Senior Software Engineer"
                            className="w-full bg-black-rich border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-semibold text-gold mb-0.5 uppercase tracking-wider">Short Bio</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Brief summary of your expertise..."
                            className="w-full bg-black-rich border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors resize-none h-16 md:h-20"
                        />
                    </div>
                </div>

                {/* CV File Upload */}
                <div>
                    <label className="block text-[10px] font-semibold text-gold mb-0.5 uppercase tracking-wider">Upload CV (PDF/DOCX)</label>
                    <div
                        className="flex items-center justify-between bg-black-rich border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-gold/50 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <span className="text-xs truncate text-gray-300">
                            {cvFile ? cvFile.name : "Select file..."}
                        </span>
                        <span className="text-gold text-base">📎</span>
                    </div>
                    <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleCvChange}
                        className="hidden"
                        ref={fileInputRef}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-dark to-gold text-black-rich font-bold py-2.5 rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase tracking-wide text-sm"
                >
                    Generate Profile
                </button>
            </form>
        </div>
    );
};

export default CVUpload;

const Profile = () => {
  return (
    <section className="w-full min-h-[min(560px,calc(100vh-140px))] bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-4 flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="h-36 w-36 rounded-full bg-slate-800 flex items-center justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-slate-300"
          >
            <path
              d="M20 21a8 8 0 0 0-16 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <button
          type="button"
          aria-label="Change profile photo"
          className="absolute bottom-1.5 right-1.5 h-11 w-11 rounded-full bg-sky-500 text-white flex items-center justify-center ring-4 ring-slate-900"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 7 10.5 5.5H13.5L15 7H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <h2 className="text-3xl font-semibold text-slate-100">John Doe</h2>
      <p className="mt-2 text-slate-400">Click to edit name</p>

      <div className="mt-6 w-full max-w-sm space-y-3">
        <button
          type="button"
          className="w-full h-11 rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-300 font-semibold flex items-center justify-center gap-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16V4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 8l4-4 4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 20h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Upload Profile Picture
        </button>

        <button
          type="button"
          className="w-full h-11 rounded-xl border border-slate-700 bg-slate-900 text-slate-100 font-semibold flex items-center justify-center gap-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-6Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M14 2v6h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M9 13h6M9 17h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Upload CV / Resume
        </button>
      </div>
    </section>
  )
}

export default Profile

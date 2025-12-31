const Navbar = () => {
	return (
		<header className="w-full bg-slate-950 border-b border-slate-800">
			<div className="mx-auto max-w-screen-2xl px-2 sm:px-4 py-3 flex items-center gap-3">
				<div className="h-11 w-11 rounded-xl bg-sky-500 text-white flex items-center justify-center">
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 3c3.5 0 6 2.6 6 6v2c0 3.4-2.5 6-6 6s-6-2.6-6-6V9c0-3.4 2.5-6 6-6Z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
						<path
							d="M9 10h.01M15 10h.01"
							stroke="currentColor"
							strokeWidth="3"
							strokeLinecap="round"
						/>
						<path
							d="M9 14h6"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</div>

				<h1 className="text-2xl font-semibold">
					<span className="text-sky-500">AI Profile</span>{' '}
					<span className="text-slate-100">Assistant</span>
				</h1>
			</div>
		</header>
	)
}

export default Navbar

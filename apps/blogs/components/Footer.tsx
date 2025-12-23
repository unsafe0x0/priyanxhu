import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-[#282828] mt-16">
			<div className="max-w-3xl mx-auto px-3 py-8">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2 text-sm text-neutral-400">
						<span>© {currentYear}</span>
						<span className="text-neutral-600">•</span>
						<Link
							href="https://priyanxhu.me"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-400"
						>
							Priyanshu Chahar
						</Link>
					</div>

					<div className="flex items-center gap-4">
						<Link
							href="https://github.com/priyanxhu"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-400"
							aria-label="GitHub"
						>
							<FaGithub size={18} />
						</Link>
						<Link
							href="https://twitter.com/unsafezero"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-400"
							aria-label="Twitter"
						>
							<FaXTwitter size={18} />
						</Link>
						<Link
							href="https://linkedin.com/in/priyanxhu"
							target="_blank"
							rel="noopener noreferrer"
							className="text-neutral-400"
							aria-label="LinkedIn"
						>
							<FaLinkedinIn size={18} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

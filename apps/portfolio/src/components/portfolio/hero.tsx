import { profileData } from '@/lib/data'
import { ThemeToggle } from '../theme-toggle'

const techStack = [
    { name: 'React', icon: '/react.svg' },
    { name: 'TypeScript', icon: '/typescript.svg' },
    { name: 'Node.js', icon: '/nodejs.svg' },
    { name: 'Express.js', icon: '/expressjs.svg', invertOnDark: true },
    { name: 'Next.js', icon: '/nextjs.svg', invertOnDark: true },
    { name: 'MongoDB', icon: '/mongodb.svg' },
    { name: 'PostgreSQL', icon: '/postgresql.svg' },
]

export function Hero() {

    return (
        <header className="space-y-3">
            <div className="flex items-start justify-between">
                <div className="flex flex-col md:flex-row items-start justify-start gap-4">
                    <img
                        src={profileData.imageUrl}
                        alt={profileData.name}
                        className="w-32 h-32 rounded-md border-2 border-border"
                        draggable={false}
                    />
                    <div>
                        <h1 className="text-4xl font-semibold">{profileData.name}</h1>
                        <p className="text-xl text-muted-foreground mt-1">
                            {profileData.whoami}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                            {techStack.map((tech) => (
                                <img
                                    key={tech.name}
                                    src={tech.icon}
                                    alt={tech.name}
                                    title={tech.name}
                                    className={`w-5 h-5 ${tech.invertOnDark ? 'dark:invert' : ''}`}
                                    draggable={false}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <ThemeToggle />
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">{profileData.about}</p>

            <div className="flex flex-wrap gap-2">
                {profileData.socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:no-underline"
                    >
                        {link.name.toLowerCase()}
                    </a>
                ))}
            </div>

            <p className="text-sm text-muted-foreground">
                {profileData.contactText}{' '}
                <a
                    href={`mailto:${profileData.email}`}
                    className="text-primary underline hover:no-underline"
                >
                    {profileData.email}
                </a>
            </p>
        </header >
    )
}

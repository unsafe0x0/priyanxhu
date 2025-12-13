import { profileData } from '@/lib/data'

export function Extensions() {
    if (profileData.vsCodeExtensions.length === 0) {
        return null
    }

    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">VS Code Extensions</h2>

            <ul className="space-y-3 list-disc list-inside">
                {profileData.vsCodeExtensions.map((ext, index) => (
                    <li key={index}>
                        <a
                            href={ext.links[0]?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline hover:no-underline font-medium"
                        >
                            {ext.name.toLowerCase()}
                        </a>
                        {' : '}
                        <span className="text-muted-foreground">
                            {ext.description}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

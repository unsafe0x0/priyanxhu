import { profileData } from '@/lib/data'

export function Skills() {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">Skills & Tools</h2>
            <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="text-sm text-foreground bg-card px-3 py-1 rounded-md"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

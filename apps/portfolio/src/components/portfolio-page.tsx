import {
    Hero,
    Skills,
    Projects,
    Extensions,
    QuickLinks,
    Footer,
} from './portfolio'

export function Portfolio() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="max-w-4xl mx-auto px-3 py-10 space-y-12">
                <Hero />
                <Skills />
                <Projects />
                <Extensions />
                <QuickLinks />
                <Footer />
            </main>
        </div>
    )
}

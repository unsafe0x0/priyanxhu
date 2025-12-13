import { profileData } from '@/lib/data'

export function Footer() {
    return (
        <footer className="pt-8 border-t border-border text-sm text-muted-foreground">
            <p>
                © {new Date().getFullYear()} {profileData.name}
            </p>
        </footer>
    )
}

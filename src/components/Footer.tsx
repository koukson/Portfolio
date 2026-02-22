import { Container, Linkedin  } from "lucide-react"


const Footer = () => {
    return (
        <div className="translate-y-70">
        <footer className="footer footer-horizontal footer-center  p-10">
            <aside>

                <Container className="w-10 h-10" />
                <p className="font-bold">
                    JT
                    <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                   
                    <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bgh1142FpRAeDVziLd54BNQ%3D%3D" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current"/>
                    </a>
                   
                    
                   
                </div>
            </nav>
        </footer>
        </div>
    )
}

export default Footer
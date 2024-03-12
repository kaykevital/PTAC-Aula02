import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return(
        <footer>
            <div className='footer-icone'>
                <li>
                    <a href="https://www.instagram.com/kayke.vital/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kaykevital" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/KaykeKase" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareXTwitter} />
                    </a>
                </li>
            </div>
            <p>© Todos os direitos reservados a Kayke Vital</p>
        </footer>
    )
}
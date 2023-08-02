export default function Footer() {
    return (
        <footer className="text-center text-white bg-dark bg-gradient mt-auto">
            <div className="container pt-4">
                <a href="https://linkedin.com/in/this-adarsh" className="me-4 text-reset" target="_blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/this-adarsh" className="me-4 text-reset" target="_blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
            <div className="text-center p-3">
                🄯 {new Date().getFullYear()} <a href="https://github.com/this-adarsh/this-adarsh.github.io" className="text-white">
                    Copyleft: <span className="text-info">Adarsh Shukla</span></a>
            </div>
        </footer>
    );
}
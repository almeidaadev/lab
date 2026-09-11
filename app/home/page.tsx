import "./App.css";
import Link from "next/link";

async function HomePage() {
    return (
        <>
            <header className="site-header">
                <div className="container header-inner">
                    <a href="#" className="brand">
                        <span className="brand-mark">//</span>my_nerd_side
                    </a>
                    <nav className="folder-tabs">
                        <ul>
                            <li>
                                <Link href="/home" className="tab is-active">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/pdfs" className="tab is-active">
                                    Pdfs
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section className="hero container">
                    <span className="eyebrow">WebSite's goal </span>
                    <h1>
                        This WebSite is where I can organize my books and
                        anotations <span className="hl">do u love learn?</span>
                        'cause I love learn new things every single day
                        <span className="hl">...</span>
                    </h1>
                    <p className="lede"></p>

                    <div className="index-card">
                        <div className="index-card-row">
                            <span className="tag">Date created</span>
                            <span className="value">20/ago/2026</span>
                        </div>
                        <div className="index-card-row">
                            <span className="tag">Focus</span>
                            <span className="value">Self Development </span>
                        </div>
                        <div className="index-card-row">
                            <span className="tag">...</span>
                            <span className="value">...</span>
                        </div>
                    </div>
                </section>

                <section className="folders container">
                    <article className="folder-card">
                        <span className="folder-label">PASTA 02</span>
                        <h2>E-books</h2>
                        <p>
                            Manuais e livros de apoio pra reforçar o conteúdo
                            teórico de agropecuária e das áreas do vestibular.
                        </p>
                        <a href="Pdfs.tsx" className="folder-link">
                            Abrir pasta →
                        </a>
                    </article>
                </section>
            </main>
        </>
    );
}

export default HomePage;

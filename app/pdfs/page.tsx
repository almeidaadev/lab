import "./Pdfs.css";
import Link from "next/link";

function PdfsPage() {
    return (
        <>
            <header className="site-header">
                <div className="container header-inner">
                    <a href="./index.html" className="brand">
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

            <main className="container">
                <div className="contents">
                    <div className="contents-head">
                        <a href="/home" className="voltar">
                            ← voltar
                        </a>
                        <span className="eyebrow">Arquivo de estudo</span>
                    </div>

                    <h1>Meus arquivos</h1>
                    <p className="lede">
                        Provas anteriores, e-books e listas de exercícios,
                        organizados por pasta.
                    </p>

                    <div className="folders" id="folders"></div>

                    <div className="pdfs" id="pdfs"></div>
                </div>
            </main>
        </>
    );
}

export default PdfsPage;

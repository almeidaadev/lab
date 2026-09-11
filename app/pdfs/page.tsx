import "./Pdfs.css";
import Link from "next/link";

import { insertTodo } from "../api/actions";
import { supabase } from "@/lib/supabase";

async function PdfsPage() {
    const { data: pdfs, error } = await supabase
        .from("pdfs")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching pdfs:", error.message);
    }
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

                    <div className="grid grid-cols-3 gap-4">
                        {pdfs?.map((item) => (
                            <div key={item.id} className="border rounded p-2">
                                <a
                                    href={item.path}
                                    target="__blank"
                                    className="text-sm underline uppercase text-blue flex justify-center items-center text-white"
                                >
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="folders" id="folders"></div>

                    <div className="pdfs" id="pdfs"></div>
                </div>
            </main>
        </>
    );
}

export default PdfsPage;

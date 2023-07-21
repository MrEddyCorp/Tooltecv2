import react from "react";
import Link from 'next/link';
import Image from 'next/image';

export function NavBar(){
    return (
        <div id="headerSiempre" className="div100" >
            <div className="cont" style={{height: '100%'}}>
                <div  className="div100 contF" style={{height: '100%'}}>
                    <div className="headerLogo" >
                        <Link href="/"><Image src="/img/logo.svg" alt=" tooltec " style={{height: '100%'}} fill /></Link>
                    </div>
                    <div  id="menuNormal"  className="div100">
                        <Link href="/herramientas" target="_self">
                            <div id="mn_herramientas" className="menuMenuE left">
                                <div className="div100 menuMenuEM " >
                                    Herramientas 
                                </div>
                            </div>
                        </Link>
                        <Link href="/innovadores" target="_self">
                            <div  id="mn_innovadores"  className="menuMenuE left">
                                <div className="div100 menuMenuEM">
                                    Innovadores 
                                </div>
                            </div>
                        </Link>      
                        <div className="menuMenuE  right" >
                            <div className="div100 menuMenuEM ">
                                Iniciar sesión
                            </div>
                        </div>
                        <div className="menuMenuE right">
                            <div className="div100 menuMenuEM ">
                                Crear cuenta
                            </div>
                        </div>
                    </div>
                    <div  id="iconMenu">menu</div>
                </div>
            </div>
        </div>    
    )

}
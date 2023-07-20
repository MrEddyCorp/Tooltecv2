import react from "react";
import Link from 'next/link';
import Image from 'next/image';

export function NavBar(){
    return (
        <div id="headerSiempre" >
            <div  >
                <div >
                    <div >
                        <Link href="/"><Image src="/img/logo.svg" alt=" tooltec " height={100} width={100}/></Link>
                    </div>
                    <div  id="menuNormal" >
                        <Link href="/herramientas" target="_self">
                            <div id="mn_herramientas">
                                <div >
                                    Herramientas 
                                </div>
                            </div>
                        </Link>
                        <Link href="/innovadores" target="_self">
                            <div  id="mn_innovadores">
                                <div>
                                    Innovadores 
                                </div>
                            </div>
                        </Link>      
                        <div >
                            <div>
                                Iniciar sesión
                            </div>
                        </div>
                        <div >
                            <div >
                                Crear cuenta
                            </div>
                        </div>
                    </div>
                    <div  id="iconMenu"  >menu</div>
                </div>
            </div>
        </div>    
    )

}
import React from "react";

import Menu from "./Menu";
import Rodape from "./Rodape";
import Cabecalho from "./Cabecalho";

interface PaginaProps {
	children: React.ReactNode;
	className?: string;
}

const Pagina = (props: PaginaProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Cabecalho className="h-20" />
			<div className="flex-1 flex boxed">
				<Menu className="hidden lg:block lg:w-64 xl:w72 py-7" />
				<main
					className={`flex-1 py-7
                    ${props.className ?? ""}`}
				>
					{props.children}
				</main>
			</div>
			<Rodape className="h-14" />
		</div>
	);
};

export default Pagina;

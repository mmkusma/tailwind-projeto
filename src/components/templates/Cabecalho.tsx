import React from "react";
import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export interface CabecalhoProps {
	className?: string;
}

const Cabecalho = (props: CabecalhoProps) => {
	return (
		<header
			className={`flex items-center justify-between px-7 border-b border-zinc-800 ${
				props.className ?? ""
			}`}
		>
			<div className="flex items-center justify-between boxed">
				<Logo />
				<MenuUsuario />
			</div>
		</header>
	);
};

export default Cabecalho;

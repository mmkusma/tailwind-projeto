import React from "react";

export interface RodapeProps {
	className?: string;
}

const Rodape = (props: RodapeProps) => {
	return (
		<footer
			className={`
                px-7 border-t border-zinc-800
            flex items-center justify-end
            text-zinc-400 text-sm
            ${props.className ?? ""}`}
		>
			<div className="flex items-center justify-end boxed">
				Todos os direitos reservados &copy; {new Date().getFullYear()}
			</div>
		</footer>
	);
};

export default Rodape;

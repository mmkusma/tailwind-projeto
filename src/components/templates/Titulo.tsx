export interface TituloProps {
	texto: string;
	subtexto?: string;
}

export default function Titulo(props: TituloProps) {
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl font-bold text-white">{props.texto}</h1>
			{props.subtexto ? (
                <p className="text-zinc-400 text-sm">{props.subtexto}</p>
            ) : null}
		</div>
	);
}

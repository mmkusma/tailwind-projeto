import Pagina from "@/components/templates/Pagina";
import Titulo from "@/components/templates/Titulo";

export default function PaddingPage() {
	return (
		<Pagina className="flex flex-col gap-7">
			<Titulo
				texto="Utilizando Padding"
				subtexto="Espaçamento interno do conteúdo"
			/>
			<div>
				<div className="inline-block bg-blue-500 p-7">Conteudo</div>
				<div className="inline-block bg-blue-500 pt-7">Conteudo</div>
				<div className="inline-block bg-blue-500 pb-7">Conteudo</div>
				<div className="inline-block bg-blue-500 px-7">Conteudo</div>
				<div className="inline-block bg-blue-500 py-7">Conteudo</div>
			</div>
		</Pagina>
	);
}
